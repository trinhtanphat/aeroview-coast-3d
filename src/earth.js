// AEROVIEW Earth experience. Loaded only when the user explicitly opts in.
// No Google API key is persisted, placed in a URL hash, or bundled in this application.
import {makeWeatherStudio} from './weather.js';
import {makeEditorStudio} from './studio.js';
import {makeSpatialWeatherGrid} from './weather-grid.js';
import {makeBuildingOverlay} from './buildings.js';
const CESIUM_VERSION = '1.145.0';
const CESIUM_ROOT = `https://cdn.jsdelivr.net/npm/cesium@${CESIUM_VERSION}/Build/Cesium/`;
const CITIES = Object.freeze({
 goldcoast:{name:'GOLD COAST',lat:-28.002,lon:153.430,alt:2100},
 hcmc:{name:'HỒ CHÍ MINH',lat:10.7769,lon:106.7009,alt:2200},
 singapore:{name:'SINGAPORE',lat:1.284,lon:103.851,alt:2100},
 nyc:{name:'NEW YORK',lat:40.7128,lon:-74.006,alt:2400},
 tokyo:{name:'TOKYO',lat:35.6812,lon:139.7671,alt:2400},
});
const $=id=>document.getElementById(id);
let cesiumPromise;
function loadCesium(){
 if(window.Cesium?.Viewer)return Promise.resolve(window.Cesium);
 if(cesiumPromise)return cesiumPromise;
 cesiumPromise=new Promise((resolve,reject)=>{
   window.CESIUM_BASE_URL=CESIUM_ROOT;
   if(!document.getElementById('cesium-styles')){
     const css=document.createElement('link');
     css.id='cesium-styles';css.rel='stylesheet';
     css.href=CESIUM_ROOT+'Widgets/widgets.css';document.head.appendChild(css);
   }
   const script=document.createElement('script');
   script.id='cesium-runtime';script.async=true;script.src=CESIUM_ROOT+'Cesium.js';
   let completed=false;
   const done=(err)=>{
     if(completed)return;completed=true;clearTimeout(timeout);
     if(err){cesiumPromise=undefined;script.remove();reject(err);}
     else if(window.Cesium?.Viewer)resolve(window.Cesium);
     else {cesiumPromise=undefined;reject(new Error('Cesium was not initialized'));}
   };
   const timeout=setTimeout(()=>done(new Error('Cesium download timed out; check your connection')),45000);
   script.onload=()=>done();
   script.onerror=()=>done(new Error('Unable to load Cesium from the CDN'));
   document.head.appendChild(script);
 });
 return cesiumPromise;
}
function mapCamera(C,viewer,city,mode){
 const p=CITIES[city]||CITIES.goldcoast;
 const coord=document.querySelector('.coordinates');
 if(coord){
   const lat=Math.abs(p.lat).toFixed(3)+'° '+(p.lat>=0?'N':'S');
   const lon=Math.abs(p.lon).toFixed(3)+'° '+(p.lon>=0?'E':'W');
   const label=document.createElement('strong');
   label.textContent=p.name+' / '+(mode==='atlas'?'WORLD ATLAS':'PHOTOREAL 3D');
   coord.replaceChildren(document.createTextNode(lat+' · '+lon),document.createElement('br'),label);
 }
 viewer.camera.setView({
  destination:C.Cartesian3.fromDegrees(p.lon,p.lat,mode==='photoreal'?p.alt:p.alt*3.5),
  orientation:{heading:C.Math.toRadians(0),pitch:C.Math.toRadians(-58),roll:0}
 });
 viewer.scene.requestRender();
}
function makeViewer(C, mode){
 // Disable all Cesium ion-backed defaults: using them would trigger
 // token/ion requests that were never explicitly authorized.
 const viewer=new C.Viewer('earth-view',{
  animation:false,timeline:false,baseLayerPicker:false,
  baseLayer:false,globe:mode==='photoreal'?false:undefined,
  geocoder:false,homeButton:false,sceneModePicker:false,
  selectionIndicator:false,infoBox:false,navigationHelpButton:false,
  fullscreenButton:false,vrButton:false,
  requestRenderMode:true,maximumRenderTimeChange:Infinity
 });
 if(mode==='atlas'){
   const osm=new C.OpenStreetMapImageryProvider({
    url:'https://tile.openstreetmap.org/',
    credit:'© OpenStreetMap contributors',
    minimumLevel:0,maximumLevel:18
   });
   viewer.imageryLayers.addImageryProvider(osm);
 }
 return viewer;
}
export function setupEarthMode({onActivate=()=>{},onDeactivate=()=>{}}={}){
 let viewer=null, liveMode=null, busy=false, launching=0;
 let weather=null,editor=null,weatherGrid=null,buildings=null;
 const originalCoordinates=document.querySelector('.coordinates')?.innerHTML;
 const modal=$('earth-dialog');
 const keyField=$('earth-key');
 const message=$('earth-message');
 const modalButton=$('earth-launch');
 const world=$('earth-view');
 const hud=$('earth-hud');
 const resetKey=()=>{keyField.value='';$('earth-paid-confirm').checked=false;};
 const selectedMode=()=>document.querySelector('input[name="earth-layer"]:checked')?.value||'atlas';
 const setMessage=(txt,isError=false)=>{
  message.textContent=txt;message.classList.toggle('is-error',isError);
 };
 const updateForm=()=>{
  $('earth-key-section').hidden=selectedMode()!=='photoreal';
  setMessage('');
 };
 const open=()=>{
  if(busy)return;
  modal.hidden=false;
  updateForm();
  $('earth-launch').focus();
 };
 const close=()=>{
  if(busy)return;
  modal.hidden=true;resetKey();setMessage('');
 };
 function removeViewer(){
  try{buildings?.destroy();weatherGrid?.destroy();weather?.destroy();editor?.destroy();}catch(e){console.warn('Studio cleanup:',e.name);}
  buildings=null;weatherGrid=null;weather=null;editor=null;$('studio').hidden=true;
  try{if(viewer&&!viewer.isDestroyed())viewer.destroy();}catch(e){console.warn('Cesium cleanup:',e.message);}
  viewer=null;liveMode=null;
  world.replaceChildren();
  world.hidden=true;hud.hidden=true;$('earth-attribution').hidden=true;
  const coord=document.querySelector('.coordinates');
  if(coord&&originalCoordinates)coord.innerHTML=originalCoordinates;
  document.body.classList.remove('earth-mode');
 }
 const deactivate=()=>{
  launching++;
  removeViewer();
  resetKey();
  onDeactivate();
 };
 async function launch(){
  if(busy)return;
  const mode=selectedMode(),city=$('earth-city').value||'goldcoast';
  const key=keyField.value.trim();
  if(mode==='photoreal'){
    if(!/^[-\w]{12,256}$/.test(key)){
      setMessage('A valid Google Map Tiles API key is required.',true);return;
    }
    if(!$('earth-paid-confirm').checked){
      setMessage('Confirm that you understand this API may incur charges.',true);return;
    }
  }
  busy=true;const current=++launching;
  modalButton.disabled=true;
  const oldLabel=modalButton.textContent;
  modalButton.textContent='PREPARING THE GLOBE…';
  setMessage('Loading the Cesium 3D engine. The procedural city remains available.');
  try{
   const C=await loadCesium();
   if(current!==launching)return;
   if(viewer){removeViewer();}
   world.hidden=false;
   viewer=makeViewer(C,mode);
   mapCamera(C,viewer,city,mode);
   if(mode==='photoreal'){
      const url='https://tile.googleapis.com/v1/3dtiles/root.json?key='+encodeURIComponent(key);
      // Google API requests happen only after explicit opt-in.
      const tileset=await C.Cesium3DTileset.fromUrl(url,{
       showCreditsOnScreen:true,maximumScreenSpaceError:18,
       dynamicScreenSpaceError:true
      });
      if(current!==launching)return;
      viewer.scene.primitives.add(tileset);
      viewer.scene.globe.show=false;
      viewer.scene.requestRender();
   }
   liveMode=mode;
   document.body.classList.add('earth-mode');
   hud.hidden=false;
   $('earth-attribution').hidden=mode!=='atlas';
   $('earth-status').textContent=mode==='atlas'
    ?'WORLD ATLAS · OSM MAP ON 3D GLOBE'
    :'PHOTOREAL 3D · GOOGLE MAP TILES';
   $('earth-open').textContent='◎  EARTH MODE';
   modal.hidden=true;resetKey();setMessage('');
   onActivate(mode);
   $('studio').hidden=false;
   const startCollapsed=window.matchMedia('(max-width:800px)').matches;
   $('studio').classList.toggle('collapsed',startCollapsed);
   $('studio-toggle').setAttribute('aria-expanded',String(!startCollapsed));
   weather=makeWeatherStudio({C,viewer});
   weatherGrid=makeSpatialWeatherGrid({C,viewer});
   buildings=makeBuildingOverlay({C,viewer});
   editor=makeEditorStudio({C,viewer,mode,buildings});
  }catch(err){
   // Do not print a URL or error that could contain the user's API key.
   console.warn('AEROVIEW Earth viewer could not start:',err?.name||'loading error');
   removeViewer();
   onDeactivate();
   setMessage(mode==='photoreal'
    ?'Photoreal tiles could not load. Verify Google Map Tiles API, billing, key restrictions and regional coverage.'
    :'Unable to open the free atlas. Verify network/WebGL/CDN access and try again.',true);
  }finally{
   busy=false;modalButton.disabled=false;modalButton.textContent=oldLabel;
  }
 }
 $('studio-toggle').addEventListener('click',()=>{
  const collapsed=$('studio').classList.toggle('collapsed');
  $('studio-toggle').setAttribute('aria-expanded',String(!collapsed));
 });
 $('earth-open').addEventListener('click',open);
 $('earth-launch').addEventListener('click',launch);
 $('earth-dialog-close').addEventListener('click',close);
 $('earth-cancel').addEventListener('click',close);
 modal.querySelector('.earth-backdrop').addEventListener('click',close);
 modal.querySelectorAll('input[name="earth-layer"]').forEach(el=>el.addEventListener('change',updateForm));
 $('earth-exit').addEventListener('click',()=>{deactivate();$('earth-open').textContent='◎  REAL EARTH';});
 hud.querySelectorAll('[data-city]').forEach(el=>el.addEventListener('click',()=>{
  if(!viewer||!window.Cesium)return;
  const city=el.dataset.city;
  mapCamera(window.Cesium,viewer,city,liveMode);
  weather?.setCity();
 }));
 document.addEventListener('keydown',ev=>{
  if(ev.key==='Escape'){
   if(!modal.hidden){close();return;}
   if(viewer){deactivate();$('earth-open').textContent='◎  REAL EARTH';}
  }
 });
 window.__AEROVIEW_EARTH_DIAGNOSTICS__=()=>({
  active:!!viewer,mode:liveMode,
  globe:viewer?.scene?.globe?.show,
  imageryLayers:viewer?.imageryLayers?.length,
  tileCount:viewer?.scene?.globe?._surface?._tilesToRender?.length,
  cameraHeight:viewer?.camera?.positionCartographic?.height,
  cameraLatitude:viewer?.camera?.positionCartographic?.latitude,
  cameraLongitude:viewer?.camera?.positionCartographic?.longitude,
  isViewerDestroyed:viewer?.isDestroyed?.(),
  weather:weather?.diagnostics(),weatherGrid:weatherGrid?.diagnostics(),buildings:buildings?.diagnostics(),studio:editor?.diagnostics()
 });
 return {get active(){return Boolean(viewer)},get mode(){return liveMode},close:deactivate};
}
