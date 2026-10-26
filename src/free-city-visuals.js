// Original cartographic moods for geographic OSM vector scenes.
// No imagery, weather observations or provider license claims are implied.
const PALETTES={
 daylight:{
  sky:'#8fc8e5',horizon:'#e7f2f0',fog:'#d8e9e8',
  land:'#edf0e3',green:'#a2c6a7',water:'#55b8c5',shore:'#e4f6f0',
  minor:'#fcfaf1',major:'#d9c7b0',light:'#fff7ec',power:.68,
  buildings:['#dde0d6','#c3d2d0','#9ebac3','#7598a7']
 },
 golden:{
  sky:'#88abd5',horizon:'#ffe6cc',fog:'#eadccc',
  land:'#f2e6cb',green:'#b8bf8f',water:'#419ab8',shore:'#fff1da',
  minor:'#fef6dd',major:'#d6ae8d',light:'#fff0d7',power:.86,
  buildings:['#e8d3bc','#d7b6a0','#c1a89f','#a58b88']
 },
 bluehour:{
  sky:'#213f70',horizon:'#d1a5a6',fog:'#626f98',
  land:'#939da8',green:'#6d8f8a',water:'#245c82',shore:'#b0cbd4',
  minor:'#bac5ca',major:'#929cad',light:'#ccdcff',power:.46,
  buildings:['#9eaebb','#7e9aaf','#627c9c','#455d80']
 }
};
export function applyCityMood(map,mood='daylight'){
 const key=Object.hasOwn(PALETTES,mood)?mood:'daylight',p=PALETTES[key];
 const paint=(layer,prop,value)=>{if(map.getLayer(layer))map.setPaintProperty(layer,prop,value);};
 paint('background','background-color',p.land);
 paint('land','fill-color',p.green);
 paint('green-space','fill-color',p.green);
 paint('water','fill-color',p.water);
 paint('coastline','line-color',p.shore);
 paint('road-minor','line-color',p.minor);
 paint('road-main','line-color',p.major);
 // Preserve geographic water boundaries while styling our optional decorative edge.
 paint('aero-shore-glow','line-color',key==='golden'?'#ffe4c3':key==='bluehour'?'#b5c9df':'#b9f0e4');
 paint('aero-shore-highlight','line-color',key==='golden'?'#fff5da':key==='bluehour'?'#c5d7eb':'#e9fff9');
 paint('aero-water-detail','fill-opacity',key==='bluehour'?.28:key==='golden'?.42:.54);
 paint('building-3d','fill-extrusion-color',[
  'interpolate',['linear'],['coalesce',['get','render_height'],12],
  0,p.buildings[0],35,p.buildings[1],110,p.buildings[2],240,p.buildings[3]
 ]);
 try{map.setLight({anchor:'map',color:p.light,intensity:p.power,position:[1.3,key==='golden'?245:205,key==='bluehour'?35:48]});}catch{}
 try{map.setSky({
  'sky-color':p.sky,'sky-horizon-blend':.64,
  'horizon-color':p.horizon,'horizon-fog-blend':.76,
  'fog-color':p.fog,'fog-ground-blend':.28
 });}catch(e){console.warn('Sky unavailable:',e?.name);}
 return key;
}
export function cityView(city='goldcoast',mode='skyline'){
 const centers={
  goldcoast:[153.430,-28.002],hcmc:[106.7009,10.7769],
  singapore:[103.851,1.284],nyc:[-74.006,40.713],tokyo:[139.767,35.681]
 };
 const center=centers[city]||centers.goldcoast;
 if(mode==='overhead')return {center,zoom:15.1,pitch:16,bearing:0};
 if(mode==='coast'){
  return {
   center:city==='goldcoast'?[153.435,-28.002]:center,
   zoom:city==='goldcoast'?15.0:15.35,pitch:70,bearing:city==='goldcoast'?-30:38
  };
 }
 return {center,zoom:15.7,pitch:64,bearing:-26};
}
