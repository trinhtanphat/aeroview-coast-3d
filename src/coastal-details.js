// Low-cost contact silhouettes and beach surf for an original simulated environment.
// These effects are illustrative; neither photogrammetry nor physical fluid simulation.
export function addArchitecturalShadows(THREE,scene,towers){
 const material=new THREE.MeshBasicMaterial({color:'#253b4a',transparent:true,opacity:.15,
  depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
 const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),material,towers.length);
 const dummy=new THREE.Object3D();
 for(let i=0;i<towers.length;i++){
  const b=towers[i];
  const length=Math.min(250,b.h*.72),width=Math.max(8,b.w*.7);
  dummy.position.set(b.x+length*.27,.42,b.z+length*.30);
  dummy.rotation.set(0,-.75,0);
  dummy.scale.set(width,.04,length);dummy.updateMatrix();
  mesh.setMatrixAt(i,dummy.matrix);
 }
 mesh.instanceMatrix.needsUpdate=true;
 mesh.frustumCulled=false;
 scene.add(mesh);
 return mesh;
}
export function addShoreBreakers(THREE,scene){
 const material=new THREE.MeshBasicMaterial({color:'#ebfff8',transparent:true,opacity:.32,
  depthWrite:false,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1});
 const verts=[],indices=[];
 for(let band=0;band<4;band++){
  const base=-178-band*5.7;
  const start=verts.length/3;
  let count=0;
  for(let x=-2200;x<=2200;x+=22){
   const wiggle=2.6*Math.sin(x*.018+band*.83)+.8*Math.sin(x*.048-band*.9);
   const z=base+wiggle;
   const y=-.275;
   verts.push(x,y,z-1.1,x,y,z+1.1);
   if(count){const i=start+(count-1)*2;indices.push(i,i+1,i+2,i+1,i+3,i+2);}
   count++;
  }
 }
 const geometry=new THREE.BufferGeometry();
 geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
 geometry.setIndex(indices);geometry.computeVertexNormals();
 const foam=new THREE.Mesh(geometry,material);foam.frustumCulled=false;scene.add(foam);
 return foam;
}
