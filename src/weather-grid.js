import {createWindTracers} from './wind-tracers.js';
// Georeferenced local-neighborhood ECMWF point samples (~9 km spacing).
// Each square is a visualization of ONE POINT, not a scientifically complete
// model raster; grid is limited to nine locations per user-initiated request.
const $=id=>document.getElementById(id);
const LAYERS={
 temp:{name:'TEMPERATURE',key:'temperature_2m',min:0,max:40,unit:'°C'},
 rain:{name:'PRECIPITATION',key:'precipitation',min:0,max:15,unit:'mm/h'},
 wind:{name:'WIND SPEED',key:'wind_speed_10m',min:0,max:90,unit:'km/h'},
 cloud:{name:'CLOUD COVER',key:'cloud_cover',min:0,max:100,unit:'%'}
};
export function makeSpatialWeatherGrid({C,viewer}){
 const uiEvents=new AbortController();
 let active=true,locations=null,forecast=null,rectangles=[],centers=[],controller=null,loadedAt=0,lastRequestAt=0;
 let lastCenter=null,layer='temp',arrows=0;
 const tracers=createWindTracers({C,viewer});
 const status=s=>{$('grid-status').textContent=s};
 const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
 const toDeg=n=>C.Math.toDegrees(n);
 const colorFor=(v,range)=>{
   const t=clamp((v-range.min)/(range.max-range.min),0,1);
   if(layer==='rain')return C.Color.fromHsl(.60-t*.60,.86,.50,.27);
   if(layer==='temp')return C.Color.fromHsl(.68-t*.68,.85,.52,.30);
   if(layer==='wind')return C.Color.fromHsl(.50-t*.45,.83,.49,.31);
   return C.Color.fromHsl(.62-t*.58,.6,.52,.30);
 };
 function centerCoord(){
   const carto=viewer.camera.positionCartographic;
   return {lat:toDeg(carto.latitude),lon:toDeg(carto.longitude)};
 }
 function clearScene(){
   arrows=0;
   rectangles.forEach(entity=>viewer.entities.remove(entity));
   rectangles=[];
   viewer.scene.requestRender();
 }
 function clear(){
   tracers.stop();controller?.abort();
   clearScene();forecast=null;locations=null;lastCenter=null;
   $('grid-legend').hidden=true;
   status('Grid hidden. No further sampling is automatic.');
 }
 function valuesAt(hour){
   if(!forecast)return [];
   const key=LAYERS[layer].key;
   return forecast.map((f)=>f?.hourly?.[key]?.[hour]);
 }
 function render(){
   clearScene();
   if(!forecast?.length||!locations?.length){tracers.stop();return;}
   const idx=Math.max(0,Number($('studio-hour').value)||0);
   const cfg=LAYERS[layer];
   const vals=valuesAt(idx);
   const missing=vals.filter(x=>x===null||x===undefined||!Number.isFinite(Number(x))).length;
   for(let i=0;i<locations.length;i++){
     const point=locations[i],value=vals[i];
     if(value===null||value===undefined||!Number.isFinite(Number(value)))continue;
     const cell=viewer.entities.add({
      name:'ECMWF ~9km point sampled: '+cfg.name,
      rectangle:{
       coordinates:C.Rectangle.fromDegrees(point.w,point.s,point.e,point.n),
       height:100,
       material:colorFor(Number(value),cfg),
       outline:true,outlineColor:C.Color.WHITE.withAlpha(.33)
      }
     });
     rectangles.push(cell);
     const text=Number(value).toFixed(value>=10||value===0?0:1)+' '+cfg.unit;
     const label=viewer.entities.add({
      position:C.Cartesian3.fromDegrees(point.lon,point.lat,140),
      label:{
       text,fillColor:C.Color.WHITE,font:'bold 15px sans-serif',
       showBackground:true,backgroundColor:C.Color.fromCssColorString('#10273c').withAlpha(.77),
       outlineColor:C.Color.BLACK,outlineWidth:2,style:C.LabelStyle.FILL_AND_OUTLINE,
       heightReference:C.HeightReference.NONE,disableDepthTestDistance:1000000
      }
     });
     rectangles.push(label);
     // ECMWF wind_direction_10m is meteorological FROM direction.
     // Arrow points TO (bearing + 180°), showing flow, not source.
     if(layer==='wind'&&$('grid-vectors').checked){
       const direction=forecast[i]?.hourly?.wind_direction_10m?.[idx];
       if(direction!==null&&direction!==undefined&&Number.isFinite(Number(direction))){
         const bearing=(Number(direction)+180)*Math.PI/180;
         const lengthKm=Math.max(.7,Math.min(2.6,.65+(Number(value)||0)*.026));
         const east=Math.sin(bearing)*lengthKm, north=Math.cos(bearing)*lengthKm;
         const dLat=north/111.32,dLon=east/(111.32*Math.max(.2,Math.cos(point.lat*Math.PI/180)));
         const arrow=viewer.entities.add({name:'Forecast wind TO direction · '+Math.round(Number(direction))+'° FROM',polyline:{
           positions:C.Cartesian3.fromDegreesArrayHeights([point.lon-dLon*.5,point.lat-dLat*.5,210,point.lon+dLon*.5,point.lat+dLat*.5,210]),
           width:9,material:new C.PolylineArrowMaterialProperty(C.Color.WHITE.withAlpha(.92))
         }});
         rectangles.push(arrow);arrows++;
       }
     }
   }
   const wantTracers=layer==='wind'&&$('grid-tracers').checked;
   if(wantTracers)tracers.setData(locations,forecast,idx);else tracers.stop();
   $('grid-legend').hidden=false;
   $('grid-legend-label').textContent=cfg.name+' — 9 SAMPLES × '+cfg.unit;
   $('grid-range').textContent=cfg.min+' — '+cfg.max+' '+cfg.unit+' (colors clipped)';
   const gradients={temp:'blue, #65bce0, #f7e16a, #e44c40',rain:'blue, #58aeff, #71db8b, #ffa33d, #e43e36',wind:'#1ce2b7, #45bdef, #faee67, #ef5b38',cloud:'#305a93, #6da4cb, #cfbfd7, #eee5e2'};
   $('grid-color-scale').style.background='linear-gradient(90deg,'+gradients[layer]+')';
   status('ECMWF IFS ~9 km model, 9 point samples · '+forecast[0].hourly.time[idx]+' UTC'+(missing?' · '+missing+' missing':'')+'. Squares are illustrative, NOT raw gridded forecast cells.'+(arrows?' White arrows show wind FLOW, opposite to wind direction FROM.':''));
   viewer.scene.requestRender();
 }
 function makeLocations(center){
   const latStep=9/111.32,lonStep=9/(111.32*Math.max(.2,Math.cos(center.lat*Math.PI/180)));
   const points=[];
   for(let j=-1;j<=1;j++)for(let i=-1;i<=1;i++){
     const lat=clamp(center.lat+j*latStep,-85,85);
     const lon=((center.lon+i*lonStep+540)%360)-180;
     points.push({lat,lon,w:lon-lonStep*.49,e:lon+lonStep*.49,s:lat-latStep*.49,n:lat+latStep*.49});
   }
   return points;
 }
 async function sample(){
   if(!active)return;
   const center=centerCoord(),now=Date.now();
   if(now-lastRequestAt<45000){
     status('Rate protection: wait 45 seconds between grid requests. Switch layers freely without another request.');return;
   }
   const pts=makeLocations(center);
   const qs=new URLSearchParams({
    latitude:pts.map(p=>p.lat.toFixed(5)).join(','),
    longitude:pts.map(p=>p.lon.toFixed(5)).join(','),
    hourly:'temperature_2m,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover',
    models:'ecmwf_ifs',forecast_hours:'24',timezone:'UTC'
   });
   controller?.abort();controller=new AbortController();
   const signal=controller.signal;
   lastRequestAt=now;$('grid-sample').disabled=true;
   status('Requesting 9 geographically spaced point forecasts in ONE Open-Meteo API call…');
   try{
    const res=await fetch('https://api.open-meteo.com/v1/ecmwf?'+qs.toString(),{signal,cache:'no-store'});
    if(!res.ok)throw new Error('HTTP '+res.status);
    const data=await res.json();
    if(!active||signal.aborted)return;
    if(!Array.isArray(data)||data.length!==9||data.some(s=>!s.hourly?.time?.length)){
     throw new Error('Incomplete multi-point forecast');
    }
    forecast=data;locations=pts;lastCenter=center;loadedAt=Date.now();
    render();
   }catch(e){
    if(e.name==='AbortError'||!active)return;
    status('Weather grid unavailable: '+(e?.message||'unknown error')+'. No fabricated data shown.');
   }finally{$('grid-sample').disabled=false;}
 }
 function fit(){
  if(!lastCenter){status('First click SAMPLE 9 to fetch a grid.');return;}
  viewer.camera.flyTo({
   destination:C.Cartesian3.fromDegrees(lastCenter.lon,lastCenter.lat,53000),
   orientation:{heading:0,pitch:C.Math.toRadians(-90),roll:0},
   duration:1.6
  });
 }
 $('grid-sample').addEventListener('click',sample,{signal:uiEvents.signal});
 $('grid-fit').addEventListener('click',fit,{signal:uiEvents.signal});
 $('grid-vectors').addEventListener('change',render,{signal:uiEvents.signal});
 $('grid-tracers').addEventListener('change',render,{signal:uiEvents.signal});
 $('grid-clear').addEventListener('click',clear,{signal:uiEvents.signal});
 $('grid-export').addEventListener('click',()=>{
   if(!forecast?.length||!locations?.length){status('Use SAMPLE 9 before exporting station data.');return;}
   const hour=Math.min(23,Math.max(0,Number($('studio-hour').value)||0));
   const time=forecast[0]?.hourly?.time?.[hour];
   const numeric=(v)=>v===null||v===undefined||!Number.isFinite(Number(v))?null:Number(v);
   const keys=['temperature_2m','precipitation','wind_speed_10m','wind_direction_10m','cloud_cover'];
   const fc={type:'FeatureCollection',name:'AEROVIEW ECMWF point samples',features:locations.map((pt,i)=>({
     type:'Feature',geometry:{type:'Point',coordinates:[pt.lon,pt.lat]},
     properties:Object.fromEntries([['source','Open-Meteo ECMWF IFS'],['forecast_time_utc',time],['spacing_km_approx',9],['sample_type','point_forecast_not_native_grid'],...keys.map(k=>[k,numeric(forecast[i]?.hourly?.[k]?.[hour])])])
   }))};
   const blob=new Blob([JSON.stringify(fc,null,2)],{type:'application/geo+json'});
   const href=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=href;a.download='aeroview-weather-9-stations.geojson';document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(href),10000);
   status('Exported 9 point forecasts as GeoJSON for the selected hour; not a continuous model raster.');
 },{signal:uiEvents.signal});
 $('grid-layer').addEventListener('change',ev=>{layer=ev.target.value;render();},{signal:uiEvents.signal});
 $('studio-hour').addEventListener('input',render,{signal:uiEvents.signal});
 return {
  clear,render,
  diagnostics:()=>({stations:forecast?.length||0,layer,windArrows:arrows,tracers:tracers.diagnostics(),values:valuesAt(Number($('studio-hour').value)||0),lastCenter,loadedAt}),
  destroy(){uiEvents.abort();active=false;tracers.destroy();controller?.abort();clearScene();$('grid-legend').hidden=true;}
 };
}
