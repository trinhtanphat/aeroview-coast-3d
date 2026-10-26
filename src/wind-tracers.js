// Light-weight illustrative wind tracers between nine ECMWF point forecasts.
// We interpolate geographic wind vectors by inverse-distance weighting;
// this is NOT the ECMWF native field, a global streamlines product, or a fluid solver.
export function createWindTracers({C,viewer}){
 let collection=null,particles=[],timer=null,stations=[],hour=0,active=false,updates=0;
 const COUNT=24,REFRESH_MS=250;
 let bounds=null;
 const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
 const deg=Math.PI/180;
 function seeded(i,k){const n=Math.sin((i+1)*78.233+(k+1)*127.1)*43758.5453;return n-Math.floor(n);}
 function interpolate(lon,lat){
  const cos=Math.max(.2,Math.cos(lat*deg));let total=0,u=0,v=0;
  for(const pt of stations){
   const dx=(lon-pt.lon)*111.32*cos,dy=(lat-pt.lat)*111.32;
   const w=1/(.25+dx*dx+dy*dy);
   u+=w*pt.u;v+=w*pt.v;total+=w;
  }
  if(!total)return {u:0,v:0};
  return {u:u/total,v:v/total};
 }
 function reseed(i,k=0){
  const p=particles[i];if(!bounds)return;
  p.lon=bounds.w+(bounds.e-bounds.w)*seeded(i,k+updates*1e-5);
  p.lat=bounds.s+(bounds.n-bounds.s)*seeded(i+11,k+17+updates*1e-5);
 }
 function frame(){
  if(!active||!collection||viewer.isDestroyed())return;
  for(let i=0;i<particles.length;i++){
   const p=particles[i];
   let {u,v}=interpolate(p.lon,p.lat);const speed=Math.hypot(u,v);
   // ~110 simulated seconds per 250 ms makes wind visible at map scale.
   const multiplier=110/3600;
   const dx=u*multiplier,dy=v*multiplier;
   p.lon+=dx/(111.32*Math.max(.2,Math.cos(p.lat*deg)));
   p.lat+=dy/111.32;
   if(p.lon<bounds.w||p.lon>bounds.e||p.lat<bounds.s||p.lat>bounds.n)reseed(i,updates+19);
   const trailKm=Math.max(.18,Math.min(1.5,speed*.024));
   const norm=Math.max(.001,speed);
   const tailLon=p.lon-(u/norm)*trailKm/(111.32*Math.max(.2,Math.cos(p.lat*deg)));
   const tailLat=p.lat-(v/norm)*trailKm/111.32;
   p.line.positions=C.Cartesian3.fromDegreesArrayHeights([tailLon,tailLat,235,p.lon,p.lat,235]);
  }
  updates++;
  viewer.scene.requestRender();
 }
 function stop(){
  if(timer!==null)clearInterval(timer);timer=null;
  active=false;
  if(collection){try{viewer.scene.primitives.remove(collection);}catch{}collection=null;}
  particles=[];stations=[];bounds=null;
 }
 function setData(locations,forecasts,h){
  stop();hour=h;
  if(!locations||!forecasts||locations.length!==9||forecasts.length!==9)return false;
  stations=[];
  for(let i=0;i<9;i++){
   const speed=forecasts[i]?.hourly?.wind_speed_10m?.[h];
   const direction=forecasts[i]?.hourly?.wind_direction_10m?.[h];
   if(speed===null||direction===null||speed===undefined||direction===undefined||
      !Number.isFinite(Number(speed))||!Number.isFinite(Number(direction)))continue;
   const bearing=Number(direction)*deg;
   // Wind direction is FROM; local E/N wind vector points in the opposite direction.
   stations.push({lon:locations[i].lon,lat:locations[i].lat,
    u:-Math.sin(bearing)*Number(speed),v:-Math.cos(bearing)*Number(speed)});
  }
  if(stations.length<5){stations=[];return false;}
  bounds={w:Math.min(...locations.map(p=>p.w)),e:Math.max(...locations.map(p=>p.e)),
   s:Math.min(...locations.map(p=>p.s)),n:Math.max(...locations.map(p=>p.n))};
  collection=viewer.scene.primitives.add(new C.PolylineCollection());
  const material=C.Material.fromType('Color',{color:C.Color.fromCssColorString('#b6f4ef').withAlpha(.90)});
  for(let i=0;i<COUNT;i++){
   const line=collection.add({positions:C.Cartesian3.fromDegreesArrayHeights([locations[4].lon,locations[4].lat,235,locations[4].lon+.0001,locations[4].lat,235]),
    width:2,material});
   particles.push({line,lon:0,lat:0});reseed(i,1);
  }
  active=true;frame();
  timer=setInterval(frame,REFRESH_MS);
  return true;
 }
 return {
  setData,stop,
  diagnostics:()=>({active,particles:particles.length,stations:stations.length,updates,hour,interpolated:true}),
  destroy:stop
 };
}
