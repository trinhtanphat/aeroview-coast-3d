import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import './style.css';

const $ = (id) => document.getElementById(id);
const canvas = $('world');
const loader = $('loading');
const bar = $('load-bar');
bar.style.width = '24%';

// A deterministic scene: every reload generates the same coastal district.
let seed = 2718281;
const rnd = () => ((seed = (Math.imul(1664525, seed) + 1013904223) >>> 0) / 4294967296);
const rand = (a, b) => a + (b - a) * rnd();
const clamp = THREE.MathUtils.clamp;
const smooth = (a,b,t) => a + (b-a)*t;
const mat = (hex, roughness=.85, metalness=0) => new THREE.MeshStandardMaterial({color:hex,roughness,metalness});
let renderer;
try {
 renderer = new THREE.WebGLRenderer({canvas,antialias:window.devicePixelRatio<1.6,alpha:false,powerPreference:'default'});
} catch(err) {
 loader.innerHTML='<div class="load-mark">A<span>✦</span></div><p>WEBGL IS UNAVAILABLE ON THIS DEVICE</p><p>Try Chrome/Edge with hardware acceleration enabled.</p>';
 throw err;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.2));
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.25;
const scene=new THREE.Scene();
scene.background=new THREE.Color('#92b3c8');
scene.fog=new THREE.FogExp2('#a0b7c6',0.00075);
const camera=new THREE.PerspectiveCamera(56,window.innerWidth/window.innerHeight,.5,7000);
camera.position.set(-455,230,475);
const controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.dampingFactor=.055;
controls.maxPolarAngle=Math.PI/2.05;
controls.minDistance=18;
controls.maxDistance=1900;
controls.target.set(0,25,-30);
controls.screenSpacePanning=true;
controls.rotateSpeed=.55;
controls.zoomSpeed=.85;
controls.panSpeed=.65;
const hemi=new THREE.HemisphereLight('#b5d7ff','#56745c',2.25);
scene.add(hemi);
const sun=new THREE.DirectionalLight('#fff0d4',3.15);
sun.position.set(-520,510,-850);
scene.add(sun);
const fills=new THREE.DirectionalLight('#83b8e7',.7);
fills.position.set(600,250,300);
scene.add(fills);

