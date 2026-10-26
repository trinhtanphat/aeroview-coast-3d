import {applyCityMood,cityView} from './free-city-visuals.js';
import {makeCityVideoRecorder} from './free-city-video.js';

// Controls exist only during the free OSM MapLibre viewer session.
export function createFreeCityControls({map,world,getCity,onStop,onStartFlight}){
 const panel=document.createElement('aside');
 panel.className='free-city-panel';
 panel.setAttribute('aria-label','Geographic 3D city visual controls');
 panel.innerHTML=[
  '<div class="free-city-head"><span>◈ &nbsp; AEROVIEW / REAL CITY</span><small>GEOGRAPHIC VECTOR MODEL</small></div>',
  '<p class="free-city-note">Real OSM building locations · approximate heights · not aerial photogrammetry</p>',
  '<div class="free-city-view" role="group" aria-label="Camera view">',
  '<button type="button" data-free-view="coast">COASTLINE</button>',
  '<button type="button" data-free-view="skyline" aria-pressed="true">SKYLINE</button>',
  '<button type="button" data-free-view="overhead">TOP DOWN</button></div>',
  '<div class="free-city-actions"><label for="free-city-mood">LIGHT</label>',
  '<select id="free-city-mood" aria-label="Visual atmosphere">',
  '<option value="daylight">DAYLIGHT</option><option value="golden">GOLDEN HOUR</option>',
  '<option value="bluehour">BLUE HOUR</option></select>',
  '<button type="button" id="free-city-png" title="PNG includes source attribution">↓ PNG</button></div>',
  '<div class="free-city-record-row"><button type="button" id="free-city-record" data-duration="12">● RECORD FLIGHT · 12 S WEBM</button>',
  '<button type="button" id="free-city-record-stop">■ STOP & SAVE</button></div>',
  '<p class="free-city-status" role="status">Loading georeferenced building tiles…</p>',
  '<button type="button" class="free-city-focus" aria-pressed="false">◫ HIDE UI</button>'
 ].join('');
 world.appendChild(panel);
 const ac=new AbortController();
 const signal={signal:ac.signal};
 const status=panel.querySelector('.free-city-status');
 const focus=panel.querySelector('.free-city-focus');
 let active=true,mood='daylight',focused=false,count=0,tilesReady=false,captureCount=0;
 const recButton=panel.querySelector('#free-city-record');
 const recStop=panel.querySelector('#free-city-record-stop');
 const recording=makeCityVideoRecorder({map,onStartFlight,onStopFlight:onStop,onStatus:s=>{if(active)status.textContent=s;}});
 function update(){
  if(!active)return;
  tilesReady=map.areTilesLoaded()&&map.isSourceLoaded('openmaptiles');
  try{count=map.queryRenderedFeatures({layers:['building-3d']}).length;}catch{count=0;}
  const videoState=recording.diagnostics();
  if(!videoState.recording){
   recButton.textContent='● RECORD FLIGHT · 12 S WEBM';recButton.disabled=false;
   if(videoState.lastError){status.textContent=videoState.lastError;return;}
   status.textContent=tilesReady
    ? count+' geolocated building features in view · OpenStreetMap / OpenFreeMap'
    : 'Loading vector tiles… '+(count>0?count+' buildings drawn so far':'wait for buildings');
  }
 }
 const poll=setInterval(update,2200);
 map.on('idle',update);
 function setMood(value){
  mood=applyCityMood(map,value);
  panel.querySelector('#free-city-mood').value=mood;
 }
 for(const btn of panel.querySelectorAll('[data-free-view]')){
  btn.addEventListener('click',()=>{
   onStop();
   const v=btn.dataset.freeView;
   map.flyTo({...cityView(getCity(),v),duration:2000,essential:true});
   for(const other of panel.querySelectorAll('[data-free-view]'))
    other.setAttribute('aria-pressed',String(other===btn));
  },signal);
 }
 panel.querySelector('#free-city-mood').addEventListener('change',e=>setMood(e.target.value),signal);
 recButton.addEventListener('click',()=>{
  if(recording.start(Number(recButton.dataset.duration)||12)){
   recButton.textContent='● RECORDING…';recButton.disabled=true;
  }
 },signal);
 recStop.addEventListener('click',()=>recording.stop(),signal);
 focus.addEventListener('click',()=>{
  focused=!focused;
  document.body.classList.toggle('free-city-focus',focused);
  focus.setAttribute('aria-pressed',String(focused));
  focus.textContent=focused?'◫ SHOW UI':'◫ HIDE UI';
 },signal);
 // Screenshot contains attribution, not an uncredited extracted tile.
 panel.querySelector('#free-city-png').addEventListener('click',()=>{
  const canvas=map.getCanvas();
  if(!canvas.width||!canvas.height||!tilesReady){
   status.textContent='Wait for vector tiles to finish before exporting a PNG.';
   return;
  }
  const width=canvas.width,height=canvas.height,footer=Math.max(44,Math.round(height*.047));
  const output=document.createElement('canvas');
  output.width=width;output.height=height+footer;
  const ctx=output.getContext('2d');
  ctx.drawImage(canvas,0,0);
  ctx.fillStyle='#142b3b';ctx.fillRect(0,height,width,footer);
  ctx.fillStyle='#fff3df';ctx.font='bold '+Math.max(14,Math.round(footer*.35))+'px sans-serif';
  ctx.fillText('AEROVIEW · REAL OSM BUILDINGS',Math.round(footer*.35),height+footer*.62);
  ctx.textAlign='right';ctx.font=Math.max(11,Math.round(footer*.26))+'px sans-serif';
  ctx.fillText('© OpenStreetMap contributors · OpenFreeMap · MapLibre',width-Math.round(footer*.35),height+footer*.60);
  output.toBlob(blob=>{
   if(!blob||!active)return;
   const uri=URL.createObjectURL(blob);
   const a=document.createElement('a');
   a.href=uri;a.download='aeroview-real-city-attributed.png';
   document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(uri),10000);
   captureCount++;
  },'image/png');
 },signal);
 return {
  update,setMood,
  diagnostics:()=>({mood,focused,tilesReady,visibleBuildings:count,captures:captureCount,video:recording.diagnostics()}),
  destroy(){
   if(!active)return;
   active=false;recording.destroy();clearInterval(poll);
   map.off('idle',update);
   ac.abort();
   document.body.classList.remove('free-city-focus');
   panel.remove();
  }
 };
}
