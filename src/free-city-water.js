// Decorative sea shimmer, generated in-browser with a seamless tile.
// Purely cartographic texture: NOT observed ocean currents, depth, tides or waves.
const NAME='aero-sea-sheen';
const SIZE=128;
function makeOceanTile(){
 const cvs=document.createElement('canvas');
 cvs.width=cvs.height=SIZE;
 const ctx=cvs.getContext('2d',{willReadFrequently:true});
 const data=ctx.createImageData(SIZE,SIZE);
 const tau=Math.PI*2;
 for(let y=0;y<SIZE;y++){
  for(let x=0;x<SIZE;x++){
   const u=x/SIZE,v=y/SIZE;
   // Frequencies are integer multiples, so all opposing tile edges wrap.
   const broad=Math.sin(tau*(u*2+v))*Math.sin(tau*(v*2-u));
   // Fine, broken highlights: suppress the obvious repeating oval/stripe motifs.
   const line=Math.pow(Math.max(0,Math.cos(tau*(v*9+u*2))),24);
   const fragment=Math.pow(Math.max(0,Math.sin(tau*(u*11-v*3))),6);
   const micro=Math.sin(tau*(u*17+v*13))*Math.sin(tau*(u*5-v*7));
   const pixel=(y*SIZE+x)*4;
   data.data[pixel]=213;
   data.data[pixel+1]=249;
   data.data[pixel+2]=248;
   data.data[pixel+3]=Math.round(Math.max(2,Math.min(26,5+3*broad+2*micro+15*line*fragment)));
  }
 }
 ctx.putImageData(data,0,0);
 return ctx.getImageData(0,0,SIZE,SIZE);
}
export function setOceanDetail(map,enabled=true){
 if(!map.getSource('openmaptiles'))return false;
 if(enabled){
  if(!map.hasImage(NAME))map.addImage(NAME,makeOceanTile(),{pixelRatio:1});
  if(!map.getLayer('aero-water-detail')){
   map.addLayer({
    id:'aero-water-detail',type:'fill',source:'openmaptiles','source-layer':'water',
    paint:{'fill-pattern':NAME,'fill-opacity':.54}
   },map.getLayer('coastline')?'coastline':undefined);
   // A gentle line along real mapped water polygon edges, NOT a wave forecast.
   map.addLayer({
    id:'aero-shore-glow',type:'line',source:'openmaptiles','source-layer':'water',
    paint:{'line-color':'#b9f0e4','line-width':['interpolate',['linear'],['zoom'],12,2,15,11,17,18],
     'line-blur':1.75,'line-opacity':.22}
   },map.getLayer('coastline')?'coastline':undefined);
   map.addLayer({
    id:'aero-shore-highlight',type:'line',source:'openmaptiles','source-layer':'water',
    paint:{'line-color':'#e9fff9','line-width':1.4,'line-blur':.3,'line-opacity':.40}
   },map.getLayer('coastline')?'coastline':undefined);
  }else for(const id of ['aero-water-detail','aero-shore-glow','aero-shore-highlight'])
   if(map.getLayer(id))map.setLayoutProperty(id,'visibility','visible');
 }else for(const id of ['aero-water-detail','aero-shore-glow','aero-shore-highlight']){
  if(map.getLayer(id))map.setLayoutProperty(id,'visibility','none');
 }
 return !!enabled;
}
