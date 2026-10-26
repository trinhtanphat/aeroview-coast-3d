// User-supplied WGS84 GeoJSON building footprints, rendered as local overlays.
// No claims of Google photogrammetry or complete OSM building coverage.
const $=id=>document.getElementById(id);
const MAX_BYTES=3*1024*1024,MAX_BUILDINGS=500,MAX_VERTICES=18000;
const number=(v)=>{
 if(v===null||v===undefined)return null;
 const t=String(v).trim();
 const match=t.match(/^(-?\d+(?:\.\d+)?)\s*(m|ft|feet)?$/i);
 if(!match)return null;
 const val=Number(match[1])*(match[2]&&/ft|feet/i.test(match[2])?.3048:1);
 return Number.isFinite(val)?val:null;
};
function buildingHeight(props){
 const p=props||{};
 const direct=number(p.height??p['building:height']);
 if(direct!==null)return {height:Math.max(2,Math.min(450,direct)),assumed:false};
 const floors=number(p['building:levels']??p.levels);
 if(floors!==null)return {height:Math.max(3,Math.min(450,floors*3)),assumed:true};
 return {height:12,assumed:true};
}
function goodRing(ring){
 if(!Array.isArray(ring)||ring.length<4||ring.length>1800)return false;
 return ring.every(p=>Array.isArray(p)&&p.length>=2&&p.length<=4
  &&typeof p[0]==='number'&&typeof p[1]==='number'
  &&Number.isFinite(p[0])&&Number.isFinite(p[1])
  &&p[0]>=-180&&p[0]<=180&&p[1]>=-85&&p[1]<=85);
}
function validate(input){
 if(input?.type!=='FeatureCollection'||!Array.isArray(input.features))
  throw new Error('Expected a GeoJSON FeatureCollection.');
 const out=[];let vertexCount=0;
 for(const feature of input.features){
  const geometry=feature?.geometry;if(!geometry)continue;
  if(!['Polygon','MultiPolygon'].includes(geometry.type))continue;
  const polys=geometry.type==='Polygon'?[geometry.coordinates]:geometry.coordinates;
  if(!Array.isArray(polys))throw new Error('Invalid polygon coordinates.');
  const h=buildingHeight(feature.properties);
  for(const rings of polys){
   if(!Array.isArray(rings)||!rings.length||!rings.every(goodRing))throw new Error('Invalid polygon ring.');
   const total=rings.reduce((n,r)=>n+r.length,0);
   vertexCount+=total;
   if(vertexCount>MAX_VERTICES||out.length>=MAX_BUILDINGS)throw new Error('Building count/vertices exceed demo limits.');
   const center=rings[0].reduce((a,p)=>(a[0]+=p[0],a[1]+=p[1],a),[0,0]);
   center[0]/=rings[0].length;center[1]/=rings[0].length;
   out.push({rings:rings.map(r=>r.map(p=>[p[0],p[1]])),height:h.height,assumed:h.assumed,
    center,name:String(feature.properties?.name||'Building').slice(0,60)});
  }
 }
 if(!out.length)throw new Error('No Polygon or MultiPolygon building footprints found.');
 return out;
}
export function makeBuildingOverlay({C,viewer}){
 let active=true,entities=[],visible=true,features=[];
 const status=s=>{$('buildings-status').textContent=s;};
 const flat=ring=>ring.flatMap(p=>[p[0],p[1]]);
 function add(shape){
  const outer=C.Cartesian3.fromDegreesArray(flat(shape.rings[0]));
  const holes=shape.rings.slice(1).map(r=>new C.PolygonHierarchy(C.Cartesian3.fromDegreesArray(flat(r))));
  const h=shape.height;
  const color=C.Color.fromHsl(.56-Math.min(h/600,.12),.13,.57, .72);
  return viewer.entities.add({
   name:shape.name+(shape.assumed?' (height estimated)':' (declared height)'),
   polygon:{
    hierarchy:new C.PolygonHierarchy(outer,holes),
    height:0,extrudedHeight:h,closeTop:true,closeBottom:true,
    material:color,outline:true,outlineColor:C.Color.fromCssColorString('#dbe7ea').withAlpha(.63)
   }
  });
 }
 function remove(){
  entities.forEach(e=>viewer.entities.remove(e));
  entities=[];features=[];viewer.scene.requestRender();
 }
 async function importFile(file){
  if(!file)return;
  if(file.size>MAX_BYTES){status('GeoJSON must be ≤3 MB.');return;}
  try{
   const parsed=validate(JSON.parse(await file.text()));
   if(!active)return;
   // Validation occurs before removing the previous layer.
   remove();features=parsed;
   for(const f of features)entities.push(add(f));
   visible=true;$('buildings-toggle').textContent='◉ HIDE';
   const assumed=features.filter(f=>f.assumed).length;
   status('Loaded '+entities.length+' GIS building footprints; '+assumed+' heights estimated from levels or assumed 12 m. NOT photogrammetry.');
   viewer.scene.requestRender();
  }catch(e){status('GeoJSON rejected: '+(e?.message||'invalid data')+'. Existing geometry retained.');}
 }
 $('buildings-import').addEventListener('click',()=>$('buildings-file').click());
 $('buildings-file').addEventListener('change',async e=>{
  const file=e.target.files?.[0];
  try{await importFile(file);}finally{e.target.value='';}
 });
 $('buildings-toggle').addEventListener('click',()=>{
  if(!entities.length){status('Import a building footprint file first.');return;}
  visible=!visible;entities.forEach(e=>e.show=visible);
  $('buildings-toggle').textContent=visible?'◉ HIDE':'◉ SHOW';
  viewer.scene.requestRender();
 });
 $('buildings-clear').addEventListener('click',()=>{
  remove();visible=true;$('buildings-toggle').textContent='◉ HIDE';
  status('Local building extrusions removed; background map unchanged.');
 });
 function exportSnapshot(){
   return {schema:'aeroview-buildings-v1',visible,items:features.map(f=>({
    rings:f.rings.map(r=>r.map(p=>p.slice())),height:f.height,assumed:f.assumed,name:f.name
   }))};
 }
 function validateSnapshot(snapshot){
   if(snapshot===null||snapshot===undefined)return {schema:'aeroview-buildings-v1',visible:true,items:[]};
   if(snapshot.schema!=='aeroview-buildings-v1'||typeof snapshot.visible!=='boolean'||!Array.isArray(snapshot.items)||snapshot.items.length>MAX_BUILDINGS){
    throw new Error('Invalid building snapshot schema.');
   }
   let vertices=0;
   const items=snapshot.items.map(f=>{
    if(!f||!Array.isArray(f.rings)||!f.rings.length||!f.rings.every(goodRing)||
       typeof f.height!=='number'||!Number.isFinite(f.height)||f.height<2||f.height>450||
       typeof f.assumed!=='boolean'||typeof f.name!=='string'||f.name.length>100){
      throw new Error('Invalid building footprint or height in project.');
    }
    vertices+=f.rings.reduce((n,r)=>n+r.length,0);
    if(vertices>MAX_VERTICES)throw new Error('Project exceeds building vertex limit.');
    return {rings:f.rings.map(r=>r.map(p=>[p[0],p[1]])),height:f.height,
       assumed:f.assumed,name:f.name.slice(0,60)};
   });
   return {schema:'aeroview-buildings-v1',visible:snapshot.visible,items};
 }
 function restoreSnapshot(snapshot){
   const checked=validateSnapshot(snapshot);
   remove();features=checked.items;visible=checked.visible;
   for(const f of features)entities.push(add(f));
   for(const e of entities)e.show=visible;
   $('buildings-toggle').textContent=visible?'◉ HIDE':'◉ SHOW';
   status('Restored '+entities.length+' project building extrusions ('+features.filter(f=>f.assumed).length+' height estimates).');
   viewer.scene.requestRender();
 }
 return {
  exportSnapshot,validateSnapshot,restoreSnapshot,
  clear:()=>{remove();visible=true;$('buildings-toggle').textContent='◉ HIDE';},
  diagnostics:()=>({count:entities.length,visible,assumed:features.filter(f=>f.assumed).length}),
  destroy(){active=false;remove();}
 };
}
