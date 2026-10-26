// Original procedural cladding for cartographic buildings.
// These are decorative materials, not a reconstruction of actual facades.
const TYPES=[
 {name:'aero-facade-glass',base:'#6c90a0',pane:'#9bbbc6',dark:'#2e536b',trim:'#c5d8d5',balcony:false},
 {name:'aero-facade-modern',base:'#bcc4bd',pane:'#6e96a2',dark:'#37586c',trim:'#e9e8de',balcony:true},
 {name:'aero-facade-warm',base:'#c2b9a6',pane:'#859e9f',dark:'#5c7580',trim:'#ddd2b9',balcony:true}
];
function makePixels({base,pane,dark,trim,balcony},size=64){
 const canvas=document.createElement('canvas');
 canvas.width=canvas.height=size;
 const ctx=canvas.getContext('2d',{willReadFrequently:true});
 ctx.fillStyle=base;ctx.fillRect(0,0,size,size);
 const cols=8,rows=8,unit=size/cols;
 // Repeatable tile: every edge aligns with the next 64-pixel tile.
 for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
  const x=col*unit,y=row*unit;
  const lit=((row*43+col*17)%9)<3;
  ctx.fillStyle=lit?pane:dark;
  ctx.fillRect(x+1,y+2,unit-2,unit-3);
  ctx.fillStyle=lit?'#eff1e4':'#789da4';
  ctx.fillRect(x+1,y+2,1,unit-4);
  ctx.fillStyle=trim;
  ctx.fillRect(x,y,unit,1.2);
  if(balcony){
   ctx.fillStyle='#dfe5dd';
   ctx.fillRect(x,y+unit-2,unit,1.8);
  }
 }
 return ctx.getImageData(0,0,size,size);
}
export function installFacadeImages(map){
 for(const type of TYPES){
  if(!map.hasImage(type.name))map.addImage(type.name,makePixels(type),{pixelRatio:1});
 }
}
const choice=['step',['coalesce',['get','render_height'],12],
 'aero-facade-warm',35,'aero-facade-modern',100,'aero-facade-glass'];
export function setFacadeDetail(map,on){
 if(!map.getLayer('building-3d'))return false;
 if(on){
  installFacadeImages(map);
  map.setPaintProperty('building-3d','fill-extrusion-pattern',choice);
 }else map.setPaintProperty('building-3d','fill-extrusion-pattern',null);
 return !!on;
}
