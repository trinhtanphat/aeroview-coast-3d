// Single shared forecast clock for point weather and the spatial 9-station grid.
// Playback never requests data. All data-reading layers subscribe to #studio-hour.
const $=id=>document.getElementById(id);
export function makeForecastPlayback({weather}){
 const uiEvents=new AbortController();
 let timer=null,playing=false,disposed=false,elapsedSteps=0;
 const slider=$('studio-hour'),btn=$('timeline-play'),speed=$('timeline-speed');
 const msg=$('timeline-status'),loop=$('timeline-loop');
 function updateStatus(s){if(!disposed)msg.textContent=s;}
 function stop(reason='Paused. Weather data remains cached.'){
  if(timer!==null)clearInterval(timer);
  timer=null;playing=false;
  btn.textContent='▶ PLAY 24H';btn.setAttribute('aria-pressed','false');
  updateStatus(reason);
 }
 function setHour(n){
  const max=Number(slider.max)||23;
  slider.value=String(Math.max(0,Math.min(max,n)));
  // A real input event notifies both separate weather visualizations.
  slider.dispatchEvent(new Event('input',{bubbles:true}));
 }
 function advance(){
  if(!playing||disposed)return;
  if(document.hidden){stop('Paused automatically because the browser tab is hidden.');return;}
  if(!weather?.diagnostics()?.loaded){stop('Point forecast is not loaded yet; no synthetic data displayed.');return;}
  const hour=Number(slider.value),max=Number(slider.max)||23;
  if(hour>=max){
   if(!loop.checked){stop('Reached the final forecast hour.');return;}
   setHour(0);
  }else setHour(hour+1);
  elapsedSteps++;
  updateStatus('Hourly forecast '+(Number(slider.value)+1)+' / '+(max+1)+' · buffered playback · no extra API requests.');
 }
 function play(){
  if(disposed)return;
  if(playing){stop();return;}
  if(!weather?.diagnostics()?.loaded){updateStatus('Load a real point forecast before starting timeline playback.');return;}
  playing=true;btn.textContent='Ⅱ PAUSE';btn.setAttribute('aria-pressed','true');
  timer=setInterval(advance,Number(speed.value));
  updateStatus('Playback started. Each tick advances one forecast hour—this is not continuous time interpolation.');
 }
 btn.addEventListener('click',play,{signal:uiEvents.signal});
 $('timeline-reset').addEventListener('click',()=>{
  setHour(0);stop('Forecast timeline reset to first available hour.');
 },{signal:uiEvents.signal});
 speed.addEventListener('change',()=>{
  if(!playing)return;
  clearInterval(timer);timer=setInterval(advance,Number(speed.value));
 },{signal:uiEvents.signal});
 function onVisibility(){if(document.hidden&&playing)stop('Paused when tab became hidden.');}
 function onManualInput(e){
  if(!playing||e.isTrusted===false)return;
  stop('Paused after manual timeline change.');
 }
 document.addEventListener('visibilitychange',onVisibility,{signal:uiEvents.signal});
 slider.addEventListener('change',onManualInput,{signal:uiEvents.signal});
 return {
  diagnostics:()=>({playing,hour:Number(slider.value),speedMs:Number(speed.value),steps:elapsedSteps,loop:loop.checked}),
  destroy(){uiEvents.abort();
   stop('Timeline stopped.');disposed=true;
   document.removeEventListener('visibilitychange',onVisibility);
   slider.removeEventListener('change',onManualInput);
  }
 };
}