const skyUniforms={top:{value:new THREE.Color('#346893')},horizon:{value:new THREE.Color('#dfb89e')},sunDir:{value:new THREE.Vector3(-.4,.33,-1).normalize()},sunColor:{value:new THREE.Color('#fff0c8')}};
const sky=new THREE.Mesh(new THREE.SphereGeometry(5500,32,20),new THREE.ShaderMaterial({
 side:THREE.BackSide,depthWrite:false,fog:false,
 uniforms:skyUniforms,
 vertexShader:`varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
 fragmentShader:`varying vec3 vDir;uniform vec3 top;uniform vec3 horizon;uniform vec3 sunDir;uniform vec3 sunColor;void main(){vec3 d=normalize(vDir);float a=smoothstep(-0.13,0.78,d.y);vec3 c=mix(horizon,top,a);float s=pow(max(dot(d,normalize(sunDir)),0.),440.);c+=sunColor*s*1.7;float glow=pow(max(dot(d,normalize(sunDir)),0.),13.);c+=sunColor*glow*.20;gl_FragColor=vec4(c,1.0);}`
}));
scene.add(sky);

const land=mat('#8c957b',1);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(4500,2500),land);
ground.rotation.x=-Math.PI/2;
ground.position.set(0,-.65,1050);
scene.add(ground);
const grass=mat('#718b65');
const sandMat=mat('#e4cf9d');
const roadMat=new THREE.MeshStandardMaterial({color:'#3f4547',roughness:1});
const sidewalk=mat('#93978c');
const beach=new THREE.Mesh(new THREE.PlaneGeometry(4500,50),sandMat);
beach.rotation.x=-Math.PI/2;beach.position.set(0,.16,-168);scene.add(beach);
const walk=new THREE.Mesh(new THREE.PlaneGeometry(4500,17),sidewalk);
walk.rotation.x=-Math.PI/2;walk.position.set(0,.24,-127);scene.add(walk);
const promenade=new THREE.Mesh(new THREE.PlaneGeometry(4500,8),roadMat);
promenade.rotation.x=-Math.PI/2;promenade.position.set(0,.27,-114);scene.add(promenade);
const waterUniforms={time:{value:0},deep:{value:new THREE.Color('#194c64')},shallow:{value:new THREE.Color('#397d85')},reflection:{value:new THREE.Color('#ffe5b5')}};
const water=new THREE.Mesh(new THREE.PlaneGeometry(5000,4700,1,1),new THREE.ShaderMaterial({
 uniforms:waterUniforms,side:THREE.DoubleSide,depthWrite:true,
 vertexShader:`varying vec2 vXZ;void main(){vec4 p=modelMatrix*vec4(position,1.0);vXZ=p.xz;gl_Position=projectionMatrix*viewMatrix*p;}`,
 fragmentShader:`varying vec2 vXZ;uniform float time;uniform vec3 deep;uniform vec3 shallow;uniform vec3 reflection;void main(){float a=sin(vXZ.x*.034+vXZ.y*.083+time*.8);float b=sin(vXZ.y*.087-vXZ.x*.051-time*.65);float c=sin(vXZ.x*.13+vXZ.y*.12+time);float glitter=pow(max(0.,a*b*c),6.)*.65;float ripple=sin(vXZ.x*.19+vXZ.y*.071+time*.4)*.5+.5;vec3 color=mix(deep,shallow,ripple*.47+.2);color+=reflection*glitter;gl_FragColor=vec4(color,1.0);}`
}));
water.rotation.x=-Math.PI/2;water.position.set(0,-.32,-2523);scene.add(water);
// A second water surface creates a winding tidal inlet through the city.
function riverX(z){return 155 + Math.sin(z*.008+1.25)*84 + Math.sin(z*.016)*25;}
const riverPoints=[];
for(let z=-130;z<=1250;z+=16){riverPoints.push(new THREE.Vector3(riverX(z),0,z));}
const riverVerts=[];const riverUV=[];const riverIndices=[];
for(let i=0;i<riverPoints.length;i++){const p=riverPoints[i];const x=riverX(p.z);riverVerts.push(x-32,.32,p.z,x+32,.32,p.z);riverUV.push(0,i/5,1,i/5);if(i>0){let j=i*2;riverIndices.push(j-2,j-1,j,j-1,j+1,j);}}
const riverGeo=new THREE.BufferGeometry();
riverGeo.setAttribute('position',new THREE.Float32BufferAttribute(riverVerts,3));
riverGeo.setAttribute('uv',new THREE.Float32BufferAttribute(riverUV,2));
riverGeo.setIndex(riverIndices);
riverGeo.computeVertexNormals();
const river=new THREE.Mesh(riverGeo,new THREE.MeshStandardMaterial({color:'#305d65',metalness:.24,roughness:.3,side:THREE.DoubleSide}));
scene.add(river);
const lineMaterial=mat('#b5b39f');
// Merge all static roads, parks and markings by shared material.
const groundBaseGeometry=new THREE.PlaneGeometry(1,1);
const groundBatches=new Map();
function plane(w,h,x,z,y,material){
 const m=new THREE.Mesh(groundBaseGeometry,material);
 m.rotation.x=-Math.PI/2;m.scale.set(w,h,1);m.position.set(x,y,z);
 const arr=groundBatches.get(material)||[];
 arr.push(m);groundBatches.set(material,arr);
 return m;
}
function flushGroundMeshes(){
 for(const [material,meshes] of groundBatches){
  const pieces=meshes.map(mesh=>{
   mesh.updateMatrix();
   const geo=groundBaseGeometry.clone();
   geo.applyMatrix4(mesh.matrix);
   return geo;
  });
  const merged=mergeGeometries(pieces,false);
  pieces.forEach(geo=>geo.dispose());
  if(!merged)throw new Error('Unable to merge ground geometry');
  scene.add(new THREE.Mesh(merged,material));
 }
 groundBatches.clear();
}
function ribbon(points,w,color,y=.25){const material=mat(color);for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i];const dx=b[0]-a[0],dz=b[1]-a[1];const len=Math.hypot(dx,dz);let m=plane(w,len,(a[0]+b[0])/2,(a[1]+b[1])/2,y,material);m.rotation.z=0;m.rotation.y=-Math.atan2(dx,dz);}}
bar.style.width='46%';
// Road grid. The small widths avoid the map being just one grey mass.
for(let x=-1000;x<=1000;x+=43){
 plane(7,1165,x,440,.3,roadMat);
 if(Math.round(x/43)%2===0)plane(.32,1165,x,440,.315,lineMaterial);
}
for(let z=-91;z<=1040;z+=42){
 plane(2130,7,0,z,.31,roadMat);
 if(Math.round(z/42)%2===0)plane(2130,.30,0,z,.32,lineMaterial);
}
// Parkland zones + promenades.
const trees=[];
const parks=[[-270,130,100,125],[-450,360,125,110],[460,150,120,85],[630,475,105,100],[-670,630,160,150],[375,760,120,120]];
for(const [x,z,w,h] of parks){plane(w,h,x,z,.33,grass);for(let i=0;i<12;i++){let px=x+rand(-w*.45,w*.45),pz=z+rand(-h*.45,h*.45);addTree(px,pz,.35)}}
const lotGeometry=new THREE.BoxGeometry(1,1,1);
const bMats=[
 new THREE.MeshStandardMaterial({color:'#9aa7ab',metalness:.13,roughness:.75}),
 new THREE.MeshStandardMaterial({color:'#b8aca0',metalness:.14,roughness:.73}),
 new THREE.MeshStandardMaterial({color:'#647f91',metalness:.37,roughness:.48}),
 new THREE.MeshStandardMaterial({color:'#a1aea7',metalness:.24,roughness:.64}),
 new THREE.MeshStandardMaterial({color:'#827a72',metalness:.12,roughness:.88})
];
let cityGroups=[[],[],[],[],[]];
let towerNodes=[];
let lightsPositions=[];
function nearPark(x,z){return parks.some(([px,pz,w,h])=>Math.abs(x-px)<w/2+10 && Math.abs(z-pz)<h/2+10);}
function inRiver(x,z){return Math.abs(x-riverX(z))<48;}
for(let x=-980;x<=980;x+=43){for(let z=-70;z<=1030;z+=42){
 const px=x+rand(-7,7),pz=z+rand(-6,6);
 if(inRiver(px,pz)||nearPark(px,pz)||rnd()<.065)continue;
 const density= Math.exp(-Math.pow((px+40)/500,2))*Math.exp(-Math.pow((pz-95)/380,2));
 const towerFactor=density*(1.15 + rnd()*.5);
 let height;
 if(rnd()<towerFactor*.21)height=rand(78,198);
 else if(rnd()<towerFactor*.42)height=rand(34,93);
 else height=rand(7,26);
 height*=pz>540?.6:1;
 const w=rand(12,24),d=rand(12,25),style=rnd()<towerFactor*.22?2:Math.floor(rnd()*5);
 const item={x:px,z:pz,w,d,h:height,color:new THREE.Color().setHSL(.52+rand(-.06,.08),rand(.06,.18),rand(.42,.69))};
 cityGroups[style].push(item);
 if(height>75){towerNodes.push(item);if(rnd()<.3)lightsPositions.push([px,height+.3,pz]);}
 }}
// Signature skyscraper cluster at the coastal edge.
for(let i=0;i<32;i++){
 const phi=i*2.39996,r=Math.sqrt(i)*22;
 const x=-135+Math.cos(phi)*r,z=50+Math.sin(phi)*r;
 if(inRiver(x,z))continue;
 const h=rand(105,240);
 let item={x,z,w:rand(13,22),d:rand(14,23),h,color:new THREE.Color().setHSL(rand(.51,.57),.16,rand(.54,.7))};
 cityGroups[i%3===0?3:2].push(item);
 towerNodes.push(item);
 lightsPositions.push([x,h+.3,z]);
}
const temp=new THREE.Object3D();
let totalBuildings=0;
for(let s=0;s<cityGroups.length;s++){
 const data=cityGroups[s];totalBuildings+=data.length;
 const mesh=new THREE.InstancedMesh(lotGeometry,bMats[s],data.length);
 for(let i=0;i<data.length;i++){const b=data[i];temp.position.set(b.x,b.h/2+.6,b.z);temp.scale.set(b.w,b.h,b.d);temp.rotation.set(0,0,0);temp.updateMatrix();mesh.setMatrixAt(i,temp.matrix);mesh.setColorAt(i,b.color);}
 mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;mesh.frustumCulled=false;scene.add(mesh);
}
// Rooftop features make downtown's silhouette visually varied.
const capsMaterial=mat('#637784',.58,.3);
const aerialMaterial=mat('#d7c9b2',.34,.6);
const roofData=[],antennaData=[];
for(const b of towerNodes){
 if(rnd()<.62)roofData.push({x:b.x,y:b.h+4,z:b.z,w:b.w*.45,h:rand(3,8),d:b.d*.45});
 if(rnd()<.25)antennaData.push({x:b.x,y:b.h+12,z:b.z,h:rand(8,17)});
}
if(roofData.length){
 const roofs=new THREE.InstancedMesh(lotGeometry,capsMaterial,roofData.length);
 roofData.forEach((b,i)=>{temp.position.set(b.x,b.y,b.z);temp.scale.set(b.w,b.h,b.d);temp.rotation.set(0,0,0);temp.updateMatrix();roofs.setMatrixAt(i,temp.matrix);});
 roofs.instanceMatrix.needsUpdate=true;roofs.frustumCulled=false;scene.add(roofs);
}
if(antennaData.length){
 const antenna=new THREE.InstancedMesh(new THREE.CylinderGeometry(.22,.5,1,5),aerialMaterial,antennaData.length);
 antennaData.forEach((b,i)=>{temp.position.set(b.x,b.y,b.z);temp.scale.set(1,b.h,1);temp.rotation.set(0,0,0);temp.updateMatrix();antenna.setMatrixAt(i,temp.matrix);});
 antenna.instanceMatrix.needsUpdate=true;antenna.frustumCulled=false;scene.add(antenna);
}
// Window panes: instanced geometry, no building-per-window draw calls.
const windowData=[];
for(const b of towerNodes){
 const floors=Math.min(33,Math.floor(b.h/5.6));
 for(let j=1;j<floors;j++){
  for(let k=-1;k<=1;k++){
   if(rnd()<.17)continue;
   windowData.push({x:b.x+(k*.24*b.w),y:j*(b.h/floors)+1.25,z:b.z+b.d/2+.08});
   if(rnd()<.55)windowData.push({x:b.x+b.w/2+.08,y:j*(b.h/floors)+1.25,z:b.z+(k*.24*b.d),side:true});
  }
 }
}
const windowMaterial=new THREE.MeshBasicMaterial({color:'#ffe4a9',transparent:true,opacity:.45,side:THREE.DoubleSide,depthWrite:false});
const windowMesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(1.3,1.65),windowMaterial,windowData.length);
for(let i=0;i<windowData.length;i++){
 let b=windowData[i];temp.position.set(b.x,b.y,b.z);temp.scale.set(1,1,1);temp.rotation.set(0,b.side?Math.PI/2:0,0);temp.updateMatrix();windowMesh.setMatrixAt(i,temp.matrix);
 windowMesh.setColorAt(i,new THREE.Color(rnd()<.36?'#ffcf86':'#fff0c8'));
}
windowMesh.frustumCulled=false;scene.add(windowMesh);

// River bridges span the inlet: they are above the water's surface.
for(let z=25;z<970;z+=168){
 const cx=riverX(z);plane(98,9,cx,z,1.0,roadMat);
 for(const offset of [-5,5])plane(98,.9,cx,z+offset,1.05,sidewalk);
}
flushGroundMeshes();
// Street trees near parks and along the coastal esplanade.
const trunkMat=mat('#806948'),crownMat=mat('#557e59');
const trunkGeo=new THREE.CylinderGeometry(.45,.62,4.5,5);
const crownGeo=new THREE.IcosahedronGeometry(3.3,0);
function addTree(x,z,y){trees.push({x,z,y,s:rand(.7,1.4)});}
for(let x=-980;x<980;x+=18){if(rnd()>.27)addTree(x,-134,.32);}
for(let i=0;i<250;i++){const x=rand(-1020,1020),z=rand(60,1000);if(nearPark(x,z)&&!inRiver(x,z))addTree(x,z,.34);}
const trunks=new THREE.InstancedMesh(trunkGeo,trunkMat,trees.length);
const crowns=new THREE.InstancedMesh(crownGeo,crownMat,trees.length);
for(let i=0;i<trees.length;i++){
 const b=trees[i];temp.rotation.set(0,0,0);
 temp.position.set(b.x,b.y+2.25*b.s,b.z);temp.scale.set(b.s,b.s,b.s);temp.updateMatrix();trunks.setMatrixAt(i,temp.matrix);
 temp.position.set(b.x,b.y+5.6*b.s,b.z);temp.scale.set(b.s,b.s*.72,b.s);temp.updateMatrix();crowns.setMatrixAt(i,temp.matrix);
 crowns.setColorAt(i,new THREE.Color().setHSL(rand(.25,.37),rand(.14,.35),rand(.25,.39)));
}
trunks.frustumCulled=false;crowns.frustumCulled=false;scene.add(trunks,crowns);
// Distant islands build a layered horizon above the ocean.
const islandMaterial=mat('#7b8d7f');
for(let i=0;i<19;i++){
 const mountain=new THREE.Mesh(new THREE.ConeGeometry(rand(55,170),rand(10,55),7),islandMaterial);
 mountain.position.set(-2100+i*235,-3,rand(-3250,-2550));
 mountain.rotation.y=rnd()*Math.PI;mountain.scale.y=rand(.3,.8);scene.add(mountain);
}
// Clouds: soft multi-layer groups, not a static backdrop.
const cloudMaterial=new THREE.MeshLambertMaterial({color:'#f4eee2',transparent:true,opacity:.34,depthWrite:false});
const cloudGeo=new THREE.SphereGeometry(1,10,7);
const cloudMesh=new THREE.InstancedMesh(cloudGeo,cloudMaterial,375);
let cloudIndex=0;
for(let i=0;i<125;i++){
 const bx=rand(-2200,2200),by=rand(260,510),bz=rand(-2200,-550);
 for(let j=0;j<3;j++){
  temp.position.set(bx+rand(-60,60),by+rand(-7,7),bz+rand(-45,45));
  temp.scale.set(rand(55,125),rand(12,25),rand(30,70));
  temp.rotation.set(0,0,0);temp.updateMatrix();
  cloudMesh.setMatrixAt(cloudIndex++,temp.matrix);
 }
}
cloudMesh.instanceMatrix.needsUpdate=true;
cloudMesh.frustumCulled=false;
scene.add(cloudMesh);
// Distant shore boats / maritime movement.
const boats=[];
const hullMat=mat('#c7d7d9'),sailMat=new THREE.MeshBasicMaterial({color:'#fffaf0',side:THREE.DoubleSide});
for(let i=0;i<11;i++){
 const group=new THREE.Group();
 const hull=new THREE.Mesh(new THREE.BoxGeometry(rand(5,12),1.5,3.3),hullMat);
 group.add(hull);
 if(rnd()<.6){
 const sail=new THREE.Mesh(new THREE.ConeGeometry(4,13,3),sailMat);sail.rotation.z=Math.PI/2.4;sail.position.y=7;group.add(sail);
 }
 group.position.set(rand(-900,900),.4,rand(-750,-230));
 group.rotation.y=rand(-Math.PI,Math.PI);
 scene.add(group);boats.push({node:group,speed:rand(.25,.8)});
}
bar.style.width='80%';

const presets={
 skyline:{position:new THREE.Vector3(-455,230,475),target:new THREE.Vector3(0,25,-30)},
 overhead:{position:new THREE.Vector3(0,780,360),target:new THREE.Vector3(0,0,180)},
 waterfront:{position:new THREE.Vector3(130,125,-580),target:new THREE.Vector3(-50,65,75)},
 street:{position:new THREE.Vector3(-40,22,275),target:new THREE.Vector3(-85,37,-100)}
};
let animationTarget=null, flyover=false, cinematicElapsed=0;
function setView(name){
 if(!presets[name])return;
 flyover=false;controls.enabled=true;
 $('cinematic-label').textContent='START FLYOVER';
 animationTarget={position:presets[name].position.clone(),target:presets[name].target.clone()};
 document.querySelectorAll('.view-btn').forEach(b=>b.classList.toggle('selected',b.dataset.view===name));
 showToast(name==='overhead'?'TOP DOWN VIEW':name==='waterfront'?'COASTLINE VIEW':name==='street'?'STREET VIEW':'SKYLINE VIEW');
}
document.querySelectorAll('.view-btn').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
const clock=new THREE.Clock();
let colorTime=67;
let haze=.35,cityLights=true;
function setSky(t){
 colorTime=t;
 const night=t<17||t>90;
 let top,horizon,sunColor,fogColor,intensity,skyColor;
 if(t<=50){
  const f=t/50;
  top=new THREE.Color('#2b456f').lerp(new THREE.Color('#347ab5'),f);
  horizon=new THREE.Color('#e29c84').lerp(new THREE.Color('#9cc8d9'),f);
  sunColor=new THREE.Color('#fff0d0');
  fogColor=new THREE.Color('#7389a6').lerp(new THREE.Color('#aec8cb'),f);
  intensity=smooth(.75,3.1,f);
 }else if(t<=78){
  const f=(t-50)/28;
  top=new THREE.Color('#347ab5').lerp(new THREE.Color('#284f80'),f);
  horizon=new THREE.Color('#9cc8d9').lerp(new THREE.Color('#f0b081'),f);
  sunColor=new THREE.Color('#ffe3af');
  fogColor=new THREE.Color('#aec8cb').lerp(new THREE.Color('#cc9e8c'),f);
  intensity=smooth(3.1,1.5,f);
 }else{
  const f=Math.min(1,(t-78)/22);
  top=new THREE.Color('#284f80').lerp(new THREE.Color('#091b36'),f);
  horizon=new THREE.Color('#f0b081').lerp(new THREE.Color('#324b70'),f);
  sunColor=new THREE.Color('#dba676');
  fogColor=new THREE.Color('#cc9e8c').lerp(new THREE.Color('#273e61'),f);
  intensity=smooth(1.5,.26,f);
 }
 skyUniforms.top.value.copy(top);
 skyUniforms.horizon.value.copy(horizon);
 skyUniforms.sunColor.value.copy(sunColor);
 scene.fog.color.copy(fogColor);
 scene.background.copy(fogColor);
 skyUniforms.sunDir.value.set(-.5,Math.max(.025,(78-t)/70),-1).normalize();
 sun.color.copy(sunColor);
 sun.intensity=intensity;
 sun.position.set(-450,Math.max(12,650-t*7),-950);
 hemi.intensity=night?.56:smooth(1.4,2.0,Math.sin((t/100)*Math.PI));
 renderer.toneMappingExposure=night?.9:1.17;
 windowMaterial.opacity=cityLights?Math.min(.97,night?.91:Math.max(.08,(t-45)/85)):.02;
 waterUniforms.deep.value.copy(new THREE.Color(night?'#10253f':t>76?'#315d6b':'#194c64'));
 waterUniforms.shallow.value.copy(new THREE.Color(night?'#1f4a5d':t>76?'#597979':'#397d85'));
 // Correctly identify dawn, afternoon, dusk and night.
 $('time-label').textContent=t<17?'BLUE HOUR':t<55?'DAYLIGHT':t<79?'GOLDEN HOUR':t<91?'DUSK':'NIGHT';
 $('time-slider').style.background=`linear-gradient(90deg,#dabf8d ${t}%,#56606b ${t}%)`;
}
function setHaze(x){haze=x/100;scene.fog.density=.00018+haze*.00175;$('haze-label').textContent=x+'%';$('haze-slider').style.background=`linear-gradient(90deg,#dabf8d ${x}%,#56606b ${x}%)`;}
$('time-slider').addEventListener('input',e=>setSky(Number(e.target.value)));
$('haze-slider').addEventListener('input',e=>setHaze(Number(e.target.value)));
$('lights-toggle').addEventListener('change',e=>{cityLights=e.target.checked;setSky(colorTime);});
setSky(67);setHaze(35);
function startFlyover(){
 flyover=!flyover;animationTarget=null;
 controls.enabled=!flyover;
 $('cinematic-label').textContent=flyover?'STOP FLYOVER':'START FLYOVER';
 if(flyover)cinematicElapsed=0;
 showToast(flyover?'CINEMATIC FLYOVER ACTIVE':'FLYOVER PAUSED');
}
$('cinematic').addEventListener('click',startFlyover);
$('explore').addEventListener('click',()=>{flyover=false;controls.enabled=true;animationTarget=null;$('cinematic-label').textContent='START FLYOVER';showToast('FREE EXPLORE: DRAG / SCROLL / PAN');});
$('fullscreen').addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>showToast('FULLSCREEN UNAVAILABLE'));else document.exitFullscreen?.();});
const qualityOrder=['AUTO','ECO','BALANCED','ULTRA'];
const qualityCaps={ECO:.55,BALANCED:1,ULTRA:1.8};
let qualityMode='AUTO', autoRatioCap=1.2, slowChecks=0, nextAdaptiveCheck=4;
function activePixelRatio(){
 const maxRatio=qualityMode==='AUTO'?autoRatioCap:qualityCaps[qualityMode];
 return Math.min(window.devicePixelRatio||1.5,maxRatio);
}
function applyRenderQuality(message=false){
 renderer.setPixelRatio(activePixelRatio());
 renderer.setSize(window.innerWidth,window.innerHeight);
 $('quality-button').textContent='QUALITY · '+qualityMode;
 $('quality-button').title='Current internal pixel ratio: '+renderer.getPixelRatio().toFixed(2)+'×; click to cycle';
 if(message)showToast('RENDER QUALITY: '+qualityMode);
}
$('quality-button').addEventListener('click',()=>{
 qualityMode=qualityOrder[(qualityOrder.indexOf(qualityMode)+1)%qualityOrder.length];
 slowChecks=0;nextAdaptiveCheck=clock.elapsedTime+5;
 applyRenderQuality(true);
});
let toastTimer;
function showToast(str){const el=$('toast');el.textContent=str;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2400);}
// Native touchscreen controls via OrbitControls (pinch to zoom, two-finger pan).
const fpsEl=$('fps'),altEl=$('altitude');
let frames=0,lastTime=0;
function onResize(){
 const w=window.innerWidth,h=window.innerHeight;
 camera.aspect=w/h;camera.updateProjectionMatrix();
 renderer.setPixelRatio(activePixelRatio());
 renderer.setSize(w,h);
}
window.addEventListener('resize',onResize);
function animate(){
 const dt=Math.min(clock.getDelta(),.07), elapsed=clock.elapsedTime;
 if(flyover){
  cinematicElapsed+=dt;
  const t=cinematicElapsed;
  const angle=t*.075-.8;
  const radius=410+80*Math.sin(t*.16);
  const target=new THREE.Vector3(-60+65*Math.sin(t*.11),35+12*Math.sin(t*.25),-20+50*Math.cos(t*.08));
  camera.position.set(target.x+Math.cos(angle)*radius,155+70*Math.sin(t*.21),target.z+Math.sin(angle)*radius);
  camera.lookAt(target);controls.target.copy(target);
 }else if(animationTarget){
  const t=Math.min(1,dt*2.3);
  camera.position.lerp(animationTarget.position,t);
  controls.target.lerp(animationTarget.target,t);
  if(camera.position.distanceTo(animationTarget.position)<1.1&&controls.target.distanceTo(animationTarget.target)<1){camera.position.copy(animationTarget.position);controls.target.copy(animationTarget.target);animationTarget=null;}
 }
 controls.update();
 waterUniforms.time.value=elapsed;
 for(let i=0;i<boats.length;i++){const b=boats[i];b.node.position.x+=Math.sin(b.node.rotation.y)*dt*b.speed*3;b.node.position.z+=Math.cos(b.node.rotation.y)*dt*b.speed*3;}
 if(Math.floor(elapsed*2)%2===0){/* light animation uses material opacity in setSky */}
 renderer.render(scene,camera);
 frames++;
 if(elapsed-lastTime>=1){
  const fps=Math.round(frames/(elapsed-lastTime));
  fpsEl.innerHTML=`${fps} <small>FPS</small>`;
  if(qualityMode==='AUTO' && elapsed>=nextAdaptiveCheck){
   if(fps<26){slowChecks++;if(slowChecks>=2&&autoRatioCap>.51){autoRatioCap=Math.max(.5,autoRatioCap-.25);applyRenderQuality();slowChecks=0;}}
   else if(fps>55&&autoRatioCap<1.2){autoRatioCap=Math.min(1.2,autoRatioCap+.15);applyRenderQuality();slowChecks=0;}
   else slowChecks=0;
   nextAdaptiveCheck=elapsed+1;
  }
  frames=0;lastTime=elapsed;
 }
 altEl.innerHTML=`${Math.round(Math.max(camera.position.y,0))} <small>M</small>`;
}
renderer.setAnimationLoop(animate);
window.__AEROVIEW_DIAGNOSTICS__=()=>({
 drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,
 pixelRatio:renderer.getPixelRatio(),quality:qualityMode,buildings:totalBuildings,
 windowInstances:windowData.length,cloudInstances:cloudIndex
});
applyRenderQuality();
bar.style.width='100%';
requestAnimationFrame(()=>{requestAnimationFrame(()=>loader.classList.add('hidden'))});
console.info('AEROVIEW initialized —',totalBuildings,'buildings,',windowData.length,'windows,',trees.length,'trees');
