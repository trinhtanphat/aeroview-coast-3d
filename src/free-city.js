// Free, no-key 3D building map based on OpenFreeMap OSM vector tiles + MapLibre.
// Geolocated vector building extrusions; no imagery or photogrammetric 3D.
import * as maplibregl from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import 'maplibre-gl/dist/maplibre-gl.css';
import {createFreeCityControls} from './free-city-controls.js';

const STYLE={
 version:8,name:'AEROVIEW | Geographic 3D City',
 sources:{openmaptiles:{type:'vector',url:'https://tiles.openfreemap.org/planet'}},
 layers:[
  {id:'background',type:'background',paint:{'background-color':'#e8e8df'}},
  {id:'land',type:'fill',source:'openmaptiles','source-layer':'landcover',paint:{'fill-color':'#a5b899','fill-opacity':0.42}},
  {id:'green-space',type:'fill',source:'openmaptiles','source-layer':'park',paint:{'fill-color':'#a8c6a0','fill-opacity':0.82}},
  {id:'water',type:'fill',source:'openmaptiles','source-layer':'water',paint:{'fill-color':'#60b5bd'}},
  {id:'coastline',type:'line',source:'openmaptiles','source-layer':'water',paint:{'line-color':'#e7f6ed','line-width':1.8,'line-opacity':0.55}},
  {id:'road-minor',type:'line',source:'openmaptiles','source-layer':'transportation',minzoom:13,
   paint:{'line-color':'#f8f7f1','line-width':['interpolate',['linear'],['zoom'],13,.6,17,2.5]}},
  {id:'road-main',type:'line',source:'openmaptiles','source-layer':'transportation',filter:['in',['get','class'],['literal',['primary','secondary','trunk','motorway']]],
   paint:{'line-color':'#c9c2ac','line-width':['interpolate',['linear'],['zoom'],13,1,17,5]}},
  {id:'building-3d',type:'fill-extrusion',source:'openmaptiles','source-layer':'building',minzoom:13.5,
   filter:['!', ['has','hide_3d']],
   paint:{
    'fill-extrusion-color':['interpolate',['linear'],['coalesce',['get','render_height'],12],0,'#d5dad5',60,'#b7cbcd',250,'#8caab3'],
    'fill-extrusion-height':['coalesce',['get','render_height'],12],
    'fill-extrusion-base':['coalesce',['get','render_min_height'],0],
    'fill-extrusion-opacity':.93
   }}
 ]
};
const CITIES={
 goldcoast:[153.430,-28.002],
 hcmc:[106.7009,10.7769],
 singapore:[103.851,1.284],
 nyc:[-74.006,40.713],
 tokyo:[139.767,35.681]
};
const cityPosition=(id)=>CITIES[id]||CITIES.goldcoast;

export async function createFreeBuildingsView({container,city='goldcoast'}={}){
 // OpenFreeMap official Vite integration: explicit MapLibre worker URL.
 maplibregl.setWorkerUrl(workerUrl);
 let active=true,loaded=false,steps=0,flightTimer=null,flightRunning=false;
 let currentCity=city,controls=null;
 const child=document.createElement('div');
 child.className='free-city-viewport';
 child.setAttribute('aria-label','Real-location OpenFreeMap 3D city');
 container.replaceChildren(child);
 const [lon,lat]=cityPosition(city);
 const map=new maplibregl.Map({
  container:child,style:STYLE,
  center:[lon,lat],zoom:15.7,pitch:64,bearing:-26,
  maxPitch:80,antialias:true,attributionControl:true,
  canvasContextAttributes:{antialias:true,preserveDrawingBuffer:true}, // user-initiated attributed PNG export
  fadeDuration:0,
  maxTileCacheSize:80
 });
 map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'top-left');
 const onError=(event)=>{
  // Avoid disclosing full provider URLs (including any future signed requests).
  if(active)console.warn('Free city tile/render issue:',event.error?.name||'tile error');
 };
 map.on('error',onError);
 try{
  await new Promise((resolve,reject)=>{
   let settled=false;
   const cleanup=()=>{clearTimeout(timeout);map.off('styledata',check);};
   const check=()=>{
    if(settled||!map.getLayer('building-3d'))return;
    settled=true;cleanup();resolve();
   };
   const timeout=setTimeout(()=>{
    if(settled)return;
    settled=true;cleanup();reject(new Error('OpenFreeMap style not available within 25 seconds'));
   },25000);
   map.on('styledata',check);
   check();
  });
  loaded=true;
  if(!active)throw new Error('Map was closed before initialization finished');
  // OpenFreeMap Liberty defines its own georeferenced building-3d extrusion layer.
  if(!map.getLayer('building-3d'))throw new Error('Free vector style has no 3D building layer');
  map.setPaintProperty('building-3d','fill-extrusion-opacity',0.89);
  map.setPaintProperty('building-3d','fill-extrusion-color',
   ['interpolate',['linear'],['coalesce',['get','render_height'],10],
    0,'#c7cbc4',35,'#d6ddd9',110,'#abc2c5',240,'#829fac']);
  controls=createFreeCityControls({map,world:container,getCity:()=>currentCity,onStop:()=>stopFlight(),onStartFlight:()=>startFlight()});
  controls.setMood('daylight');
  map.resize();
 }catch(err){map.remove();child.remove();throw err;}
 function stopFlight(){
  flightRunning=false;steps=0;
  if(flightTimer!==null){clearTimeout(flightTimer);flightTimer=null;}
  if(active)map.stop();
 }
 function setCity(id){
  if(!active)return;
  currentCity=id;
  stopFlight();
  const [lng,latitude]=cityPosition(id);
  map.flyTo({center:[lng,latitude],zoom:15.7,pitch:64,bearing:-26,duration:1700,essential:true});
 }
 function startFlight(){
  if(!active||!loaded)return;
  stopFlight();
  flightRunning=true;
  const initial=map.getCenter();
  const route=[
   {center:[initial.lng-.008,initial.lat-.002],zoom:15.1,pitch:65,bearing:-25},
   {center:[initial.lng+.003,initial.lat+.003],zoom:16.2,pitch:67,bearing:18},
   {center:[initial.lng+.011,initial.lat+.006],zoom:15.9,pitch:57,bearing:52}
  ];
  let index=0;
  const next=()=>{
   if(!active||!flightRunning)return;
   if(index>=route.length){flightRunning=false;flightTimer=null;return;}
   map.flyTo({...route[index++],duration:3300,essential:true});
   steps++;
   flightTimer=setTimeout(next,3900);
  };
  next();
 }
 const onResize=()=>{if(active)map.resize();};
 window.addEventListener('resize',onResize);
 return {
  startFlight,stopFlight,setCity,
  diagnostics:()=>({
   active,loaded,zoom:map.getZoom(),pitch:map.getPitch(),
   longitude:map.getCenter().lng,latitude:map.getCenter().lat,
   buildingLayer:!!map.getLayer('building-3d'),
   tilesLoaded:map.areTilesLoaded(),mapLoaded:map.loaded(),styleLoaded:map.isStyleLoaded(),
   sourceLoaded:map.isSourceLoaded('openmaptiles'),
   visibleBuildings:(()=>{try{return map.queryRenderedFeatures({layers:['building-3d']}).length}catch{return 0}})(),
   visuals:controls?.diagnostics(),
   styleSource:'OpenFreeMap / OpenStreetMap',flightRunning,flightSteps:steps
  }),
  destroy(){
   if(!active)return;
   stopFlight();active=false;
   controls?.destroy();controls=null;
   window.removeEventListener('resize',onResize);
   map.off('error',onError);
   map.remove();child.remove();
  }
 };
}
