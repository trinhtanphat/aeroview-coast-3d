// Explicit, attributed WebM recording of an operator-controlled OSM vector map.
// Captures ONLY the current MapLibre canvas + permanent visible source credits.
// No Google/Cesium tiles, unlicensed imagery, location harvesting or server upload.
export function makeCityVideoRecorder({map,onStartFlight,onStopFlight,onStatus}){
 let recorder=null,stream=null,raf=0,timeout=null,frameCanvas=null,active=false,disposed=false,recorded=0,ended=0,lastError='';
 const credit='OpenFreeMap © OpenMapTiles · Data from © OpenStreetMap contributors';
 const mime=()=>['video/webm;codecs=vp8','video/webm;codecs=vp9','video/webm'].find(x=>window.MediaRecorder?.isTypeSupported?.(x))||'';
 const stopTracks=()=>{try{stream?.getTracks().forEach(t=>t.stop());}catch{}stream=null;};
 const draw=()=>{
  if(!active||!frameCanvas||disposed)return;
  try{
   const ctx=frameCanvas.getContext('2d');
   const source=map.getCanvas(),h=source.height,w=source.width,footer=frameCanvas.height-h;
   ctx.drawImage(source,0,0,w,h);
   ctx.fillStyle='#10283a';ctx.fillRect(0,h,w,footer);
   ctx.fillStyle='#f7e5bb';
   if(w<900){
    ctx.textAlign='left';ctx.font='bold 12px sans-serif';
    ctx.fillText('AEROVIEW · REAL CITY',12,h+21);
    ctx.font='11px sans-serif';
    ctx.fillText('OpenFreeMap © OpenMapTiles',12,h+43);
    ctx.fillText('Data from © OpenStreetMap contributors',12,h+60);
   }else{
    ctx.font='bold '+Math.max(15,Math.round(footer*.32))+'px sans-serif';
    ctx.textAlign='left';
    ctx.fillText('AEROVIEW · GEOGRAPHIC CITY',Math.round(footer*.3),h+footer*.61);
    ctx.textAlign='right';
    ctx.font=Math.max(11,Math.round(footer*.26))+'px sans-serif';
    ctx.fillText(credit,w-Math.round(footer*.28),h+footer*.60);
   }
  }catch(e){onStatus('Video frame could not be drawn: '+(e?.name||'Canvas error'));}
  raf=requestAnimationFrame(draw);
 };
 function cleanup(){
  if(timeout!==null)clearTimeout(timeout);timeout=null;
  if(raf)cancelAnimationFrame(raf);raf=0;
  stopTracks();frameCanvas=null;recorder=null;
 }
 function stop(){
  if(!active)return;
  active=false;
  if(timeout!==null)clearTimeout(timeout);timeout=null;
  onStopFlight();
  try{
   if(recorder&&recorder.state!=='inactive'){recorder.stop();return;}
  }catch{}
  cleanup();
 }
 function start(seconds=12){
  if(disposed||active)return false;
  lastError='';
  if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream){
   onStatus('This browser does not support WebM canvas recording.');return false;
  }
  let buildings=0;
  try{buildings=map.queryRenderedFeatures({layers:['building-3d']}).length;}catch{}
  if(buildings<1){
   lastError='No geolocated building geometry visible yet';
   onStatus('Wait for real building tiles before recording video.');return false;
  }
  const type=mime();
  if(!type){lastError='No supported WebM encoder';onStatus(lastError);return false;}
  const src=map.getCanvas();
  if(!src.width||!src.height)return false;
  const w=src.width,h=src.height,footer=Math.max(w<900?78:54,Math.round(h*.06));
  frameCanvas=document.createElement('canvas');
  frameCanvas.width=w;frameCanvas.height=h+footer;
  let chunks=[];
  try{
   active=true;
   draw();
   stream=frameCanvas.captureStream(12); // video frames per second
   recorder=new MediaRecorder(stream,{mimeType:type,videoBitsPerSecond:3000000});
   recorder.addEventListener('dataavailable',e=>{if(e.data?.size)chunks.push(e.data);});
   recorder.addEventListener('error',()=>{active=false;cleanup();onStatus('MediaRecorder failed.');});
   recorder.addEventListener('stop',()=>{
    ended++;
    const bytes=new Blob(chunks,{type:type});
    chunks=[];
    cleanup();
    if(disposed)return;
    if(bytes.size<5000){onStatus('Video recording was too small; please retry with GPU rendering.');return;}
    const url=URL.createObjectURL(bytes);
    const a=document.createElement('a');
    a.href=url;a.download='aeroview-geographic-flight-attributed.webm';
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),20000);
    recorded++;
    onStatus('Recorded attributed WebM flight ('+Math.round(bytes.size/1024)+' KB).');
   },{once:true});
   recorder.start(500);
   active=true;
   const duration=Math.max(3,Math.min(20,Number(seconds)||12));
   timeout=setTimeout(stop,duration*1000);
   onStartFlight();
   onStatus('Recording '+duration+' s cinematic flight · attribution is burned into every frame.');
   return true;
  }catch(e){lastError=String(e?.message||e?.name||'Recording error');active=false;cleanup();onStatus('Video unavailable: '+lastError);return false;}
 }
 return {
  start,stop,
  diagnostics:()=>({recording:active,recorded,ended,supported:!!mime(),lastError}),
  destroy(){disposed=true;stop();cleanup();}
 };
}
