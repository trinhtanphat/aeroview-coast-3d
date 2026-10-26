// Point-sampled forecast data; never claim that this renders a global 9km gridded field.
// ECMWF IFS HRES (~9km), served by Open-Meteo, updated approximately 6-hourly.
const $=id=>document.getElementById(id);
const VARS=['temperature_2m','precipitation','rain','snowfall','wind_speed_10m','wind_direction_10m','wind_gusts_10m','cloud_cover_low','cloud_cover_mid','cloud_cover_high','shortwave_radiation'];
const CACHE_TTL=10*60*1000;
const cache=new Map();
const safe=(n,places=0)=>(n===null||n===undefined||!Number.isFinite(Number(n)))?'—':Number(n).toFixed(places);
const radians=d=>d*Math.PI/180;
function requestUrl(lat,lon){
 const p=new URLSearchParams({latitude:String(lat),longitude:String(lon),models:'ecmwf_ifs',
  hourly:VARS.join(','),forecast_hours:'24',timezone:'UTC'});
 return 'https://api.open-meteo.com/v1/ecmwf?'+p.toString();
}
function marineUrl(lat,lon){
 const p=new URLSearchParams({latitude:String(lat),longitude:String(lon),
  hourly:'wave_height,wave_direction,wave_period',forecast_hours:'24',timezone:'UTC'});
 return 'https://marine-api.open-meteo.com/v1/marine?'+p.toString();
}
async function getJSON(url,signal){
 const res=await fetch(url,{signal,mode:'cors',cache:'no-store'});
 if(!res.ok)throw new Error('Weather HTTP '+res.status);
 const out=await res.json();
 if(out.error)throw new Error(out.reason||'Weather API error');
 return out;
}
export function makeWeatherStudio({viewer,C}){
 const uiEvents=new AbortController();
 let active=true,location=null, data=null,marine=null,idx=0,controller=null,refreshAt=0,lastRequestAt=0,updateTimer=null,lastCoords=null;
 const overlay=$('weather-fx');
 const ctx=overlay.getContext('2d',{alpha:true});
 let frame=0,raf=0,fxLast=0;
 const uiStatus=(s,error=false)=>{if(!active)return;const e=$('studio-status');e.textContent=s;e.classList.toggle('is-error',error);};
 const reset=()=>{for(const id of ['wx-temp','wx-rain','wx-wind','wx-wave','wx-sun','wx-cloud'])$(id).textContent='—';$('studio-hour-label').textContent='—';};
 function current(){
  if(!data?.hourly?.time?.length)return null;
  const h=data.hourly;
  const i=Math.min(idx,h.time.length-1);
  const o={time:h.time[i],temp:h.temperature_2m?.[i],precip:h.precipitation?.[i],rain:h.rain?.[i],snow:h.snowfall?.[i],
   wind:h.wind_speed_10m?.[i],windDir:h.wind_direction_10m?.[i],gust:h.wind_gusts_10m?.[i],
   low:h.cloud_cover_low?.[i],mid:h.cloud_cover_mid?.[i],high:h.cloud_cover_high?.[i],sun:h.shortwave_radiation?.[i]};
  const mi=marine?.hourly?.time?.indexOf(o.time)??-1;
  o.wave=mi>=0?marine.hourly.wave_height?.[mi]:null;
  o.waveDirection=mi>=0?marine.hourly.wave_direction?.[mi]:null;
  return o;
 }
 function renderData(){
  const v=current();if(!v){reset();return;}
  $('wx-temp').textContent=safe(v.temp,1)+' °C';
  $('wx-rain').textContent=safe(v.precip,1)+' mm/h';
  $('wx-wind').textContent=safe(v.wind,0)+' km/h · '+safe(v.windDir,0)+'°';
  $('wx-wave').textContent=v.wave===null || v.wave===undefined?'N/A (INLAND / NO DATA)':safe(v.wave,1)+' m';
  $('wx-sun').textContent=safe(v.sun,0)+' W/m²';
  $('wx-cloud').textContent=[v.low,v.mid,v.high].map(n=>safe(n,0)).join(' / ')+' %';
  $('studio-hour-label').textContent=v.time+' UTC';
  $('studio-status').classList.remove('is-error');
  const model='ECMWF IFS ~9km';
  uiStatus(model+' · '+location.lat.toFixed(3)+'°, '+location.lon.toFixed(3)+'° · FORECAST (NOT OBSERVATION)');
 }
 async function loadAt(lat,lon,force=false){
  if(!active || !Number.isFinite(lat)||!Number.isFinite(lon))return;
  const roundedLat=+lat.toFixed(3),roundedLon=+lon.toFixed(3);
  if(!force&&lastCoords&&Math.abs(roundedLat-lastCoords.lat)<.09&&Math.abs(roundedLon-lastCoords.lon)<.09
      && Date.now()-refreshAt<CACHE_TTL)return;
  if(!force&&Date.now()-lastRequestAt<45000)return;
  location={lat:roundedLat,lon:roundedLon};
  lastCoords=location;
  refreshAt=Date.now();
  lastRequestAt=Date.now();
  const key=roundedLat.toFixed(1)+','+roundedLon.toFixed(1);
  const cached=cache.get(key);
  if(cached&&!force&&Date.now()-cached.time<CACHE_TTL){
   data=cached.weather;marine=cached.marine;idx=0;renderData();return;
  }
  controller?.abort();controller=new AbortController();
  const signal=controller.signal;
  uiStatus('FETCHING ECMWF IFS FORECAST AT '+roundedLat+'°, '+roundedLon+'°…');
  try{
   const weather=await getJSON(requestUrl(roundedLat,roundedLon),signal);
   // Marine API samples near coast; inland forecasts frequently return null wave fields.
   let sea=null;
   try{sea=await getJSON(marineUrl(roundedLat,roundedLon),signal);}
   catch(e){if(e.name==='AbortError')throw e;sea=null;}
   if(!active||signal.aborted)return;
   if(!weather?.hourly?.time?.length)throw new Error('Hourly weather data is unavailable');
   data=weather;marine=sea;idx=0;
   cache.set(key,{weather,marine:sea,time:Date.now()});
   $('studio-hour').max=String(weather.hourly.time.length-1);
   $('studio-hour').value='0';
   renderData();
  }catch(e){
   if(e?.name==='AbortError'||!active)return;
   data=null;marine=null;reset();
   uiStatus('Live weather unavailable: '+String(e?.message||'network error')+'. Display is not populated with invented measurements.',true);
  }
 }
 async function refreshFromCamera(force=false){
  if(!active || !viewer||viewer.isDestroyed())return;
  const c=viewer.camera.positionCartographic;
  if(!c)return;
  await loadAt(C.Math.toDegrees(c.latitude),C.Math.toDegrees(c.longitude),force);
 }
 function scheduleCameraWeather(){
  if(!active)return;
  clearTimeout(updateTimer);
  updateTimer=setTimeout(()=>refreshFromCamera(),1200);
 }
 const onMove=()=>scheduleCameraWeather();
 viewer.camera.moveEnd.addEventListener(onMove);
 $('studio-refresh').addEventListener('click',()=>refreshFromCamera(true),{signal:uiEvents.signal});
 $('studio-hour').addEventListener('input',e=>{idx=Number(e.target.value);renderData();},{signal:uiEvents.signal});
 function resize(){
  const rect=overlay.getBoundingClientRect();
  overlay.width=Math.max(1,Math.floor(rect.width));overlay.height=Math.max(1,Math.floor(rect.height));
 }
 function effects(t){
  if(!active)return;
  raf=requestAnimationFrame(effects);
  if(t-fxLast<65)return;fxLast=t;
  const w=overlay.width,h=overlay.height;
  ctx.clearRect(0,0,w,h);
  const v=current();if(!v)return;
  const cloudLevels=[v.low,v.mid,v.high];
  if($('wx-clouds').checked){
   // Three visually separated layers of cloud haze, each opacity driven by real
   // sampled low/mid/high cover percentages, but NOT geographic cloud volumes.
   cloudLevels.forEach((amount,i)=>{
    const a=Math.max(0,Math.min(1,(Number(amount)||0)/100));
    if(a<.03)return;
    const y=[h*.67,h*.38,h*.13][i];
    const speed=[.004,.009,.014][i]*(Number(v.wind)||8);
    const phase=t*speed;
    ctx.save();ctx.globalCompositeOperation='screen';
    for(let j=0;j<5;j++){
     let x=((j*313+phase)%(w+450))-220;
     let yy=y+Math.sin(j*8.41+t*.00012)*35;
     const rad=120+i*42;
     const gr=ctx.createRadialGradient(x,yy,0,x,yy,rad);
     gr.addColorStop(0,'rgba(225,238,245,'+(a*[.09,.07,.05][i])+')');
     gr.addColorStop(1,'rgba(225,238,245,0)');
     ctx.fillStyle=gr;ctx.fillRect(x-rad,yy-rad,rad*2,rad*2);
    }
    ctx.restore();
   });
  }
  const wind=Number(v.wind)||0, windDir=radians(Number(v.windDir)||0);
  const drift=Math.sin(windDir)*wind*.15;
  if($('wx-wind-fx').checked&&wind>3){
    const count=Math.min(65,Math.floor(wind*1.15));
    ctx.lineWidth=1.2;ctx.strokeStyle='rgba(183,232,255,0.35)';
    for(let i=0;i<count;i++){
     const x=((i*137.2+t*.045*(1+wind/20))%(w+150))-75;
     const y=(i*89.21+(t*.005)%h)%h;
     ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+15+drift,y+4+Math.cos(windDir)*8);ctx.stroke();
    }
  }
  if($('wx-rain-fx').checked&&(Number(v.precip)||0)>.03){
    const rain=Math.min(240,Math.ceil(Number(v.precip)*38)+18);
    ctx.lineWidth=1.3;ctx.strokeStyle='rgba(167,213,250,.48)';
    for(let i=0;i<rain;i++){
      const x=(i*97.4+Math.sin(i*5.29)*82+t*.04*drift+w*20)%(w+65);
      const y=(i*67.2+t*.33*(1+Number(v.precip)/4))%h;
      ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+4+drift*.5,y+12+Math.min(25,Number(v.precip)*3));ctx.stroke();
    }
  }
  if($('wx-waves-fx').checked&&Number.isFinite(Number(v.wave))&&v.wave!==null){
    const strength=Math.min(7,Number(v.wave));
    ctx.strokeStyle='rgba(102,217,238,0.38)';ctx.lineWidth=1.3;
    for(let i=0;i<4;i++){
      ctx.beginPath();
      const yy=h*.92+i*13;
      for(let x=0;x<=w;x+=12){
       const y=yy+Math.sin(x*.023+i*1.7+t*.002)*Math.max(1,strength*1.7);
       if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
  }
 }
 function onResize(){if(active)resize();}
 window.addEventListener('resize',onResize,{signal:uiEvents.signal});
 overlay.hidden=false;resize();raf=requestAnimationFrame(effects);
 // Refresh only when the user is actually viewing a real-world map.
 refreshFromCamera();
 const refreshTimer=setInterval(()=>{if(active)refreshFromCamera();},5*60*1000);
 return {
  setCity(){refreshFromCamera(true);},
  refresh:()=>refreshFromCamera(true),
  diagnostics:()=>({loaded:!!data,model:'ECMWF IFS HRES ~9km',time:current()?.time,
   latitude:location?.lat,longitude:location?.lon,wave:current()?.wave}),
  destroy(){uiEvents.abort();
   active=false;clearInterval(refreshTimer);clearTimeout(updateTimer);controller?.abort();
   cancelAnimationFrame(raf);window.removeEventListener('resize',onResize);
   viewer.camera.moveEnd.removeEventListener(onMove);
   ctx.clearRect(0,0,overlay.width,overlay.height);
   overlay.hidden=true;reset();
  }
 };
}
