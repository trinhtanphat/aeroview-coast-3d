// Annotation & camera studio; overlays are editable and exportable but do NOT
// mutate Google Photorealistic 3D Tiles or any original terrain geometry.
const $=id=>document.getElementById(id);
const geom={pin:'Point',line:'LineString',polygon:'Polygon'};
export function makeEditorStudio({C,viewer,mode='atlas'}){
 let active=true,drawMode=null,points=[],entities=[],selected=null,editMode=false,handles=[],dragging=null;
 let keyframes=[],playing=false,recording=false,recorder=null,stream=null,ticker=null,recordTimeout=null;
 const handler=new C.ScreenSpaceEventHandler(viewer.scene.canvas);
 const cam=viewer.scene.screenSpaceCameraController;
 const status=s=>{if(active)$('draw-status').textContent=s;};
 const camerastatus=s=>{if(active)$('camera-status').textContent=s;};
 function degrees(cart){
  const p=C.Cartographic.fromCartesian(cart);
  return [C.Math.toDegrees(p.longitude),C.Math.toDegrees(p.latitude),Math.max(0,p.height)];
 }
 function posFrom(coords){return C.Cartesian3.fromDegrees(coords[0],coords[1],coords[2]||0);}
 function groundPosition(screenPos){
  let pos=null;
  if(viewer.scene.pickPositionSupported){
   try{const o=viewer.scene.pick(screenPos);if(C.defined(o))pos=viewer.scene.pickPosition(screenPos);}catch{}
  }
  if(!pos && viewer.scene.globe?.show){
   const ray=viewer.camera.getPickRay(screenPos);
   if(ray)pos=viewer.scene.globe.pick(ray,viewer.scene);
  }
  if(!pos)pos=viewer.camera.pickEllipsoid(screenPos,viewer.scene.globe?.ellipsoid||C.Ellipsoid.WGS84);
  return pos;
 }
 function setDrawing(mode){
  if(editMode)toggleEditing(false);
  if(drawMode===mode){finish();return;}
  drawMode=mode;points=[];
  cam.enableInputs=!Boolean(mode);
  document.querySelectorAll('[data-draw]').forEach(b=>b.classList.toggle('active',b.dataset.draw===mode));
  status(mode?'Draw '+mode.toUpperCase()+': click map to place points; choose FINISH to complete.':'DRAWING IDLE');
 }
 function addDrawn(type,coords){
  if(!coords.length)return;
  const source='AEROVIEW_EDIT';
  let model,entity;
  if(type==='pin'){
   const p=coords[0];
   model={id:'ann-'+Date.now()+'-'+Math.floor(Math.random()*1e5),type:'pin',coordinates:p};
   entity=viewer.entities.add({id:model.id,position:posFrom(p),point:{
    pixelSize:11,color:C.Color.fromCssColorString('#ffdb92'),outlineColor:C.Color.BLACK,outlineWidth:2,
    heightReference:C.HeightReference.NONE},
    label:{text:'PIN',font:'bold 14px sans-serif',fillColor:C.Color.WHITE,
     outlineColor:C.Color.BLACK,outlineWidth:3,style:C.LabelStyle.FILL_AND_OUTLINE,
     pixelOffset:new C.Cartesian2(0,-23)}});
  } else if(type==='line'){
   if(coords.length<2){status('PATH needs at least 2 map points.');return;}
   model={id:'ann-'+Date.now()+'-'+Math.floor(Math.random()*1e5),type:'line',coordinates:coords};
   entity=viewer.entities.add({id:model.id,polyline:{
    positions:coords.map(posFrom),width:5,material:C.Color.fromCssColorString('#f4b357'),clampToGround:false}});
  } else{
   if(coords.length<3){status('AREA needs at least 3 map points.');return;}
   model={id:'ann-'+Date.now()+'-'+Math.floor(Math.random()*1e5),type:'polygon',coordinates:coords};
   entity=viewer.entities.add({id:model.id,polygon:{
    hierarchy:coords.map(posFrom),perPositionHeight:true,
    material:C.Color.fromCssColorString('#3cddd0').withAlpha(.30),
    outline:true,outlineColor:C.Color.fromCssColorString('#f2d6a1')}});
  }
  entity.properties=new C.PropertyBag({source,type});
  entities.push({entity,model});
  viewer.scene.requestRender();status(type.toUpperCase()+' saved as overlay · '+entities.length+' feature(s).');
 }
 function finish(){
  if(!drawMode)return;
  const mode=drawMode;
  if(points.length)addDrawn(mode,points.map(p=>p.slice()));
  drawMode=null;points=[];cam.enableInputs=true;
  document.querySelectorAll('[data-draw]').forEach(b=>b.classList.remove('active'));
 }
 function hideHandles(){
  handles.forEach(h=>viewer.entities.remove(h.entity));
  handles=[];dragging=null;
 }
 function syncGeometry(entry){
  const m=entry.model,e=entry.entity;
  if(m.type==='pin')e.position=posFrom(m.coordinates);
  if(m.type==='line')e.polyline.positions=m.coordinates.map(posFrom);
  if(m.type==='polygon')e.polygon.hierarchy=new C.PolygonHierarchy(m.coordinates.map(posFrom));
  viewer.scene.requestRender();
 }
 function showHandles(){
  hideHandles();
  const entry=entities.find(x=>x.entity===selected);
  if(!editMode||!entry)return;
  const coords=entry.model.type==='pin'?[entry.model.coordinates]:entry.model.coordinates;
  coords.forEach((coord,index)=>{
   const entity=viewer.entities.add({position:posFrom(coord),point:{
    pixelSize:13,color:C.Color.fromCssColorString('#ffdf86'),
    outlineWidth:2,outlineColor:C.Color.fromCssColorString('#112233'),
    disableDepthTestDistance:Number.POSITIVE_INFINITY}});
   handles.push({entity,index,entry});
  });
  viewer.scene.requestRender();
 }
 function toggleEditing(enable){
  if(drawMode)finish();
  editMode=Boolean(enable);
  cam.enableInputs=!editMode;
  $('draw-edit').classList.toggle('active',editMode);
  if(editMode){
   showHandles();
   status('EDIT: click an annotation to select, then drag yellow vertex handles. Turn EDIT off to move the globe.');
  }else{
   hideHandles();
   status('Editor disabled; camera orbit restored.');
  }
 }
 handler.setInputAction(ev=>{
  if(!active||!editMode)return;
  const hit=viewer.scene.pick(ev.position);
  const handle=handles.find(h=>h.entity===hit?.id);
  if(handle){dragging=handle;cam.enableInputs=false;}
 },C.ScreenSpaceEventType.LEFT_DOWN);
 handler.setInputAction(ev=>{
  if(!active||!dragging)return;
  const point=groundPosition(ev.endPosition);
  if(!point)return;
  const coord=degrees(point);
  const {entry,index}=dragging;
  if(entry.model.type==='pin')entry.model.coordinates=coord;
  else entry.model.coordinates[index]=coord;
  dragging.entity.position=posFrom(coord);
  syncGeometry(entry);
 },C.ScreenSpaceEventType.MOUSE_MOVE);
 handler.setInputAction(()=>{
  if(dragging){dragging=null;status('Vertex updated. Save a GeoJSON copy to keep your changes.');}
  if(editMode)cam.enableInputs=false;
 },C.ScreenSpaceEventType.LEFT_UP);
 function click(ev){
  if(!active)return;
  if(!drawMode){
   const hit=viewer.scene.pick(ev.position);
   if(hit?.id && entities.some(x=>x.entity===hit.id)){
    selected=hit.id;
    if(editMode)showHandles();
    status('Selected '+selected.id+'. '+(editMode?'Drag golden vertex handles to edit geometry.':'DELETE will remove this overlay.'));
   }
   return;
  }
  const p=groundPosition(ev.position);
  if(!p){status('No ground intersection at that position. Try clicking the visible map.');return;}
  points.push(degrees(p));
  status('Placed '+points.length+' point(s). '+(drawMode==='pin'?'':'Continue or click FINISH.'));
  if(drawMode==='pin')finish();
 }
 handler.setInputAction(click,C.ScreenSpaceEventType.LEFT_CLICK);
 handler.setInputAction(()=>finish(),C.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
 const dBtns=document.querySelectorAll('[data-draw]');
 for(const btn of dBtns)btn.addEventListener('click',()=>setDrawing(btn.dataset.draw));
 $('draw-finish').addEventListener('click',finish);
 $('draw-edit').addEventListener('click',()=>toggleEditing(!editMode));
 $('draw-undo').addEventListener('click',()=>{
  if(points.length){points.pop();status('Removed last unsaved point.');return;}
  const last=entities.pop();
  if(last){if(selected===last.entity){selected=null;hideHandles();}viewer.entities.remove(last.entity);status('Undid last saved feature.');viewer.scene.requestRender();}
 });
 $('draw-delete').addEventListener('click',()=>{
  const i=entities.findIndex(x=>x.entity===selected);
  if(i<0){status('Click an existing annotation first to select it.');return;}
  viewer.entities.remove(entities[i].entity);entities.splice(i,1);
  selected=null;hideHandles();viewer.scene.requestRender();status('Selected annotation deleted.');
 });
 $('draw-clear').addEventListener('click',()=>{
  points=[];hideHandles();entities.forEach(x=>viewer.entities.remove(x.entity));entities=[];selected=null;setDrawing(null);
  status('All annotations cleared. Underlying imagery was not changed.');
 });
 function download(blob,name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=name;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),15000);
 }
 $('draw-export').addEventListener('click',()=>{
  if(!entities.length){status('Add at least one annotation before exporting.');return;}
  const features=entities.map(({model})=>{
   let geometry;
   if(model.type==='pin')geometry={type:'Point',coordinates:model.coordinates};
   else if(model.type==='line')geometry={type:'LineString',coordinates:model.coordinates};
   else geometry={type:'Polygon',coordinates:[[...model.coordinates,model.coordinates[0]]]};
   return {type:'Feature',properties:{source:'AEROVIEW',id:model.id},geometry};
  });
  download(new Blob([JSON.stringify({type:'FeatureCollection',features},null,2)],{type:'application/geo+json'}),'aeroview-annotations.geojson');
  status('Exported '+features.length+' features as GeoJSON (EPSG:4326).');
 });
 // Project files deliberately exclude Google keys, credentials, map tile images
 // and weather provider responses. They contain only user annotation geometry
 // and camera keyframes. The application never uploads these local files.
 const projectStatus=s=>{$('project-status').textContent=s;};
 const coordOk=p=>Array.isArray(p)&&p.length>=2&&p.length<=3
   &&p.every(x=>typeof x==='number'&&Number.isFinite(x))
   &&Math.abs(p[0])<=180&&Math.abs(p[1])<=90
   &&(p.length<3||Math.abs(p[2])<200000);
 const validFrame=f=>f&&f.destination&&f.orientation
   &&['x','y','z'].every(k=>typeof f.destination[k]==='number'&&Number.isFinite(f.destination[k])&&Math.abs(f.destination[k])<1e8)
   &&['heading','pitch','roll'].every(k=>typeof f.orientation[k]==='number'&&Number.isFinite(f.orientation[k])&&Math.abs(f.orientation[k])<1000);
 function exportProject(){
  const payload={
    schema:'aeroview-project',version:1,created_at:new Date().toISOString(),
    crs:'EPSG:4326',
    annotations:entities.map(({model})=>({
     type:model.type,coordinates:JSON.parse(JSON.stringify(model.coordinates))
    })),
    keyframes:keyframes.map(f=>({
     destination:{x:f.destination.x,y:f.destination.y,z:f.destination.z},
     orientation:{...f.orientation}
    }))
  };
  download(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),'aeroview-project.json');
  projectStatus('Saved '+payload.annotations.length+' annotations and '+payload.keyframes.length+' keyframes. No API keys included.');
 }
 function clearProject(){
  if(drawMode)finish();
  hideHandles();selected=null;
  entities.forEach(item=>viewer.entities.remove(item.entity));
  entities=[];points=[];keyframes=[];
  $('keyframe-count').textContent='0 KEYFRAMES';
  viewer.scene.requestRender();
 }
 function loadProject(raw){
  const obj=JSON.parse(raw);
  if(obj?.schema!=='aeroview-project'||obj.version!==1
   ||!Array.isArray(obj.annotations)||!Array.isArray(obj.keyframes)
   ||obj.annotations.length>300||obj.keyframes.length>100)throw new Error('Unsupported project schema or excessive entries.');
  let pointCount=0;
  const drawings=obj.annotations.map(f=>{
   if(!f||!['pin','line','polygon'].includes(f.type))throw new Error('Unknown annotation type.');
   const coords=f.type==='pin'?[f.coordinates]:f.coordinates;
   if(!Array.isArray(coords))throw new Error('Missing annotation coordinates.');
   if((f.type==='line'&&coords.length<2)||(f.type==='polygon'&&coords.length<3))
    throw new Error('Incomplete geometry.');
   pointCount+=coords.length;
   if(pointCount>5000||!coords.every(coordOk))throw new Error('Invalid or oversized coordinate geometry.');
   return {type:f.type,coordinates:JSON.parse(JSON.stringify(coords))};
  });
  if(!obj.keyframes.every(validFrame))throw new Error('Invalid camera keyframe.');
  // Validate everything BEFORE mutating the live scene.
  clearProject();
  for(const g of drawings)addDrawn(g.type,g.coordinates);
  keyframes=obj.keyframes.map(f=>({
   destination:new C.Cartesian3(f.destination.x,f.destination.y,f.destination.z),
   orientation:{heading:f.orientation.heading,pitch:f.orientation.pitch,roll:f.orientation.roll}
  }));
  $('keyframe-count').textContent=keyframes.length+' KEYFRAMES';
  projectStatus('Loaded '+drawings.length+' annotations and '+keyframes.length+' camera keyframes.');
  status('Project overlays restored · edit or export GeoJSON as needed.');
  viewer.scene.requestRender();
 }
 $('project-save').addEventListener('click',exportProject);
 $('project-clear').addEventListener('click',()=>{
  clearProject();
  projectStatus('Project reset locally; no file was deleted from your computer.');
 });
 $('project-load').addEventListener('click',()=>$('project-file').click());
 $('project-file').addEventListener('change',async e=>{
   const file=e.target.files?.[0];
   if(!file)return;
   try{
    if(file.size>2*1024*1024)throw new Error('Project must be smaller than 2 MB.');
    loadProject(await file.text());
   }catch(err){projectStatus('Cannot open project: '+(err?.message||'invalid file'));}
   finally{e.target.value='';}
 });

 // Camera viewpoints record real WGS84 coordinates and orientation.
 function cameraFrame(){
  const c=viewer.camera;
  return {destination:C.Cartesian3.clone(c.positionWC),
   orientation:{heading:c.heading,pitch:c.pitch,roll:c.roll}};
 }
 $('camera-add').addEventListener('click',()=>{
  keyframes.push(cameraFrame());
  $('keyframe-count').textContent=keyframes.length+' KEYFRAMES';
  camerastatus('Captured waypoint '+keyframes.length+'. Add '+Math.max(0,2-keyframes.length)+' more to fly.');
 });
 function stopRoute(){
  playing=false;
  try{viewer.camera.cancelFlight();}catch{}
  camerastatus('Camera flyover stopped; '+keyframes.length+' saved viewpoints.');
 }
 $('camera-stop').addEventListener('click',()=>{
  stopRoute();
  if(recording&&recorder?.state==='recording')recorder.stop();
 });
 async function playRoute(){
  if(playing){stopRoute();return;}
  if(keyframes.length<2){camerastatus('Add at least 2 viewpoints to animate a flight.');return;}
  if(drawMode)finish();
  playing=true;
  camerastatus('Playing '+keyframes.length+' camera keyframes. Capture with RECORD WEBM.');
  for(const frame of keyframes){
   if(!playing||!active)break;
   const finished=await new Promise(resolve=>{
    viewer.camera.flyTo({destination:frame.destination,orientation:frame.orientation,
     duration:Math.max(2.5,Math.min(6,keyframes.length*1.3)),
     complete:()=>resolve(true),cancel:()=>resolve(false)});
   });
   if(!finished)break;
  }
  playing=false;
  if(active)camerastatus('Route finished. Set new views or download a screenshot.');
 }
 $('camera-play').addEventListener('click',playRoute);
 // Browser export includes required map attribution and visual weather layers.
 // Google Photoreal content is NOT captured: its logo/attribution policy must
 // be handled separately with explicit rights before export is offered.
 const makeExportCanvas=()=>{
   const source=viewer.scene.canvas;
   const canvas=document.createElement('canvas');
   canvas.width=source.width;canvas.height=source.height;
   return canvas;
 };
 const composeFrame=(canvas)=>{
   const source=viewer.scene.canvas,ctx=canvas.getContext('2d',{alpha:false});
   ctx.fillStyle='#0e1b29';ctx.fillRect(0,0,canvas.width,canvas.height);
   ctx.drawImage(source,0,0,canvas.width,canvas.height);
   const fx=document.getElementById('weather-fx');
   if(fx&&!fx.hidden)ctx.drawImage(fx,0,0,canvas.width,canvas.height);
   const size=Math.max(13,Math.round(canvas.width/110));
   const text='© OpenStreetMap contributors · openstreetmap.org/copyright   |   CesiumJS   |   Weather: Open-Meteo / ECMWF';
   ctx.font='600 '+size+'px sans-serif';
   const tw=ctx.measureText(text).width;
   ctx.fillStyle='rgba(5,18,30,0.86)';
   ctx.fillRect(9,canvas.height-size-27,Math.min(canvas.width-18,tw+26),size+19);
   ctx.fillStyle='#ffffff';
   ctx.fillText(text,21,canvas.height-20,canvas.width-40);
   return canvas;
 };
 $('camera-snap').addEventListener('click',()=>{
  if(mode==='photoreal'){camerastatus('Photoreal export disabled: Google attribution-compliant export is not implemented.');return;}
  viewer.scene.requestRender();
  // A browser's WebGL drawing buffer can be cleared after present. Capture
  // immediately on Cesium postRender rather than long after the frame.
  const handle=()=>{
   viewer.scene.postRender.removeEventListener(handle);
   try{
    composeFrame(makeExportCanvas()).toBlob(blob=>{
     if(blob?.size>100)download(blob,'aeroview-map-'+Date.now()+'.png');
     else camerastatus('Screenshot unavailable with this WebGL driver.');
    },'image/png');
   }catch{camerastatus('Screenshot not supported by this WebGL browser.');}
  };
  viewer.scene.postRender.addEventListener(handle);
  viewer.scene.requestRender();
 });
 function stopRecording(){
  if(recorder?.state==='recording')recorder.stop();
  if(recordTimeout){clearTimeout(recordTimeout);recordTimeout=null;}
  if(ticker){clearInterval(ticker);ticker=null;}
 }
 $('camera-record').addEventListener('click',()=>{
  if(recording){stopRecording();return;}
  if(mode==='photoreal'){camerastatus('Photoreal video export disabled until Google attribution-compliant rendering is added.');return;}
  if(!viewer.scene.canvas.captureStream||!window.MediaRecorder){
   camerastatus('WEBM capture unsupported in this browser.');return;
  }
  try{
   const outputCanvas=makeExportCanvas();
   composeFrame(outputCanvas);
   const streamLocal=outputCanvas.captureStream(20);
   const types=['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'];
   const type=types.find(t=>MediaRecorder.isTypeSupported(t));
   if(!type){streamLocal.getTracks().forEach(t=>t.stop());camerastatus('No supported WebM encoding type.');return;}
   const recorderLocal=new MediaRecorder(streamLocal,{mimeType:type,videoBitsPerSecond:4500000});
   const chunks=[];
   recorderLocal.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data);};
   recorderLocal.onerror=()=>camerastatus('Video recorder failed. Check browser permissions and GPU.');
   recorderLocal.onstop=()=>{
    stopRecording();recording=false;
    streamLocal.getTracks().forEach(t=>t.stop());
    $('camera-record').textContent='● RECORD WEBM';
    const blob=new Blob(chunks,{type});
    if(blob.size>1000){download(blob,'aeroview-flight-'+Date.now()+'.webm');camerastatus('Saved WebM clip ('+(blob.size/1024/1024).toFixed(1)+' MB) with weather and map credits.');}
    else camerastatus('Recorder returned no video frames on this device.');
   };
   recorder=recorderLocal;stream=streamLocal;recording=true;
   recorder.start(1000);
   $('camera-record').textContent='■ STOP RECORD';
   // Cesium request-render mode must produce frames for recording even when idle.
   ticker=setInterval(()=>{if(active&&!viewer.isDestroyed()){viewer.scene.requestRender();composeFrame(outputCanvas);}},50);
   recordTimeout=setTimeout(stopRecording,20000);
   camerastatus('Recording Cesium map + weather FX + OSM credit · max 20 seconds. Tap again to stop.');
   if(keyframes.length>=2&&!playing)playRoute();
  }catch(e){recording=false;camerastatus('Recorder cannot start: '+(e?.name||'unsupported browser'));}
 });
 return {
  diagnostics:()=>({annotations:entities.length,drawMode,editMode,selected:!!selected,keyframes:keyframes.length,playing,recording}),
  destroy(){
   active=false;stopRoute();stopRecording();
   handler.destroy();hideHandles();cam.enableInputs=true;
   entities.forEach(({entity})=>viewer.entities.remove(entity));
   entities=[];keyframes=[];
  }
 };
}
