(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const qs="180",oi={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sc=0,Za=1,ac=2,po=1,oc=2,gn=3,Cn=0,Dt=1,zt=2,An=0,li=1,$a=2,Ja=3,Qa=4,lc=5,Fn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,$r=204,Jr=205,_c=206,vc=207,xc=208,Mc=209,Sc=210,Ec=211,yc=212,Tc=213,bc=214,Qr=0,es=1,ts=2,ci=3,ns=4,is=5,rs=6,ss=7,Ys=0,Ac=1,wc=2,wn=0,Rc=1,Cc=2,Pc=3,mo=4,Lc=5,Dc=6,Ic=7,go=300,hi=301,ui=302,as=303,os=304,dr=306,ls=1e3,On=1001,cs=1002,kt=1003,Uc=1004,tr=1005,cn=1006,Xr=1007,Bn=1008,dn=1009,_o=1010,vo=1011,Oi=1012,js=1013,zn=1014,hn=1015,Vi=1016,Ks=1017,Zs=1018,Bi=1020,xo=35902,Mo=35899,So=1021,Eo=1022,Jt=1023,zi=1026,ki=1027,$s=1028,Js=1029,yo=1030,Qs=1031,ea=1033,rr=33776,sr=33777,ar=33778,or=33779,hs=35840,us=35841,ds=35842,fs=35843,ps=36196,ms=37492,gs=37496,_s=37808,vs=37809,xs=37810,Ms=37811,Ss=37812,Es=37813,ys=37814,Ts=37815,bs=37816,As=37817,ws=37818,Rs=37819,Cs=37820,Ps=37821,Ls=36492,Ds=36494,Is=36495,Us=36283,Ns=36284,Fs=36285,Os=36286,Nc=3200,Fc=3201,ta=0,Oc=1,bn="",Bt="srgb",di="srgb-linear",cr="linear",tt="srgb",ni=7680,eo=519,Bc=512,zc=513,kc=514,To=515,Hc=516,Gc=517,Vc=518,Wc=519,to=35044,no="300 es",un=2e3,hr=2001;class Vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,io=180/Math.PI;function fr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function jh(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xc={DEG2RAD:qr};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*_,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,u*T);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const v=o*T;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new N,nl=new kn;class Ve{constructor(e,t,n,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],u=r[6],T=r[1],y=r[4],v=r[7],C=r[2],w=r[5],b=r[8];return s[0]=a*_+o*T+l*C,s[3]=a*m+o*y+l*w,s[6]=a*u+o*v+l*b,s[1]=c*_+h*T+d*C,s[4]=c*m+h*y+d*w,s[7]=c*u+h*v+d*b,s[2]=f*_+p*T+g*C,s[5]=f*m+p*y+g*w,s[8]=f*u+p*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,p=c*s-a*l,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Ve;function qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){const i=Bs("canvas");return i.style.display="block",i}const il={};function ur(i){i in il||(il[i]=!0,console.warn(i))}function Kh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const rl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){const i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const Je=Zh();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class jc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=Bs("canvas")),_i.width=e.width,_i.height=e.height;const r=_i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $h=0;class na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(va(r[a].image)):s.push(va(r[a]))}else s=va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;const xa=new N;class Rt extends Vn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=On,r=On,s=cn,a=Bn,o=Jt,l=dn,c=Rt.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=fr(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=go;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(u+1)/2,w=(h+f)/4,b=(d+_)/4,P=(g+m)/4;return y>v&&y>C?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=b/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=P/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=P/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kc extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Rt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bo extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),yr.subVectors(this.max,Ki),vi.subVectors(e.a,Ki),xi.subVectors(e.b,Ki),Mi.subVectors(e.c,Ki),Pn.subVectors(xi,vi),Ln.subVectors(Mi,xi),Kn.subVectors(vi,Mi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Kn.y,Kn.x,0];return!Ma(t,vi,xi,Mi,yr)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,vi,xi,Mi,yr))?!1:(Tr.crossVectors(Pn,Ln),t=[Tr.x,Tr.y,Tr.z],Ma(t,vi,xi,Mi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,Er=new Wn,vi=new N,xi=new N,Mi=new N,Pn=new N,Ln=new N,Kn=new N,Ki=new N,yr=new N,Tr=new N,Zn=new N;function Ma(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zn.fromArray(i,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qh=new Wn,Zi=new N,Sa=new N;class Wi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Sa)),this.expandByPoint(Zi.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new N,Ea=new N,br=new N,Dn=new N,ya=new N,Ar=new N,Ta=new N;class Ao{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ea.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Ea);const s=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=Dn.dot(this.direction),l=-Dn.dot(br),c=Dn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ea).addScaledVector(br,f),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){ya.subVectors(t,e),Ar.subVectors(n,e),Ta.crossVectors(ya,Ar);let a=this.direction.dot(Ta),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=o*this.direction.dot(Ar.crossVectors(Dn,Ar));if(l<0)return null;const c=o*this.direction.dot(ya.cross(Dn));if(c<0||l+c>a)return null;const h=-o*Dn.dot(Ta);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,r,s,a,o,l,c,h,d,f,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,f,p,g,_,m)}set(e,t,n,r,s,a,o,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),In.crossVectors(n,Vt),In.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),In.crossVectors(n,Vt)),In.normalize(),wr.crossVectors(Vt,In),r[0]=In.x,r[4]=wr.x,r[8]=Vt.x,r[1]=In.y,r[5]=wr.y,r[9]=Vt.y,r[2]=In.z,r[6]=wr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],T=n[3],y=n[7],v=n[11],C=n[15],w=r[0],b=r[4],P=r[8],S=r[12],M=r[1],R=r[5],I=r[9],D=r[13],F=r[2],H=r[6],G=r[10],K=r[14],B=r[3],X=r[7],Q=r[11],re=r[15];return s[0]=a*w+o*M+l*F+c*B,s[4]=a*b+o*R+l*H+c*X,s[8]=a*P+o*I+l*G+c*Q,s[12]=a*S+o*D+l*K+c*re,s[1]=h*w+d*M+f*F+p*B,s[5]=h*b+d*R+f*H+p*X,s[9]=h*P+d*I+f*G+p*Q,s[13]=h*S+d*D+f*K+p*re,s[2]=g*w+_*M+m*F+u*B,s[6]=g*b+_*R+m*H+u*X,s[10]=g*P+_*I+m*G+u*Q,s[14]=g*S+_*D+m*K+u*re,s[3]=T*w+y*M+v*F+C*B,s[7]=T*b+y*R+v*H+C*X,s[11]=T*P+y*I+v*G+C*Q,s[15]=T*S+y*D+v*K+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*p-n*l*p)+_*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+u*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],T=d*m*c-_*f*c+_*l*p-o*m*p-d*l*u+o*f*u,y=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,v=h*_*c-g*d*c+g*o*p-a*_*p-h*o*u+a*d*u,C=g*d*l-h*_*l-g*o*f+a*_*f+h*o*m-a*d*m,w=t*T+n*y+r*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(_*f*s-d*m*s-_*r*p+n*m*p+d*r*u-n*f*u)*b,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*u+n*l*u)*b,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*p-n*l*p)*b,e[4]=y*b,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*u+t*f*u)*b,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*u-t*l*u)*b,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*p+t*l*p)*b,e[8]=v*b,e[9]=(g*d*s-h*_*s-g*n*p+t*_*p+h*n*u-t*d*u)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*u+t*o*u)*b,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*b,e[12]=C*b,e[13]=(h*_*r-g*d*r+g*n*f-t*_*f-h*n*m+t*d*m)*b,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,p=s*h,g=s*d,_=a*h,m=a*d,u=o*d,T=l*c,y=l*h,v=l*d,C=n.x,w=n.y,b=n.z;return r[0]=(1-(_+u))*C,r[1]=(p+v)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(f+u))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+y)*b,r[9]=(m-T)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const a=Si.set(r[4],r[5],r[6]).length(),o=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,h=1/a,d=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===un)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===hr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===un)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===hr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new N,nn=new ht,eu=new N(0,0,0),tu=new N(1,1,1),In=new N,wr=new N,Vt=new N,al=new ht,ol=new kn;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nu=0;const ll=new N,Ei=new kn,Sn=new ht,Rr=new N,$i=new N,iu=new N,ru=new kn,cl=new N(1,0,0),hl=new N(0,1,0),ul=new N(0,0,1),dl={type:"added"},su={type:"removed"},yi={type:"childadded",child:null},ba={type:"childremoved",child:null};class Et extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new N,t=new Qt,n=new kn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt($i,Rr,this.up):Sn.lookAt(Rr,$i,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),yi.child=e,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(su),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new N(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,En=new N,Aa=new N,yn=new N,Ti=new N,bi=new N,fl=new N,wa=new N,Ra=new N,Ca=new N,Pa=new mt,La=new mt,Da=new mt;class $t{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){rn.subVectors(r,t),En.subVectors(n,t),Aa.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(En),l=rn.dot(Aa),c=En.dot(En),h=En.dot(Aa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pa,s.x),a.addScaledVector(La,s.y),a.addScaledVector(Da,s.z),a}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),En.subVectors(e,t),rn.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ti.subVectors(r,n),bi.subVectors(s,n),wa.subVectors(e,n);const l=Ti.dot(wa),c=bi.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,r);const h=Ti.dot(Ra),d=bi.dot(Ra);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ti,a);Ca.subVectors(e,s);const p=Ti.dot(Ca),g=bi.dot(Ca);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return fl.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(fl,o);const u=1/(m+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(Ti,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=jh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=$c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Je.workingToColorSpace(Pt.copy(this),e),Math.round(Ye(Pt.r*255,0,255))*65536+Math.round(Ye(Pt.g*255,0,255))*256+Math.round(Ye(Pt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Bt){Je.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,r=Pt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Cr);const n=ma(Un.h,Cr.h,t),r=ma(Un.s,Cr.s,t),s=ma(Un.l,Cr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new xe;xe.NAMES=$c;let au=0;class mi extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=li,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=Jr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$r&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pr extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new N,Pr=new Be;let ou=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ou++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class Ro extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Co extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lu=0;const Zt=new ht,Ua=new Et,Ai=new N,Wt=new Wn,Ji=new Wn,wt=new N;class Yt extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Co:Ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Wt.min,Ji.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,Ji.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(Ji.min),Wt.expandByPoint(Ji.max))}Wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),wt.add(Ai)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new N,l[P]=new N;const c=new N,h=new N,d=new N,f=new Be,p=new Be,g=new Be,_=new N,m=new N;function u(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,S=T.length;P<S;++P){const M=T[P],R=M.start,I=M.count;for(let D=R,F=R+I;D<F;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new N,v=new N,C=new N,w=new N;function b(P){C.fromBufferAttribute(r,P),w.copy(C);const S=o[P];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,S=T.length;P<S;++P){const M=T[P],R=M.start,I=M.count;for(let D=R,F=R+I;D<F;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new qt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new ht,$n=new Ao,Lr=new Wi,ml=new N,Dr=new N,Ir=new N,Ur=new N,Na=new N,Nr=new N,gl=new N,Fr=new N;class dt extends Et{constructor(e=new Yt,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Na.fromBufferAttribute(d,e),a?Nr.addScaledVector(Na,h):Nr.addScaledVector(Na.sub(t),h))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Lr.containsPoint($n.origin)===!1&&($n.intersectSphere(Lr,ml)===null||$n.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(s).invert(),$n.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,C=y;v<C;v+=3){const w=o.getX(v),b=o.getX(v+1),P=o.getX(v+2);r=Or(this,u,e,n,c,h,d,w,b,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const T=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=Or(this,a,e,n,c,h,d,T,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,C=y;v<C;v+=3){const w=v,b=v+1,P=v+2;r=Or(this,u,e,n,c,h,d,w,b,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const T=m,y=m+1,v=m+2;r=Or(this,a,e,n,c,h,d,T,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cu(i,e,t,n,r,s,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Cn,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:i}}function Or(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Dr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Ur);const h=cu(i,e,t,n,Dr,Ir,Ur,gl);if(h){const d=new N;$t.getBarycoord(gl,Dr,Ir,Ur,d),r&&(h.uv=$t.getInterpolatedAttribute(r,o,l,c,d,new Be)),s&&(h.uv1=$t.getInterpolatedAttribute(s,o,l,c,d,new Be)),a&&(h.normal=$t.getInterpolatedAttribute(a,o,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};$t.getNormal(Dr,Ir,Ur,f.normal),h.face=f,h.barycoord=d}return h}class Xn extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(_,m,u,T,y,v,C,w,b,P,S){const M=v/b,R=C/P,I=v/2,D=C/2,F=w/2,H=b+1,G=P+1;let K=0,B=0;const X=new N;for(let Q=0;Q<G;Q++){const re=Q*R-D;for(let ce=0;ce<H;ce++){const Re=ce*M-I;X[_]=Re*T,X[m]=re*y,X[u]=F,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[u]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(ce/b),d.push(1-Q/P),K+=1}}for(let Q=0;Q<P;Q++)for(let re=0;re<b;re++){const ce=f+re+H*Q,Re=f+re+H*(Q+1),Ie=f+(re+1)+H*(Q+1),ye=f+(re+1)+H*Q;l.push(ce,Re,ye),l.push(Re,Ie,ye),B+=6}o.addGroup(p,B,S),p+=B,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function hu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Qc={clone:Hi,merge:Ut};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new N,_l=new Be,vl=new Be;class Xt extends Po{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,_l,vl),t.subVectors(vl,_l)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ri=1;class eh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(wi,Ri,e,t);r.layers=this.layers,this.add(r);const s=new Xt(wi,Ri,e,t);s.layers=this.layers,this.add(s);const a=new Xt(wi,Ri,e,t);a.layers=this.layers,this.add(a);const o=new Xt(wi,Ri,e,t);o.layers=this.layers,this.add(o);const l=new Xt(wi,Ri,e,t);l.layers=this.layers,this.add(l);const c=new Xt(wi,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lo extends Rt{constructor(e=[],t=hi,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:An});s.uniforms.tEquirect.value=t;const a=new dt(r,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=cn),new eh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ui extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fu={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ia{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ih extends Rt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=kt,h=kt,d,f){super(null,a,o,l,c,h,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new ht,xl=new ht,Br=[],Ml=new Wn,pu=new ht,Qi=new dt,er=new Wi;class qn extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,pu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ml.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ml)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),er.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ci),xl.multiplyMatrices(n,Ci),Qi.matrixWorld=xl,Qi.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const l=Br[a];l.instanceId=s,l.object=this,t.push(l)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ih(new Float32Array(r*this.count),r,this.count,$s,hn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fa=new N,mu=new N,gu=new Ve;class Tn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fa.subVectors(n,t).cross(mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gu.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Wi,_u=new Be(.5,.5),zr=new N;class ra{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],u=s[11],T=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-a,p-h,u-g,C-T).normalize(),r[1].setComponents(c+a,p+h,u+g,C+T).normalize(),r[2].setComponents(c+o,p+d,u+_,C+y).normalize(),r[3].setComponents(c-o,p-d,u-_,C-y).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,p-f,u-m,C-v).normalize();else if(r[4].setComponents(c-l,p-f,u-m,C-v).normalize(),t===un)r[5].setComponents(c+l,p+f,u+m,C+v).normalize();else if(t===hr)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=_u.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vu extends Rt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Do extends Rt{constructor(e,t,n=zn,r,s,a,o=kt,l=kt,c,h=zi,d=1){if(h!==zi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Io extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xi extends Yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let u=0;T(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(p,2));function T(){const v=new N,C=new N;let w=0;const b=(t-e)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,R=M*(t-e)+e;for(let I=0;I<=r;I++){const D=I/r,F=D*l+o,H=Math.sin(F),G=Math.cos(F);C.x=R*H,C.y=-M*n+m,C.z=R*G,d.push(C.x,C.y,C.z),v.set(H,b,G).normalize(),f.push(v.x,v.y,v.z),p.push(D,1-M),S.push(g++)}_.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const M=_[S][P],R=_[S+1][P],I=_[S+1][P+1],D=_[S][P+1];(e>0||S!==0)&&(h.push(M,R,D),w+=3),(t>0||S!==s-1)&&(h.push(R,I,D),w+=3)}c.addGroup(u,w,0),u+=w}function y(v){const C=g,w=new Be,b=new N;let P=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=r;I++){const F=I/r*l+o,H=Math.cos(F),G=Math.sin(F);b.x=S*G,b.y=m*M,b.z=S*H,d.push(b.x,b.y,b.z),f.push(0,M,0),w.x=H*.5+.5,w.y=G*.5*M+.5,p.push(w.x,w.y),g++}for(let I=0;I<r;I++){const D=C+I,F=R+I;v===!0?h.push(F,F+1,D):h.push(F+1,F,D),P+=3}c.addGroup(u,P,v===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends Xi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends Yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const y=new N,v=new N,C=new N;for(let w=0;w<t.length;w+=3)p(t[w+0],y),p(t[w+1],v),p(t[w+2],C),l(y,v,C,T)}function l(T,y,v,C){const w=C+1,b=[];for(let P=0;P<=w;P++){b[P]=[];const S=T.clone().lerp(v,P/w),M=y.clone().lerp(v,P/w),R=w-P;for(let I=0;I<=R;I++)I===0&&P===w?b[P][I]=S:b[P][I]=S.clone().lerp(M,I/R)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const M=Math.floor(S/2);S%2===0?(f(b[P][M+1]),f(b[P+1][M]),f(b[P][M])):(f(b[P][M+1]),f(b[P+1][M+1]),f(b[P+1][M]))}}function c(T){const y=new N;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(T),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const T=new N;for(let y=0;y<s.length;y+=3){T.x=s[y+0],T.y=s[y+1],T.z=s[y+2];const v=m(T)/2/Math.PI+.5,C=u(T)/Math.PI+.5;a.push(v,1-C)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const y=a[T+0],v=a[T+2],C=a[T+4],w=Math.max(y,v,C),b=Math.min(y,v,C);w>.9&&b<.1&&(y<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function f(T){s.push(T.x,T.y,T.z)}function p(T,y){const v=T*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const T=new N,y=new N,v=new N,C=new N,w=new Be,b=new Be,P=new Be;for(let S=0,M=0;S<s.length;S+=9,M+=6){T.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),C.copy(T).add(y).add(v).divideScalar(3);const R=m(C);_(w,M+0,T,R),_(b,M+2,y,R),_(P,M+4,v,R)}}function _(T,y,v,C){C<0&&T.x===1&&(a[y]=T.x-1),v.x===0&&v.z===0&&(a[y]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function u(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.vertices,e.indices,e.radius,e.details)}}class aa extends sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new aa(e.radius,e.detail)}}class en extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const T=u*f-a;for(let y=0;y<c;y++){const v=y*d-s;g.push(v,-T,0),_.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const y=T+c*u,v=T+c*(u+1),C=T+1+c*(u+1),w=T+1+c*u;p.push(y,v,w),p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}class gr extends Yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new N,f=new N,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const T=[],y=u/n;let v=0;u===0&&a===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const w=C/t;d.x=-e*Math.cos(r+w*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-y),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){const y=h[u][T+1],v=h[u][T],C=h[u+1][T],w=h[u+1][T+1];(u!==0||a>0)&&p.push(y,v,w),(u!==n-1||l<Math.PI)&&p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oa extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rh extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sh extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class oh extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new ht,Sl=new N,El=new N;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sl),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class No extends Po{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mu extends xu{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fo extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Mu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lh extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ch{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class so{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hh extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yl(i,e,t,n){const r=Su(n);switch(t){case So:return i*e;case $s:return i*e/r.components*r.byteLength;case Js:return i*e/r.components*r.byteLength;case yo:return i*e*2/r.components*r.byteLength;case Qs:return i*e*2/r.components*r.byteLength;case Eo:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case ea:return i*e*4/r.components*r.byteLength;case rr:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case us:case fs:return Math.max(i,16)*Math.max(e,8)/4;case hs:case ds:return Math.max(i,8)*Math.max(e,8)/2;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ys:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ps:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ls:case Ds:case Is:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Us:case Ns:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fs:case Os:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Su(i){switch(i){case dn:case _o:return{byteLength:1,components:1};case Oi:case vo:case Vi:return{byteLength:2,components:1};case Ks:case Zs:return{byteLength:2,components:4};case zn:case js:case hn:return{byteLength:4,components:1};case xo:case Mo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qs);function uh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Eu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:yu,alphahash_pars_fragment:Tu,alphamap_fragment:bu,alphamap_pars_fragment:Au,alphatest_fragment:wu,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Du,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Hu,color_fragment:Gu,color_pars_fragment:Vu,color_pars_vertex:Wu,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Ku,displacementmap_vertex:Zu,emissivemap_fragment:$u,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:ed,envmap_fragment:td,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:rd,envmap_physical_pars_fragment:md,envmap_vertex:sd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:ld,fog_pars_fragment:cd,gradientmap_pars_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:dd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:xd,lights_physical_fragment:Md,lights_physical_pars_fragment:Sd,lights_fragment_begin:Ed,lights_fragment_maps:yd,lights_fragment_end:Td,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Dd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:Bd,morphtarget_vertex:zd,normal_fragment_begin:kd,normal_fragment_maps:Hd,normal_pars_fragment:Gd,normal_pars_vertex:Vd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Kd,opaque_fragment:Zd,packing:$d,premultiplied_alpha_fragment:Jd,project_vertex:Qd,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:df,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:vf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:Ef,background_vert:yf,background_frag:Tf,backgroundCube_vert:bf,backgroundCube_frag:Af,cube_vert:wf,cube_frag:Rf,depth_vert:Cf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:Uf,linedashed_vert:Nf,linedashed_frag:Ff,meshbasic_vert:Of,meshbasic_frag:Bf,meshlambert_vert:zf,meshlambert_frag:kf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Vf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:jf,meshtoon_vert:Kf,meshtoon_frag:Zf,points_vert:$f,points_frag:Jf,shadow_vert:Qf,shadow_frag:ep,sprite_vert:tp,sprite_frag:np},fe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ln={basic:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ut([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ut([fe.lights,fe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ln.physical={uniforms:Ut([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const kr={r:0,b:0,g:0},Qn=new Qt,ip=new ht;function rp(i,e,t,n,r,s,a){const o=new xe(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?u(o,l):C&&C.isColor&&(u(C,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===dr)?(h===void 0&&(h=new dt(new Xn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Hi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qn.copy(v.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Qn)),h.material.toneMapped=Je.getTransfer(C.colorSpace)!==tt,(d!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new dt(new en(2,2),new fn({name:"BackgroundMaterial",uniforms:Hi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(C.colorSpace)!==tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(kr,Jc(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,v,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:_,addToRenderList:m,dispose:T}}function sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,R,I,D,F){let H=!1;const G=d(D,I,R);s!==G&&(s=G,c(s.object)),H=p(M,D,I,F),H&&g(M,D,I,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(M,R,I,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,R,I){const D=I.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let H=F[R.id];H===void 0&&(H={},F[R.id]=H);let G=H[D];return G===void 0&&(G=f(l()),H[D]=G),G}function f(M){const R=[],I=[],D=[];for(let F=0;F<t;F++)R[F]=0,I[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,R,I,D){const F=s.attributes,H=R.attributes;let G=0;const K=I.getAttributes();for(const B in K)if(K[B].location>=0){const Q=F[B];let re=H[B];if(re===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function g(M,R,I,D){const F={},H=R.attributes;let G=0;const K=I.getAttributes();for(const B in K)if(K[B].location>=0){let Q=H[B];Q===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),F[B]=re,G++}s.attributes=F,s.attributesNum=G,s.index=D}function _(){const M=s.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function m(M){u(M,0)}function u(M,R){const I=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;I[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),F[M]!==R&&(i.vertexAttribDivisor(M,R),F[M]=R)}function T(){const M=s.newAttributes,R=s.enabledAttributes;for(let I=0,D=R.length;I<D;I++)R[I]!==M[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function y(M,R,I,D,F,H,G){G===!0?i.vertexAttribIPointer(M,R,I,F,H):i.vertexAttribPointer(M,R,I,D,F,H)}function v(M,R,I,D){_();const F=D.attributes,H=I.getAttributes(),G=R.defaultAttributeValues;for(const K in H){const B=H[K];if(B.location>=0){let X=F[K];if(X===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const Q=X.normalized,re=X.itemSize,ce=e.get(X);if(ce===void 0)continue;const Re=ce.buffer,Ie=ce.type,ye=ce.bytesPerElement,Y=Ie===i.INT||Ie===i.UNSIGNED_INT||X.gpuType===js;if(X.isInterleavedBufferAttribute){const $=X.data,de=$.stride,Ae=X.offset;if($.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)u(B.location+Me,$.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<B.locationSize;Me++)m(B.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Me=0;Me<B.locationSize;Me++)y(B.location+Me,re/B.locationSize,Ie,Q,de*ye,(Ae+re/B.locationSize*Me)*ye,Y)}else{if(X.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)u(B.location+$,X.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let $=0;$<B.locationSize;$++)y(B.location+$,re/B.locationSize,Ie,Q,re*ye,re/B.locationSize*$*ye,Y)}}else if(G!==void 0){const Q=G[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(B.location,Q);break;case 3:i.vertexAttrib3fv(B.location,Q);break;case 4:i.vertexAttrib4fv(B.location,Q);break;default:i.vertexAttrib1fv(B.location,Q)}}}}T()}function C(){P();for(const M in n){const R=n[M];for(const I in R){const D=R[I];for(const F in D)h(D[F].object),delete D[F];delete R[I]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const I in R){const D=R[I];for(const F in D)h(D[F].object),delete D[F];delete R[I]}delete n[M.id]}function b(M){for(const R in n){const I=n[R];if(I[M.id]===void 0)continue;const D=I[M.id];for(const F in D)h(D[F].object),delete D[F];delete I[M.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function ap(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function op(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Jt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==dn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hn&&!P)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function lp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Tn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,y=T*4;let v=u.clippingState||null;l.value=v,v=h(g,f,y,p);for(let C=0;C!==y;++C)v[C]=t[C];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,v=p;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cp(i){let e=new WeakMap;function t(a,o){return o===as?a.mapping=hi:o===os&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===as||o===os)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new th(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ni=4,Tl=[.125,.215,.35,.446,.526,.582],si=20,Ba=new No,bl=new xe;let za=null,ka=0,Ha=0,Ga=!1;const ii=(1+Math.sqrt(5))/2,Pi=1/ii,Al=[new N(-ii,Pi,0),new N(ii,Pi,0),new N(-Pi,0,ii),new N(Pi,0,ii),new N(0,ii,-Pi),new N(0,ii,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],hp=new N;class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=hp}=s;za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,ka,Ha),this._renderer.xr.enabled=Ga,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vi,format:Jt,colorSpace:di,depthBuffer:!1},r=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(s)),this._blurMaterial=dp(s,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,r,s){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(bl),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new pr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new dt(new Xn,_);let u=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,u=!0):(_.color.copy(bl),u=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const C=this._cubeSize;Hr(r,v*C,y>2?C:0,C,C),d.setRenderTarget(r),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hi||e.mapping===ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Al[(r-s-1)%Al.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new dt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const u=[];let T=0;for(let b=0;b<si;++b){const P=b/_,S=Math.exp(-P*P/2);u.push(S),b===0?T+=S:b<m&&(T+=2*S)}for(let b=0;b<u.length;b++)u[b]=u[b]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[r],C=3*v*(r>y-Ni?r-y+Ni:0),w=4*(this._cubeSize-v);Hr(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(d,Ba)}}function up(i){const e=[],t=[],n=[];let r=i;const s=i-Ni+1+Tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ni?l=Tl[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,P=w>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(S,_*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];v.set(M,u*g*w)}const C=new Yt;C.setAttribute("position",new qt(T,_)),C.setAttribute("uv",new qt(y,m)),C.setAttribute("faceIndex",new qt(v,u)),e.push(C),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dp(i,e,t){const n=new Float32Array(si),r=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Rl(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Cl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===as||l===os,h=l===hi||l===ui;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ao(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ao(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mp(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,v=T.length;y<v;y+=3){const C=T[y+0],w=T[y+1],b=T[y+2];f.push(C,w,w,b,b,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){const C=y+0,w=y+1,b=y+2;f.push(C,w,w,b,b,C)}}else return;const m=new(qc(f)?Co:Ro)(f,1);m.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function gp(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let u=0;for(let T=0;T<g;T++)u+=p[T]*_[T];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _p(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vp(i,e,t){const n=new WeakMap,r=new mt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=o.attributes.position.count*v,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*w*4*d),P=new bo(b,C,w,d);P.type=hn,P.needsUpdate=!0;const S=v*4;for(let R=0;R<d;R++){const I=u[R],D=T[R],F=y[R],H=C*w*4*R;for(let G=0;G<I.count;G++){const K=G*S;g===!0&&(r.fromBufferAttribute(I,G),b[H+K+0]=r.x,b[H+K+1]=r.y,b[H+K+2]=r.z,b[H+K+3]=0),_===!0&&(r.fromBufferAttribute(D,G),b[H+K+4]=r.x,b[H+K+5]=r.y,b[H+K+6]=r.z,b[H+K+7]=0),m===!0&&(r.fromBufferAttribute(F,G),b[H+K+8]=r.x,b[H+K+9]=r.y,b[H+K+10]=r.z,b[H+K+11]=F.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Be(C,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function xp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const dh=new Rt,Pl=new Do(1,1),fh=new bo,ph=new Zc,mh=new Lo,Ll=[],Dl=[],Il=new Float32Array(16),Ul=new Float32Array(9),Nl=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ll[r];if(s===void 0&&(s=new Float32Array(r),Ll[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),At(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),At(t,n)}}function Ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),At(t,n)}}function wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=To,s=Pl):s=dh,t.setTexture2D(e||s,r)}function Fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ph,r)}function Op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mh,r)}function Bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fh,r)}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return Ep;case 35666:return yp;case 35674:return Tp;case 35675:return bp;case 35676:return Ap;case 5124:case 35670:return wp;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}function kp(i,e){i.uniform1fv(this.addr,e)}function Hp(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Gp(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Vp(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Wp(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xp(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qp(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yp(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function Kp(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function $p(i,e){i.uniform1uiv(this.addr,e)}function Jp(i,e){i.uniform2uiv(this.addr,e)}function Qp(i,e){i.uniform3uiv(this.addr,e)}function em(i,e){i.uniform4uiv(this.addr,e)}function tm(i,e,t){const n=this.cache,r=e.length,s=la(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||dh,s[a])}function nm(i,e,t){const n=this.cache,r=e.length,s=la(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ph,s[a])}function im(i,e,t){const n=this.cache,r=e.length,s=la(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mh,s[a])}function rm(i,e,t){const n=this.cache,r=e.length,s=la(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fh,s[a])}function sm(i){switch(i){case 5126:return kp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zp(t.type)}}class om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sm(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Fl(i,e){i.seq.push(e),i.map[e.id]=e}function cm(i,e,t){const n=i.name,r=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),a=Va.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fl(t,c===void 0?new am(o,i,e):new om(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new lm(o),Fl(t,d)),t=d}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ol(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hm=37297;let um=0;function dm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bl=new Ve;function fm(i){Je._getMatrix(Bl,Je.workingColorSpace,i);const e=`mat3( ${Bl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+dm(i.getShaderSource(e),o)}else return s}function pm(i,e){const t=fm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="Cineon";break;case mo:t="ACESFilmic";break;case Dc:t="AgX";break;case Ic:t="Neutral";break;case Lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new N;function gm(){Je.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function nr(i){return i!==""}function kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(Mm,Em)}const Sm=new Map;function Em(i,e){let t=qe[e];if(t===void 0){const n=Sm.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(ym,Tm)}function Tm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case ui:e="ENVMAP_TYPE_CUBE";break;case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ui&&(e="ENVMAP_MODE_REFRACTION"),e}function Rm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ys:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case wc:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bm(t),c=Am(t),h=wm(t),d=Rm(t),f=Cm(t),p=_m(t),g=vm(s),_=r.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),u.length>0&&(u+=`
`)):(m=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),u=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==wn?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,pm("linearToOutputTexel",t.outputColorSpace),gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=oo(a),a=kl(a,t),a=Hl(a,t),o=oo(o),o=kl(o,t),o=Hl(o,t),a=Gl(a),o=Gl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=T+m+a,v=T+u+o,C=Ol(r,r.VERTEX_SHADER,y),w=Ol(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(R){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(C)||"",F=r.getShaderInfoLog(w)||"",H=I.trim(),G=D.trim(),K=F.trim();let B=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,w);else{const Q=zl(r,C,"vertex"),re=zl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Q+`
`+re)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||K==="")&&(X=!1);X&&(R.diagnostics={runnable:B,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:u}})}r.deleteShader(C),r.deleteShader(w),P=new jr(r,_),S=xm(r,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,hm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Lm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Im(e),t.set(e,n)),n}}class Im{constructor(e){this.id=Lm++,this.code=e,this.usedTimes=0}}function Um(i,e,t,n,r,s,a){const o=new wo,l=new Dm,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,I,D){const F=I.fog,H=D.geometry,G=S.isMeshStandardMaterial?I.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),B=K&&K.mapping===dr?K.image.height:null,X=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=Q!==void 0?Q.length:0;let ce=0;H.morphAttributes.position!==void 0&&(ce=1),H.morphAttributes.normal!==void 0&&(ce=2),H.morphAttributes.color!==void 0&&(ce=3);let Re,Ie,ye,Y;if(X){const et=ln[X];Re=et.vertexShader,Ie=et.fragmentShader}else Re=S.vertexShader,Ie=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ae=D.isInstancedMesh===!0,Me=D.isBatchedMesh===!0,ke=!!S.map,ut=!!S.matcap,L=!!K,k=!!S.aoMap,W=!!S.lightMap,te=!!S.bumpMap,ne=!!S.normalMap,Ne=!!S.displacementMap,_e=!!S.emissiveMap,me=!!S.metalnessMap,rt=!!S.roughnessMap,_t=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,V=S.iridescence>0,J=S.sheen>0,ie=S.transmission>0,Z=_t&&!!S.anisotropyMap,Le=A&&!!S.clearcoatMap,he=A&&!!S.clearcoatNormalMap,we=A&&!!S.clearcoatRoughnessMap,Ce=V&&!!S.iridescenceMap,oe=V&&!!S.iridescenceThicknessMap,ve=J&&!!S.sheenColorMap,Oe=J&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,pe=!!S.specularColorMap,We=!!S.specularIntensityMap,U=ie&&!!S.transmissionMap,le=ie&&!!S.thicknessMap,ue=!!S.gradientMap,Ee=!!S.alphaMap,se=S.alphaTest>0,ee=!!S.alphaHash,be=!!S.extensions;let He=wn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(He=i.toneMapping);const lt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:Re,fragmentShader:Ie,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,batchingColor:Me&&D._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&D.instanceColor!==null,instancingMorph:Ae&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:ut,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:W,bumpMap:te,normalMap:ne,displacementMap:f&&Ne,emissiveMap:_e,normalMapObjectSpace:ne&&S.normalMapType===Oc,normalMapTangentSpace:ne&&S.normalMapType===ta,metalnessMap:me,roughnessMap:rt,anisotropy:_t,anisotropyMap:Z,clearcoat:A,clearcoatMap:Le,clearcoatNormalMap:he,clearcoatRoughnessMap:we,dispersion:x,iridescence:V,iridescenceMap:Ce,iridescenceThicknessMap:oe,sheen:J,sheenColorMap:ve,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:pe,specularIntensityMap:We,transmission:ie,transmissionMap:U,thicknessMap:le,gradientMap:ue,opaque:S.transparent===!1&&S.blending===li&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:se,alphaHash:ee,combine:S.combine,mapUv:ke&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:W&&_(S.lightMap.channel),bumpMapUv:te&&_(S.bumpMap.channel),normalMapUv:ne&&_(S.normalMap.channel),displacementMapUv:Ne&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:me&&_(S.metalnessMap.channel),roughnessMapUv:rt&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:Le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:We&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:Ee&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||_t),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(ke||Ee),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zt,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let R;if(M){const I=ln[M];R=Qc.clone(I.uniforms)}else R=S.uniforms;return R}function C(S,M){let R;for(let I=0,D=h.length;I<D;I++){const F=h[I];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Pm(i,M,S,s),h.push(R)),R}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:P}}function Nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,p,g,_,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function o(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function l(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Fm),n.length>1&&n.sort(f||Wl),r.length>1&&r.sort(f||Wl)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Xl,i.set(n,[a])):r>=s.length?(a=new Xl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new xe};break;case"SpotLight":t={position:new N,direction:new N,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let km=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i){const e=new Bm,t=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new ht,a=new ht;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,T=0,y=0,v=0,C=0,w=0,b=0;c.sort(Hm);for(let S=0,M=c.length;S<M;S++){const R=c[S],I=R.color,D=R.intensity,F=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*D,d+=I.g*D,f+=I.b*D;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],D);b++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,B=t.get(R);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(D),G.distance=F,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const K=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,K.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=H,v++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(I).multiplyScalar(D),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const K=R.shadow,B=t.get(R);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(D),G.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[u]=G,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==T||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=T,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=b,n.version=km++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const y=c[u];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ql(i){const e=new Gm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ql(i),e.set(r,[o])):s>=a.length?(o=new ql(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(i,e,t){let n=new ra;const r=new Be,s=new Be,a=new mt,o=new sh({depthPacking:Fc}),l=new ah,c={},h=t.maxTextureSize,d={[Cn]:Dt,[Dt]:Cn,[zt]:zt},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let u=this.type;this.render=function(w,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(An),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=u!==gn&&this.type===gn,F=u===gn&&this.type!==gn;for(let H=0,G=w.length;H<G;H++){const K=w[H],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const X=B.getFrameExtents();if(r.multiply(X),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,B.mapSize.y=s.y)),B.map===null||D===!0||F===!0){const re=this.type!==gn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new Hn(r.x,r.y,re),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Q=B.getViewportCount();for(let re=0;re<Q;re++){const ce=B.getViewport(re);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a),B.updateMatrices(K,re),n=B.getFrustum(),v(b,P,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===gn&&T(B,P),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function T(w,b){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,P,p,_,null)}function y(w,b,P,S){let M=null;const R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=M.uuid,D=b.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let H=F[D];H===void 0&&(H=M.clone(),F[D]=H,b.addEventListener("dispose",C)),M=H}if(M.visible=b.visible,M.wireframe=b.wireframe,S===gn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=P}return M}function v(w,b,P,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=e.update(w),F=w.material;if(Array.isArray(F)){const H=D.groups;for(let G=0,K=H.length;G<K;G++){const B=H[G],X=F[B.materialIndex];if(X&&X.visible){const Q=y(w,X,S,M);w.onBeforeShadow(i,w,b,P,D,Q,B),i.renderBufferDirect(P,null,D,Q,w,B),w.onAfterShadow(i,w,b,P,D,Q,B)}}}else if(F.visible){const H=y(w,F,S,M);w.onBeforeShadow(i,w,b,P,D,H,null),i.renderBufferDirect(P,null,D,H,w,null),w.onAfterShadow(i,w,b,P,D,H,null)}}const I=w.children;for(let D=0,F=I.length;D<F;D++)v(I[D],b,P,S,M)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ym={[Qr]:es,[ts]:rs,[ns]:ss,[ci]:is,[es]:Qr,[rs]:ts,[ss]:ns,[is]:ci};function jm(i,e){function t(){let U=!1;const le=new mt;let ue=null;const Ee=new mt(0,0,0,0);return{setMask:function(se){ue!==se&&!U&&(i.colorMask(se,se,se,se),ue=se)},setLocked:function(se){U=se},setClear:function(se,ee,be,He,lt){lt===!0&&(se*=He,ee*=He,be*=He),le.set(se,ee,be,He),Ee.equals(le)===!1&&(i.clearColor(se,ee,be,He),Ee.copy(le))},reset:function(){U=!1,ue=null,Ee.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,ue=null,Ee=null,se=null;return{setReversed:function(ee){if(le!==ee){const be=e.get("EXT_clip_control");ee?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const He=se;se=null,this.setClear(He)}},getReversed:function(){return le},setTest:function(ee){ee?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!U&&(i.depthMask(ee),ue=ee)},setFunc:function(ee){if(le&&(ee=Ym[ee]),Ee!==ee){switch(ee){case Qr:i.depthFunc(i.NEVER);break;case es:i.depthFunc(i.ALWAYS);break;case ts:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case ns:i.depthFunc(i.EQUAL);break;case is:i.depthFunc(i.GEQUAL);break;case rs:i.depthFunc(i.GREATER);break;case ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ee}},setLocked:function(ee){U=ee},setClear:function(ee){se!==ee&&(le&&(ee=1-ee),i.clearDepth(ee),se=ee)},reset:function(){U=!1,ue=null,Ee=null,se=null,le=!1}}}function r(){let U=!1,le=null,ue=null,Ee=null,se=null,ee=null,be=null,He=null,lt=null;return{setTest:function(et){U||(et?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(et){le!==et&&!U&&(i.stencilMask(et),le=et)},setFunc:function(et,vn,mn){(ue!==et||Ee!==vn||se!==mn)&&(i.stencilFunc(et,vn,mn),ue=et,Ee=vn,se=mn)},setOp:function(et,vn,mn){(ee!==et||be!==vn||He!==mn)&&(i.stencilOp(et,vn,mn),ee=et,be=vn,He=mn)},setLocked:function(et){U=et},setClear:function(et){lt!==et&&(i.clearStencil(et),lt=et)},reset:function(){U=!1,le=null,ue=null,Ee=null,se=null,ee=null,be=null,He=null,lt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,T=null,y=null,v=null,C=null,w=null,b=new xe(0,0,0),P=0,S=!1,M=null,R=null,I=null,D=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=K>=2);let X=null,Q={};const re=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Re=new mt().fromArray(re),Ie=new mt().fromArray(ce);function ye(U,le,ue,Ee){const se=new Uint8Array(4),ee=i.createTexture();i.bindTexture(U,ee),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ue;be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(le+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ee}const Y={};Y[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ci),te(!1),ne(Za),$(i.CULL_FACE),k(An);function $(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function de(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ae(U,le){return d[U]!==le?(i.bindFramebuffer(U,le),d[U]=le,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Me(U,le){let ue=p,Ee=!1;if(U){ue=f.get(le),ue===void 0&&(ue=[],f.set(le,ue));const se=U.textures;if(ue.length!==se.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,be=se.length;ee<be;ee++)ue[ee]=i.COLOR_ATTACHMENT0+ee;ue.length=se.length,Ee=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ue)}function ke(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ut={[Fn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};ut[uc]=i.MIN,ut[dc]=i.MAX;const L={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[$r]:i.SRC_ALPHA,[Sc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[bc]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,le,ue,Ee,se,ee,be,He,lt,et){if(U===An){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),U!==lc){if(U!==m||et!==S){if((u!==Fn||v!==Fn)&&(i.blendEquation(i.FUNC_ADD),u=Fn,v=Fn),et)switch(U){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,y=null,C=null,w=null,b.set(0,0,0),P=0,m=U,S=et}return}se=se||le,ee=ee||ue,be=be||Ee,(le!==u||se!==v)&&(i.blendEquationSeparate(ut[le],ut[se]),u=le,v=se),(ue!==T||Ee!==y||ee!==C||be!==w)&&(i.blendFuncSeparate(L[ue],L[Ee],L[ee],L[be]),T=ue,y=Ee,C=ee,w=be),(He.equals(b)===!1||lt!==P)&&(i.blendColor(He.r,He.g,He.b,lt),b.copy(He),P=lt),m=U,S=!1}function W(U,le){U.side===zt?de(i.CULL_FACE):$(i.CULL_FACE);let ue=U.side===Dt;le&&(ue=!ue),te(ue),U.blending===li&&U.transparent===!1?k(An):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ee=U.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function ne(U){U!==sc?($(i.CULL_FACE),U!==R&&(U===Za?i.cullFace(i.BACK):U===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),R=U}function Ne(U){U!==I&&(G&&i.lineWidth(U),I=U)}function _e(U,le,ue){U?($(i.POLYGON_OFFSET_FILL),(D!==le||F!==ue)&&(i.polygonOffset(le,ue),D=le,F=ue)):de(i.POLYGON_OFFSET_FILL)}function me(U){U?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function rt(U){U===void 0&&(U=i.TEXTURE0+H-1),X!==U&&(i.activeTexture(U),X=U)}function _t(U,le,ue){ue===void 0&&(X===null?ue=i.TEXTURE0+H-1:ue=X);let Ee=Q[ue];Ee===void 0&&(Ee={type:void 0,texture:void 0},Q[ue]=Ee),(Ee.type!==U||Ee.texture!==le)&&(X!==ue&&(i.activeTexture(ue),X=ue),i.bindTexture(U,le||Y[U]),Ee.type=U,Ee.texture=le)}function A(){const U=Q[X];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){Re.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Re.copy(U))}function Oe(U){Ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Pe(U,le){let ue=c.get(le);ue===void 0&&(ue=new WeakMap,c.set(le,ue));let Ee=ue.get(U);Ee===void 0&&(Ee=i.getUniformBlockIndex(le,U.name),ue.set(U,Ee))}function pe(U,le){const Ee=c.get(le).get(U);l.get(le)!==Ee&&(i.uniformBlockBinding(le,Ee,U.__bindingPointIndex),l.set(le,Ee))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,Q={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,T=null,y=null,v=null,C=null,w=null,b=new xe(0,0,0),P=0,S=!1,M=null,R=null,I=null,D=null,F=null,Re.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:de,bindFramebuffer:Ae,drawBuffers:Me,useProgram:ke,setBlending:k,setMaterial:W,setFlipSided:te,setCullFace:ne,setLineWidth:Ne,setPolygonOffset:_e,setScissorTest:me,activeTexture:rt,bindTexture:_t,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:V,texImage2D:Ce,texImage3D:oe,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:he,texStorage3D:we,texSubImage2D:J,texSubImage3D:ie,compressedTexSubImage2D:Z,compressedTexSubImage3D:Le,scissor:ve,viewport:Oe,reset:We}}function Km(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):Bs("canvas")}function _(A,x,V){let J=1;const ie=_t(A);if((ie.width>V||ie.height>V)&&(J=V/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*ie.width),Le=Math.floor(J*ie.height);d===void 0&&(d=g(Z,Le));const he=x?g(Z,Le):d;return he.width=Z,he.height=Le,he.getContext("2d").drawImage(A,0,0,Z,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Le+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,V,J,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=x;if(x===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),x===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const Le=ie?cr:Je.getTransfer(J);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Le===tt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,x){let V;return A?x===null||x===zn||x===Bi?V=i.DEPTH24_STENCIL8:x===hn?V=i.DEPTH32F_STENCIL8:x===Oi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===Bi?V=i.DEPTH_COMPONENT24:x===hn?V=i.DEPTH_COMPONENT32F:x===Oi&&(V=i.DEPTH_COMPONENT16),V}function C(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),M(x)}function P(A){const x=n.get(A);if(x.__webglInit===void 0)return;const V=A.source,J=f.get(V);if(J){const ie=J[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(A),Object.keys(J).length===0&&f.delete(V)}n.remove(A)}function S(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const V=A.source,J=f.get(V);delete J[x.__cacheKey],a.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ie=0;ie<x.__webglFramebuffer[J].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[J][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=A.textures;for(let J=0,ie=V.length;J<ie;J++){const Z=n.get(V[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(A)}let R=0;function I(){R=0}function D(){const A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function F(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function H(A,x){const V=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function G(A,x){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Y(V,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function K(A,x){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Y(V,A,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function B(A,x){const V=n.get(A);if(A.version>0&&V.__version!==A.version){$(V,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const X={[ls]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},Q={[kt]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},re={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[To]:i.LEQUAL,[kc]:i.EQUAL,[Vc]:i.GEQUAL,[Hc]:i.GREATER,[Gc]:i.NOTEQUAL};function ce(A,x){if(x.type===hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===Xr||x.magFilter===tr||x.magFilter===Bn||x.minFilter===cn||x.minFilter===Xr||x.minFilter===tr||x.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==tr&&x.minFilter!==Bn||x.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Re(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const J=x.source;let ie=f.get(J);ie===void 0&&(ie={},f.set(J,ie));const Z=F(x);if(Z!==A.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[Z].usedTimes++;const Le=ie[A.__cacheKey];Le!==void 0&&(ie[A.__cacheKey].usedTimes--,Le.usedTimes===0&&S(x)),A.__cacheKey=Z,A.__webglTexture=ie[Z].texture}return V}function Ie(A,x,V){return Math.floor(Math.floor(A/V)/x)}function ye(A,x,V,J){const Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,J,x.data);else{Z.sort((oe,ve)=>oe.start-ve.start);let Le=0;for(let oe=1;oe<Z.length;oe++){const ve=Z[Le],Oe=Z[oe],Pe=ve.start+ve.count,pe=Ie(Oe.start,x.width,4),We=Ie(ve.start,x.width,4);Oe.start<=Pe+1&&pe===We&&Ie(Oe.start+Oe.count-1,x.width,4)===pe?ve.count=Math.max(ve.count,Oe.start+Oe.count-ve.start):(++Le,Z[Le]=Oe)}Z.length=Le+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let oe=0,ve=Z.length;oe<ve;oe++){const Oe=Z[oe],Pe=Math.floor(Oe.start/4),pe=Math.ceil(Oe.count/4),We=Pe%x.width,U=Math.floor(Pe/x.width),le=pe,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,We,U,le,ue,V,J,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Y(A,x,V){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const ie=Re(A,x),Z=x.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+V);const Le=n.get(Z);if(Z.version!==Le.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);const he=Je.getPrimaries(Je.workingColorSpace),we=x.colorSpace===bn?null:Je.getPrimaries(x.colorSpace),Ce=x.colorSpace===bn||he===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let oe=_(x.image,!1,r.maxTextureSize);oe=rt(x,oe);const ve=s.convert(x.format,x.colorSpace),Oe=s.convert(x.type);let Pe=y(x.internalFormat,ve,Oe,x.colorSpace,x.isVideoTexture);ce(J,x);let pe;const We=x.mipmaps,U=x.isVideoTexture!==!0,le=Le.__version===void 0||ie===!0,ue=Z.dataReady,Ee=C(x,oe);if(x.isDepthTexture)Pe=v(x.format===ki,x.type),le&&(U?t.texStorage2D(i.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ve,Oe,null));else if(x.isDataTexture)if(We.length>0){U&&le&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,We[0].width,We[0].height);for(let se=0,ee=We.length;se<ee;se++)pe=We[se],U?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,ve,Oe,pe.data):t.texImage2D(i.TEXTURE_2D,se,Pe,pe.width,pe.height,0,ve,Oe,pe.data);x.generateMipmaps=!1}else U?(le&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,oe.width,oe.height),ue&&ye(x,oe,ve,Oe)):t.texImage2D(i.TEXTURE_2D,0,Pe,oe.width,oe.height,0,ve,Oe,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Pe,We[0].width,We[0].height,oe.depth);for(let se=0,ee=We.length;se<ee;se++)if(pe=We[se],x.format!==Jt)if(ve!==null)if(U){if(ue)if(x.layerUpdates.size>0){const be=yl(pe.width,pe.height,x.format,x.type);for(const He of x.layerUpdates){const lt=pe.data.subarray(He*be/pe.data.BYTES_PER_ELEMENT,(He+1)*be/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,He,pe.width,pe.height,1,ve,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,oe.depth,ve,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Pe,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,oe.depth,ve,Oe,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Pe,pe.width,pe.height,oe.depth,0,ve,Oe,pe.data)}else{U&&le&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,We[0].width,We[0].height);for(let se=0,ee=We.length;se<ee;se++)pe=We[se],x.format!==Jt?ve!==null?U?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Pe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,ve,Oe,pe.data):t.texImage2D(i.TEXTURE_2D,se,Pe,pe.width,pe.height,0,ve,Oe,pe.data)}else if(x.isDataArrayTexture)if(U){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Pe,oe.width,oe.height,oe.depth),ue)if(x.layerUpdates.size>0){const se=yl(oe.width,oe.height,x.format,x.type);for(const ee of x.layerUpdates){const be=oe.data.subarray(ee*se/oe.data.BYTES_PER_ELEMENT,(ee+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,ve,Oe,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(x.isData3DTexture)U?(le&&t.texStorage3D(i.TEXTURE_3D,Ee,Pe,oe.width,oe.height,oe.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Oe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,ve,Oe,oe.data);else if(x.isFramebufferTexture){if(le)if(U)t.texStorage2D(i.TEXTURE_2D,Ee,Pe,oe.width,oe.height);else{let se=oe.width,ee=oe.height;for(let be=0;be<Ee;be++)t.texImage2D(i.TEXTURE_2D,be,Pe,se,ee,0,ve,Oe,null),se>>=1,ee>>=1}}else if(We.length>0){if(U&&le){const se=_t(We[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Pe,se.width,se.height)}for(let se=0,ee=We.length;se<ee;se++)pe=We[se],U?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve,Oe,pe):t.texImage2D(i.TEXTURE_2D,se,Pe,ve,Oe,pe);x.generateMipmaps=!1}else if(U){if(le){const se=_t(oe);t.texStorage2D(i.TEXTURE_2D,Ee,Pe,se.width,se.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Oe,oe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ve,Oe,oe);m(x)&&u(J),Le.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,V){if(x.image.length!==6)return;const J=Re(A,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const Z=n.get(ie);if(ie.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+V);const Le=Je.getPrimaries(Je.workingColorSpace),he=x.colorSpace===bn?null:Je.getPrimaries(x.colorSpace),we=x.colorSpace===bn||Le===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!Ce&&!oe?ve[ee]=_(x.image[ee],!0,r.maxCubemapSize):ve[ee]=oe?x.image[ee].image:x.image[ee],ve[ee]=rt(x,ve[ee]);const Oe=ve[0],Pe=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),We=y(x.internalFormat,Pe,pe,x.colorSpace),U=x.isVideoTexture!==!0,le=Z.__version===void 0||J===!0,ue=ie.dataReady;let Ee=C(x,Oe);ce(i.TEXTURE_CUBE_MAP,x);let se;if(Ce){U&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,We,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){se=ve[ee].mipmaps;for(let be=0;be<se.length;be++){const He=se[be];x.format!==Jt?Pe!==null?U?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,He.width,He.height,Pe,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,He.width,He.height,Pe,pe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,We,He.width,He.height,0,Pe,pe,He.data)}}}else{if(se=x.mipmaps,U&&le){se.length>0&&Ee++;const ee=_t(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){U?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Pe,pe,ve[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,ve[ee].width,ve[ee].height,0,Pe,pe,ve[ee].data);for(let be=0;be<se.length;be++){const lt=se[be].image[ee].image;U?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,lt.width,lt.height,Pe,pe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,We,lt.width,lt.height,0,Pe,pe,lt.data)}}else{U?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,pe,ve[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Pe,pe,ve[ee]);for(let be=0;be<se.length;be++){const He=se[be];U?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Pe,pe,He.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,We,Pe,pe,He.image[ee])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),Z.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function de(A,x,V,J,ie,Z){const Le=s.convert(V.format,V.colorSpace),he=s.convert(V.type),we=y(V.internalFormat,Le,he,V.colorSpace),Ce=n.get(x),oe=n.get(V);if(oe.__renderTarget=x,!Ce.__hasExternalTextures){const ve=Math.max(1,x.width>>Z),Oe=Math.max(1,x.height>>Z);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,we,ve,Oe,x.depth,0,Le,he,null):t.texImage2D(ie,Z,we,ve,Oe,0,Le,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ie,oe.__webglTexture,0,Ne(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ie,oe.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const J=x.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Z=v(x.stencilBuffer,ie),Le=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ne(x);_e(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Z,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,A)}else{const J=x.textures;for(let ie=0;ie<J.length;ie++){const Z=J[ie],Le=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),we=y(Z.internalFormat,Le,he,Z.colorSpace),Ce=Ne(x);V&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,we,x.width,x.height):_e(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,we,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,we,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const ie=J.__webglTexture,Z=Ne(x);if(x.depthTexture.format===zi)_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===ki)_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ke(A){const x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=A.texture.mipmaps;J&&J.length>0?Me(x.__webglFramebuffer[0],A):Me(x.__webglFramebuffer,A)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),Ae(x.__webglDepthbuffer[J],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Z)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ae(x.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,x,V){const J=n.get(A);x!==void 0&&de(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ke(A)}function L(A){const x=A.texture,V=n.get(A),J=n.get(x);A.addEventListener("dispose",b);const ie=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let we=0;we<x.mipmaps.length;we++)V.__webglFramebuffer[he][we]=i.createFramebuffer()}else V.__webglFramebuffer[he]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)V.__webglFramebuffer[he]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Le)for(let he=0,we=ie.length;he<we;he++){const Ce=n.get(ie[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const we=ie[he];V.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ce=s.convert(we.format,we.colorSpace),oe=s.convert(we.type),ve=y(we.internalFormat,Ce,oe,we.colorSpace,A.isXRRenderTarget===!0),Oe=Ne(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,V.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ce(i.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)de(V.__webglFramebuffer[he][we],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,we);else de(V.__webglFramebuffer[he],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let he=0,we=ie.length;he<we;he++){const Ce=ie[he],oe=n.get(Ce);let ve=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),ce(ve,Ce),de(V.__webglFramebuffer,A,Ce,i.COLOR_ATTACHMENT0+he,ve,0),m(Ce)&&u(ve)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),ce(he,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)de(V.__webglFramebuffer[we],A,x,i.COLOR_ATTACHMENT0,he,we);else de(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,he,0);m(x)&&u(he),t.unbindTexture()}A.depthBuffer&&ke(A)}function k(A){const x=A.textures;for(let V=0,J=x.length;V<J;V++){const ie=x[V];if(m(ie)){const Z=T(A),Le=n.get(ie).__webglTexture;t.bindTexture(Z,Le),u(Z),t.unbindTexture()}}}const W=[],te=[];function ne(A){if(A.samples>0){if(_e(A)===!1){const x=A.textures,V=A.width,J=A.height;let ie=i.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(A),he=x.length>1;if(he)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const we=A.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const oe=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,ie,i.NEAREST),l===!0&&(W.length=0,te.length=0,W.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(W.push(Z),te.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const oe=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ne(A){return Math.min(r.maxSamples,A.samples)}function _e(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function rt(A,x){const V=A.colorSpace,J=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==di&&V!==bn&&(Je.getTransfer(V)===tt?(J!==Jt||ie!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=ut,this.setupRenderTarget=L,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function gh(i,e){function t(n,r=bn){let s;const a=Je.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Ks)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_o)return i.BYTE;if(n===vo)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===js)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===So)return i.ALPHA;if(n===Eo)return i.RGB;if(n===Jt)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===$s)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===yo)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===rr||n===sr||n===ar||n===or)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hs||n===us||n===ds||n===fs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===us)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ds)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ps||n===ms||n===gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ps||n===ms)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_s||n===vs||n===xs||n===Ms||n===Ss||n===Es||n===ys||n===Ts||n===bs||n===As||n===ws||n===Rs||n===Cs||n===Ps)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_s)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ms)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ss)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Es)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ys)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ts)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===As)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ws)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ps)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===Ds||n===Is)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ls)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ds)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Is)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Us||n===Ns||n===Fs||n===Os)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Us)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:Zm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends Vn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Jm,u={},T=t.getContextAttributes();let y=null,v=null;const C=[],w=[],b=new Be;let P=null;const S=new Xt;S.viewport=new mt;const M=new Xt;M.viewport=new mt;const R=[S,M],I=new lh;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=C[Y];return $===void 0&&($=new Yr,C[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=C[Y];return $===void 0&&($=new Yr,C[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=C[Y];return $===void 0&&($=new Yr,C[Y]=$),$.getHandSpace()};function H(Y){const $=w.indexOf(Y.inputSource);if($===-1)return;const de=C[$];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<C.length;Y++){const $=w[Y];$!==null&&(w[Y]=null,C[Y].disconnect($))}D=null,F=null,m.reset();for(const Y in u)delete u[Y];e.setRenderTarget(y),p=null,f=null,d=null,r=null,v=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ae=null,Me=null;T.depth&&(Me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?ki:zi,Ae=T.stencil?Bi:zn);const ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Hn(f.textureWidth,f.textureHeight,{format:Jt,type:dn,depthTexture:new Do(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let $=0;$<Y.removed.length;$++){const de=Y.removed[$],Ae=w.indexOf(de);Ae>=0&&(w[Ae]=null,C[Ae].disconnect(de))}for(let $=0;$<Y.added.length;$++){const de=Y.added[$];let Ae=w.indexOf(de);if(Ae===-1){for(let ke=0;ke<C.length;ke++)if(ke>=w.length){w.push(de),Ae=ke;break}else if(w[ke]===null){w[ke]=de,Ae=ke;break}if(Ae===-1)break}const Me=C[Ae];Me&&Me.connect(de)}}const B=new N,X=new N;function Q(Y,$,de){B.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const Ae=B.distanceTo(X),Me=$.projectionMatrix.elements,ke=de.projectionMatrix.elements,ut=Me[14]/(Me[10]-1),L=Me[14]/(Me[10]+1),k=(Me[9]+1)/Me[5],W=(Me[9]-1)/Me[5],te=(Me[8]-1)/Me[0],ne=(ke[8]+1)/ke[0],Ne=ut*te,_e=ut*ne,me=Ae/(-te+ne),rt=me*-te;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const _t=ut+me,A=L+me,x=Ne-rt,V=_e+(Ae-rt),J=k*L/A*_t,ie=W*L/A*_t;Y.projectionMatrix.makePerspective(x,V,J,ie,_t,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(de=m.depthFar)),I.near=M.near=S.near=$,I.far=M.far=S.far=de,(D!==I.near||F!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,F=I.far),I.layers.mask=Y.layers.mask|6,S.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ae=Y.parent,Me=I.cameras;re(I,Ae);for(let ke=0;ke<Me.length;ke++)re(Me[ke],Ae);Me.length===2?Q(I,S,M):I.projectionMatrix.copy(S.projectionMatrix),ce(Y,I,Ae)};function ce(Y,$,de){de===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return u[Y]};let Re=null;function Ie(Y,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ae=!1;de.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let L=0;L<de.length;L++){const k=de[L];let W=null;if(p!==null)W=p.getViewport(k);else{const ne=d.getViewSubImage(f,k);W=ne.viewport,L===0&&(e.setRenderTargetTextures(v,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(v))}let te=R[L];te===void 0&&(te=new Xt,te.layers.enable(L),te.viewport=new mt,R[L]=te),te.matrix.fromArray(k.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(k.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(W.x,W.y,W.width,W.height),L===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(te)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const L=d.getDepthInformation(de[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let L=0;L<de.length;L++){const k=de[L].camera;if(k){let W=u[k];W||(W=new Io,u[k]=W);const te=d.getCameraImage(k);W.sourceTexture=te}}}}for(let de=0;de<C.length;de++){const Ae=w[de],Me=C[de];Ae!==null&&Me!==void 0&&Me.update(Ae,$,c||a)}Re&&Re(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ye=new uh;ye.setAnimationLoop(Ie),this.setAnimationLoop=function(Y){Re=Y},this.dispose=function(){}}}const ei=new Qt,eg=new ht;function tg(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Jc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,T,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,T,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Dt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Dt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,ei.copy(v),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ng(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const v=y.program;n.uniformBlockBinding(T,v)}function c(T,y){let v=r[T.id];v===void 0&&(g(T),v=h(T),r[T.id]=v,T.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(T,C);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function h(T){const y=d();T.__bindingPointIndex=y;const v=i.createBuffer(),C=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=r[T.id],v=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=P.length;S<M;S++){const R=P[S];if(p(R,w,S,C)===!0){const I=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let H=0;H<D.length;H++){const G=D[H],K=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+F,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,v,C){const w=T.value,b=y+"_"+v;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const P=C[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const y=T.uniforms;let v=0;const C=16;for(let b=0,P=y.length;b<P;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,R=S.length;M<R;M++){const I=S[M],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,H=D.length;F<H;F++){const G=D[F],K=_(G),B=v%C,X=B%K.boundary,Q=B+X;v+=X,Q!==0&&C-Q<K.storage&&(v+=C-Q),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=K.storage}}}const w=v%C;return w>0&&(v+=C-w),T.__size=v,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class _h{constructor(e={}){const{canvas:t=Yc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Bt;let w=0,b=0,P=null,S=-1,M=null;const R=new mt,I=new mt;let D=null;const F=new xe(0);let H=0,G=t.width,K=t.height,B=1,X=null,Q=null;const re=new mt(0,0,G,K),ce=new mt(0,0,G,K);let Re=!1;const Ie=new ra;let ye=!1,Y=!1;const $=new ht,de=new N,Ae=new mt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ut(){return P===null?B:1}let L=n;function k(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qs}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const O="webgl2";if(L=k(O,E),L===null)throw k(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,te,ne,Ne,_e,me,rt,_t,A,x,V,J,ie,Z,Le,he,we,Ce,oe,ve,Oe,Pe,pe,We;function U(){W=new pp(L),W.init(),Pe=new gh(L,W),te=new op(L,W,e,Pe),ne=new jm(L,W),te.reversedDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),Ne=new _p(L),_e=new Nm,me=new Km(L,W,ne,_e,te,Pe,Ne),rt=new cp(v),_t=new fp(v),A=new Eu(L),pe=new sp(L,A),x=new mp(L,A,Ne,pe),V=new xp(L,x,A,Ne),oe=new vp(L,te,me),he=new lp(_e),J=new Um(v,rt,_t,W,te,pe,he),ie=new tg(v,_e),Z=new Om,Le=new Vm(W),Ce=new rp(v,rt,_t,ne,V,p,l),we=new qm(v,V,te),We=new ng(L,Ne,te,ne),ve=new ap(L,W,Ne),Oe=new gp(L,W,Ne),Ne.programs=J.programs,v.capabilities=te,v.extensions=W,v.properties=_e,v.renderLists=Z,v.shadowMap=we,v.state=ne,v.info=Ne}U();const le=new Qm(v,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,O,q=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=O,t.width=Math.floor(E*B),t.height=Math.floor(O*B),q===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(G*B,K*B).floor()},this.setDrawingBufferSize=function(E,O,q){G=E,K=O,B=q,t.width=Math.floor(E*q),t.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,O,q,j){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,O,q,j),ne.viewport(R.copy(re).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,O,q,j){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,O,q,j),ne.scissor(I.copy(ce).multiplyScalar(B).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){ne.setScissorTest(Re=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let j=0;if(E){let z=!1;if(P!==null){const ae=P.texture.format;z=ae===ea||ae===Qs||ae===Js}if(z){const ae=P.texture.type,ge=ae===dn||ae===zn||ae===Oi||ae===Bi||ae===Ks||ae===Zs,Te=Ce.getClearColor(),Se=Ce.getClearAlpha(),Fe=Te.r,ze=Te.g,De=Te.b;ge?(g[0]=Fe,g[1]=ze,g[2]=De,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Fe,_[1]=ze,_[2]=De,_[3]=Se,L.clearBufferiv(L.COLOR,0,_))}else j|=L.COLOR_BUFFER_BIT}O&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ce.dispose(),Z.dispose(),Le.dispose(),_e.dispose(),rt.dispose(),_t.dispose(),V.dispose(),pe.dispose(),We.dispose(),J.dispose(),le.dispose(),le.removeEventListener("sessionstart",mn),le.removeEventListener("sessionend",Zo),Yn.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Ne.autoReset,O=we.enabled,q=we.autoUpdate,j=we.needsUpdate,z=we.type;U(),Ne.autoReset=E,we.enabled=O,we.autoUpdate=q,we.needsUpdate=j,we.type=z}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const O=E.target;O.removeEventListener("dispose",ee),be(O)}function be(E){He(E),_e.remove(E)}function He(E){const O=_e.get(E).programs;O!==void 0&&(O.forEach(function(q){J.releaseProgram(q)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,j,z,ae){O===null&&(O=Me);const ge=z.isMesh&&z.matrixWorld.determinant()<0,Te=Gh(E,O,q,j,z);ne.setMaterial(j,ge);let Se=q.index,Fe=1;if(j.wireframe===!0){if(Se=x.getWireframeAttribute(q),Se===void 0)return;Fe=2}const ze=q.drawRange,De=q.attributes.position;let je=ze.start*Fe,nt=(ze.start+ze.count)*Fe;ae!==null&&(je=Math.max(je,ae.start*Fe),nt=Math.min(nt,(ae.start+ae.count)*Fe)),Se!==null?(je=Math.max(je,0),nt=Math.min(nt,Se.count)):De!=null&&(je=Math.max(je,0),nt=Math.min(nt,De.count));const gt=nt-je;if(gt<0||gt===1/0)return;pe.setup(z,j,Te,q,Se);let ct,st=ve;if(Se!==null&&(ct=A.get(Se),st=Oe,st.setIndex(ct)),z.isMesh)j.wireframe===!0?(ne.setLineWidth(j.wireframeLinewidth*ut()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(z.isLine){let Ue=j.linewidth;Ue===void 0&&(Ue=1),ne.setLineWidth(Ue*ut()),z.isLineSegments?st.setMode(L.LINES):z.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else z.isPoints?st.setMode(L.POINTS):z.isSprite&&st.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,ft=z._multiDrawCounts,Qe=z._multiDrawCount,Ht=Se?A.get(Se).bytesPerElement:1,gi=_e.get(j).currentProgram.getUniforms();for(let Gt=0;Gt<Qe;Gt++)gi.setValue(L,"_gl_DrawID",Gt),st.render(Ue[Gt]/Ht,ft[Gt])}else if(z.isInstancedMesh)st.renderInstances(je,gt,z.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ft=Math.min(q.instanceCount,Ue);st.renderInstances(je,gt,ft)}else st.render(je,gt)};function lt(E,O,q){E.transparent===!0&&E.side===zt&&E.forceSinglePass===!1?(E.side=Dt,E.needsUpdate=!0,Sr(E,O,q),E.side=Cn,E.needsUpdate=!0,Sr(E,O,q),E.side=zt):Sr(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),u=Le.get(q),u.init(O),y.push(u),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),E!==q&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const j=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Te=ae[ge];lt(Te,q,z),j.add(Te)}else lt(ae,q,z),j.add(ae)}),u=y.pop(),j},this.compileAsync=function(E,O,q=null){const j=this.compile(E,O,q);return new Promise(z=>{function ae(){if(j.forEach(function(ge){_e.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){z(E);return}setTimeout(ae,10)}W.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let et=null;function vn(E){et&&et(E)}function mn(){Yn.stop()}function Zo(){Yn.start()}const Yn=new uh;Yn.setAnimationLoop(vn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(E){et=E,le.setAnimationLoop(E),E===null?Yn.stop():Yn.start()},le.addEventListener("sessionstart",mn),le.addEventListener("sessionend",Zo),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,P),u=Le.get(E,y.length),u.init(O),y.push(u),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix($,un,O.reversedDepth),Y=this.localClippingEnabled,ye=he.init(this.clippingPlanes,Y),m=Z.get(E,T.length),m.init(),T.push(m),le.enabled===!0&&le.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&fa(ae,O,-1/0,v.sortObjects)}fa(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,Q),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&Ce.addToRenderList(m,E),this.info.render.frame++,ye===!0&&he.beginShadows();const q=u.state.shadowsArray;we.render(q,E,O),ye===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(u.setupLights(),O.isArrayCamera){const ae=O.cameras;if(z.length>0)for(let ge=0,Te=ae.length;ge<Te;ge++){const Se=ae[ge];Jo(j,z,E,Se)}ke&&Ce.render(E);for(let ge=0,Te=ae.length;ge<Te;ge++){const Se=ae[ge];$o(m,E,Se,Se.viewport)}}else z.length>0&&Jo(j,z,E,O),ke&&Ce.render(E),$o(m,E,O);P!==null&&b===0&&(me.updateMultisampleRenderTarget(P),me.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,O),pe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],ye===!0&&he.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function fa(E,O,q,j){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ie.intersectsSprite(E)){j&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const ge=V.update(E),Te=E.material;Te.visible&&m.push(E,ge,Te,q,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ie.intersectsObject(E))){const ge=V.update(E),Te=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ae.copy(ge.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Te)){const Se=ge.groups;for(let Fe=0,ze=Se.length;Fe<ze;Fe++){const De=Se[Fe],je=Te[De.materialIndex];je&&je.visible&&m.push(E,ge,je,q,Ae.z,De)}}else Te.visible&&m.push(E,ge,Te,q,Ae.z,null)}}const ae=E.children;for(let ge=0,Te=ae.length;ge<Te;ge++)fa(ae[ge],O,q,j)}function $o(E,O,q,j){const z=E.opaque,ae=E.transmissive,ge=E.transparent;u.setupLightsView(q),ye===!0&&he.setGlobalState(v.clippingPlanes,q),j&&ne.viewport(R.copy(j)),z.length>0&&Mr(z,O,q),ae.length>0&&Mr(ae,O,q),ge.length>0&&Mr(ge,O,q),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Jo(E,O,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Hn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Vi:dn,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=u.state.transmissionRenderTarget[j.id],ge=j.viewport||R;ae.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),Se=v.getActiveCubeFace(),Fe=v.getActiveMipmapLevel();v.setRenderTarget(ae),v.getClearColor(F),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),ke&&Ce.render(q);const ze=v.toneMapping;v.toneMapping=wn;const De=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),ye===!0&&he.setGlobalState(v.clippingPlanes,j),Mr(E,q,j),me.updateMultisampleRenderTarget(ae),me.updateRenderTargetMipmap(ae),W.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let nt=0,gt=O.length;nt<gt;nt++){const ct=O[nt],st=ct.object,Ue=ct.geometry,ft=ct.material,Qe=ct.group;if(ft.side===zt&&st.layers.test(j.layers)){const Ht=ft.side;ft.side=Dt,ft.needsUpdate=!0,Qo(st,q,j,Ue,ft,Qe),ft.side=Ht,ft.needsUpdate=!0,je=!0}}je===!0&&(me.updateMultisampleRenderTarget(ae),me.updateRenderTargetMipmap(ae))}v.setRenderTarget(Te,Se,Fe),v.setClearColor(F,H),De!==void 0&&(j.viewport=De),v.toneMapping=ze}function Mr(E,O,q){const j=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ae=E.length;z<ae;z++){const ge=E[z],Te=ge.object,Se=ge.geometry,Fe=ge.group;let ze=ge.material;ze.allowOverride===!0&&j!==null&&(ze=j),Te.layers.test(q.layers)&&Qo(Te,O,q,Se,ze,Fe)}}function Qo(E,O,q,j,z,ae){E.onBeforeRender(v,O,q,j,z,ae),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,O,q,j,E,ae),z.transparent===!0&&z.side===zt&&z.forceSinglePass===!1?(z.side=Dt,z.needsUpdate=!0,v.renderBufferDirect(q,O,j,z,E,ae),z.side=Cn,z.needsUpdate=!0,v.renderBufferDirect(q,O,j,z,E,ae),z.side=zt):v.renderBufferDirect(q,O,j,z,E,ae),E.onAfterRender(v,O,q,j,z,ae)}function Sr(E,O,q){O.isScene!==!0&&(O=Me);const j=_e.get(E),z=u.state.lights,ae=u.state.shadowsArray,ge=z.state.version,Te=J.getParameters(E,z.state,ae,O,q),Se=J.getProgramCacheKey(Te);let Fe=j.programs;j.environment=E.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(E.isMeshStandardMaterial?_t:rt).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ee),Fe=new Map,j.programs=Fe);let ze=Fe.get(Se);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===ge)return tl(E,Te),ze}else Te.uniforms=J.getUniforms(E),E.onBeforeCompile(Te,v),ze=J.acquireProgram(Te,Se),Fe.set(Se,ze),j.uniforms=Te.uniforms;const De=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=he.uniform),tl(E,Te),j.needsLights=Wh(E),j.lightsStateVersion=ge,j.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function el(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=jr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function tl(E,O){const q=_e.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Gh(E,O,q,j,z){O.isScene!==!0&&(O=Me),me.resetTextureUnits();const ae=O.fog,ge=j.isMeshStandardMaterial?O.environment:null,Te=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:di,Se=(j.isMeshStandardMaterial?_t:rt).get(j.envMap||ge),Fe=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,nt=!!q.morphAttributes.color;let gt=wn;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=v.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=ct!==void 0?ct.length:0,Ue=_e.get(j),ft=u.state.lights;if(ye===!0&&(Y===!0||E!==M)){const It=E===M&&j.id===S;he.setState(j,E,It)}let Qe=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ft.state.version||Ue.outputColorSpace!==Te||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==Se||j.fog===!0&&Ue.fog!==ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==ze||Ue.morphTargets!==De||Ue.morphNormals!==je||Ue.morphColors!==nt||Ue.toneMapping!==gt||Ue.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,Ue.__version=j.version);let Ht=Ue.currentProgram;Qe===!0&&(Ht=Sr(j,O,z));let gi=!1,Gt=!1,Yi=!1;const pt=Ht.getUniforms(),jt=Ue.uniforms;if(ne.useProgram(Ht.program)&&(gi=!0,Gt=!0,Yi=!0),j.id!==S&&(S=j.id,Gt=!0),gi||M!==E){ne.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",E.projectionMatrix),pt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Nt=pt.map.cameraPosition;Nt!==void 0&&Nt.setValue(L,de.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Gt=!0,Yi=!0)}if(z.isSkinnedMesh){pt.setOptional(L,z,"bindMatrix"),pt.setOptional(L,z,"bindMatrixInverse");const It=z.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(L,"boneTexture",It.boneTexture,me))}z.isBatchedMesh&&(pt.setOptional(L,z,"batchingTexture"),pt.setValue(L,"batchingTexture",z._matricesTexture,me),pt.setOptional(L,z,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",z._indirectTexture,me),pt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",z._colorsTexture,me));const Kt=q.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&oe.update(z,q,Ht),(Gt||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,pt.setValue(L,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(jt.envMap.value=Se,jt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Gt&&(pt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Vh(jt,Yi),ae&&j.fog===!0&&ie.refreshFogUniforms(jt,ae),ie.refreshMaterialUniforms(jt,j,B,K,u.state.transmissionRenderTarget[E.id]),jr.upload(L,el(Ue),jt,me)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(jr.upload(L,el(Ue),jt,me),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(L,"center",z.center),pt.setValue(L,"modelViewMatrix",z.modelViewMatrix),pt.setValue(L,"normalMatrix",z.normalMatrix),pt.setValue(L,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const It=j.uniformsGroups;for(let Nt=0,pa=It.length;Nt<pa;Nt++){const jn=It[Nt];We.update(jn,Ht),We.bind(jn,Ht)}}return Ht}function Vh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Wh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,q){const j=_e.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_e.get(E.texture).__webglTexture=O,_e.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const q=_e.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Xh=L.createFramebuffer();this.setRenderTarget=function(E,O=0,q=0){P=E,w=O,b=q;let j=!0,z=null,ae=!1,ge=!1;if(E){const Se=_e.get(E);if(Se.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Se.__webglFramebuffer===void 0)me.setupRenderTarget(E);else if(Se.__hasExternalTextures)me.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const De=E.depthTexture;if(Se.__boundDepthTexture!==De){if(De!==null&&_e.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ze=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?z=ze[O][q]:z=ze[O],ae=!0):E.samples>0&&me.useMultisampledRTT(E)===!1?z=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[q]:z=ze,R.copy(E.viewport),I.copy(E.scissor),D=E.scissorTest}else R.copy(re).multiplyScalar(B).floor(),I.copy(ce).multiplyScalar(B).floor(),D=Re;if(q!==0&&(z=Xh),ne.bindFramebuffer(L.FRAMEBUFFER,z)&&j&&ne.drawBuffers(E,z),ne.viewport(R),ne.scissor(I),ne.setScissorTest(D),ae){const Se=_e.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,q)}else if(ge){const Se=O;for(let Fe=0;Fe<E.textures.length;Fe++){const ze=_e.get(E.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,q,Se)}}else if(E!==null&&q!==0){const Se=_e.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,O,q,j,z,ae,ge,Te=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){ne.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Fe=E.textures[Te],ze=Fe.format,De=Fe.type;if(!te.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-j&&q>=0&&q<=E.height-z&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(O,q,j,z,Pe.convert(ze),Pe.convert(De),ae))}finally{const Fe=P!==null?_e.get(P).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,j,z,ae,ge,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se)if(O>=0&&O<=E.width-j&&q>=0&&q<=E.height-z){ne.bindFramebuffer(L.FRAMEBUFFER,Se);const Fe=E.textures[Te],ze=Fe.format,De=Fe.type;if(!te.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(O,q,j,z,Pe.convert(ze),Pe.convert(De),0);const nt=P!==null?_e.get(P).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,nt);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Kh(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(je),L.deleteSync(gt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){const j=Math.pow(2,-q),z=Math.floor(E.image.width*j),ae=Math.floor(E.image.height*j),ge=O!==null?O.x:0,Te=O!==null?O.y:0;me.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,ge,Te,z,ae),ne.unbindTexture()};const qh=L.createFramebuffer(),Yh=L.createFramebuffer();this.copyTextureToTexture=function(E,O,q=null,j=null,z=0,ae=null){ae===null&&(z!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=z,z=0):ae=0);let ge,Te,Se,Fe,ze,De,je,nt,gt;const ct=E.isCompressedTexture?E.mipmaps[ae]:E.image;if(q!==null)ge=q.max.x-q.min.x,Te=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,ze=q.min.y,De=q.isBox3?q.min.z:0;else{const Kt=Math.pow(2,-z);ge=Math.floor(ct.width*Kt),Te=Math.floor(ct.height*Kt),E.isDataArrayTexture?Se=ct.depth:E.isData3DTexture?Se=Math.floor(ct.depth*Kt):Se=1,Fe=0,ze=0,De=0}j!==null?(je=j.x,nt=j.y,gt=j.z):(je=0,nt=0,gt=0);const st=Pe.convert(O.format),Ue=Pe.convert(O.type);let ft;O.isData3DTexture?(me.setTexture3D(O,0),ft=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(me.setTexture2DArray(O,0),ft=L.TEXTURE_2D_ARRAY):(me.setTexture2D(O,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=L.getParameter(L.UNPACK_ROW_LENGTH),Ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),Yi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const pt=E.isDataArrayTexture||E.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Kt=_e.get(E),It=_e.get(O),Nt=_e.get(Kt.__renderTarget),pa=_e.get(It.__renderTarget);ne.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let jn=0;jn<Se;jn++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,z,De+jn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(O).__webglTexture,ae,gt+jn)),L.blitFramebuffer(Fe,ze,ge,Te,je,nt,ge,Te,L.DEPTH_BUFFER_BIT,L.NEAREST);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||_e.has(E)){const Kt=_e.get(E),It=_e.get(O);ne.bindFramebuffer(L.READ_FRAMEBUFFER,qh),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,Yh);for(let Nt=0;Nt<Se;Nt++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,z,De+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,z),jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,ae,gt+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,ae),z!==0?L.blitFramebuffer(Fe,ze,ge,Te,je,nt,ge,Te,L.COLOR_BUFFER_BIT,L.NEAREST):jt?L.copyTexSubImage3D(ft,ae,je,nt,gt+Nt,Fe,ze,ge,Te):L.copyTexSubImage2D(ft,ae,je,nt,Fe,ze,ge,Te);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(ft,ae,je,nt,gt,ge,Te,Se,st,Ue,ct.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,ae,je,nt,gt,ge,Te,Se,st,ct.data):L.texSubImage3D(ft,ae,je,nt,gt,ge,Te,Se,st,Ue,ct):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,je,nt,ge,Te,st,Ue,ct.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,je,nt,ct.width,ct.height,st,ct.data):L.texSubImage2D(L.TEXTURE_2D,ae,je,nt,ge,Te,st,Ue,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yi),ae===0&&O.generateMipmaps&&L.generateMipmap(ft),ne.unbindTexture()},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),ne.unbindTexture()},this.resetState=function(){w=0,b=0,P=null,ne.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Bo=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:mo,AddEquation:Fn,AddOperation:wc,AdditiveBlending:$a,AgXToneMapping:Dc,AlphaFormat:So,AlwaysCompare:Wc,AlwaysDepth:es,AlwaysStencilFunc:eo,ArrayCamera:lh,BackSide:Dt,BasicDepthPacking:Nc,Box3:Wn,BoxGeometry:Xn,BufferAttribute:qt,BufferGeometry:Yt,ByteType:_o,Camera:Po,CanvasTexture:vu,CineonToneMapping:Pc,ClampToEdgeWrapping:On,Clock:ch,Color:xe,ColorManagement:Je,ConeGeometry:mr,ConstantAlphaFactor:Tc,ConstantColorFactor:Ec,Controls:hh,CubeCamera:eh,CubeReflectionMapping:hi,CubeRefractionMapping:ui,CubeTexture:Lo,CubeUVReflectionMapping:dr,CullFaceBack:Za,CullFaceFront:ac,CullFaceNone:sc,CustomBlending:lc,CustomToneMapping:Lc,CylinderGeometry:Xi,Data3DTexture:Zc,DataArrayTexture:bo,DataTexture:ih,DepthFormat:zi,DepthStencilFormat:ki,DepthTexture:Do,DirectionalLight:Fo,DoubleSide:zt,DstAlphaFactor:_c,DstColorFactor:xc,EqualCompare:kc,EqualDepth:ns,EquirectangularReflectionMapping:as,EquirectangularRefractionMapping:os,Euler:Qt,EventDispatcher:Vn,ExternalTexture:Io,Float32BufferAttribute:yt,FloatType:hn,FogExp2:ia,FrontSide:Cn,Frustum:ra,GLSL3:no,GreaterCompare:Hc,GreaterDepth:rs,GreaterEqualCompare:Vc,GreaterEqualDepth:is,Group:Ui,HalfFloatType:Vi,HemisphereLight:oh,IcosahedronGeometry:aa,ImageUtils:jc,InstancedBufferAttribute:ro,InstancedMesh:qn,IntType:js,KeepStencilOp:ni,Layers:wo,LessCompare:zc,LessDepth:ts,LessEqualCompare:To,LessEqualDepth:ci,Light:Uo,LinearFilter:cn,LinearMipmapLinearFilter:Bn,LinearMipmapNearestFilter:Xr,LinearSRGBColorSpace:di,LinearToneMapping:Rc,LinearTransfer:cr,MOUSE:oi,Material:mi,MathUtils:Xc,Matrix3:Ve,Matrix4:ht,MaxEquation:dc,Mesh:dt,MeshBasicMaterial:pr,MeshDepthMaterial:sh,MeshDistanceMaterial:ah,MeshLambertMaterial:rh,MeshStandardMaterial:oa,MinEquation:uc,MirroredRepeatWrapping:cs,MixOperation:Ac,MultiplyBlending:Qa,MultiplyOperation:Ys,NearestFilter:kt,NearestMipmapLinearFilter:tr,NearestMipmapNearestFilter:Uc,NeutralToneMapping:Ic,NeverCompare:Bc,NeverDepth:Qr,NoBlending:An,NoColorSpace:bn,NoToneMapping:wn,NormalBlending:li,NotEqualCompare:Gc,NotEqualDepth:ss,Object3D:Et,ObjectSpaceNormalMap:Oc,OneFactor:pc,OneMinusConstantAlphaFactor:bc,OneMinusConstantColorFactor:yc,OneMinusDstAlphaFactor:vc,OneMinusDstColorFactor:Mc,OneMinusSrcAlphaFactor:Jr,OneMinusSrcColorFactor:gc,OrthographicCamera:No,PCFShadowMap:po,PCFSoftShadowMap:oc,PMREMGenerator:ao,PerspectiveCamera:Xt,Plane:Tn,PlaneGeometry:en,PolyhedronGeometry:sa,Quaternion:kn,RED_GREEN_RGTC2_Format:Fs,RED_RGTC1_Format:Us,REVISION:qs,RGBADepthPacking:Fc,RGBAFormat:Jt,RGBAIntegerFormat:ea,RGBA_ASTC_10x10_Format:Rs,RGBA_ASTC_10x5_Format:bs,RGBA_ASTC_10x6_Format:As,RGBA_ASTC_10x8_Format:ws,RGBA_ASTC_12x10_Format:Cs,RGBA_ASTC_12x12_Format:Ps,RGBA_ASTC_4x4_Format:_s,RGBA_ASTC_5x4_Format:vs,RGBA_ASTC_5x5_Format:xs,RGBA_ASTC_6x5_Format:Ms,RGBA_ASTC_6x6_Format:Ss,RGBA_ASTC_8x5_Format:Es,RGBA_ASTC_8x6_Format:ys,RGBA_ASTC_8x8_Format:Ts,RGBA_BPTC_Format:Ls,RGBA_ETC2_EAC_Format:gs,RGBA_PVRTC_2BPPV1_Format:fs,RGBA_PVRTC_4BPPV1_Format:ds,RGBA_S3TC_DXT1_Format:sr,RGBA_S3TC_DXT3_Format:ar,RGBA_S3TC_DXT5_Format:or,RGBFormat:Eo,RGB_BPTC_SIGNED_Format:Ds,RGB_BPTC_UNSIGNED_Format:Is,RGB_ETC1_Format:ps,RGB_ETC2_Format:ms,RGB_PVRTC_2BPPV1_Format:us,RGB_PVRTC_4BPPV1_Format:hs,RGB_S3TC_DXT1_Format:rr,RGFormat:yo,RGIntegerFormat:Qs,Ray:Ao,RedFormat:$s,RedIntegerFormat:Js,ReinhardToneMapping:Cc,RenderTarget:Kc,RepeatWrapping:ls,ReverseSubtractEquation:hc,SIGNED_RED_GREEN_RGTC2_Format:Os,SIGNED_RED_RGTC1_Format:Ns,SRGBColorSpace:Bt,SRGBTransfer:tt,Scene:nh,ShaderChunk:qe,ShaderLib:ln,ShaderMaterial:fn,ShortType:vo,Source:na,Sphere:Wi,SphereGeometry:gr,Spherical:so,SrcAlphaFactor:$r,SrcAlphaSaturateFactor:Sc,SrcColorFactor:mc,StaticDrawUsage:to,SubtractEquation:cc,SubtractiveBlending:Ja,TOUCH:ai,TangentSpaceNormalMap:ta,Texture:Rt,Triangle:$t,UVMapping:go,Uint16BufferAttribute:Ro,Uint32BufferAttribute:Co,UniformsLib:fe,UniformsUtils:Qc,UnsignedByteType:dn,UnsignedInt101111Type:Mo,UnsignedInt248Type:Bi,UnsignedInt5999Type:xo,UnsignedIntType:zn,UnsignedShort4444Type:Ks,UnsignedShort5551Type:Zs,UnsignedShortType:Oi,VSMShadowMap:gn,Vector2:Be,Vector3:N,Vector4:mt,WebGLCoordinateSystem:un,WebGLCubeRenderTarget:th,WebGLRenderTarget:Hn,WebGLRenderer:_h,WebGLUtils:gh,WebGPUCoordinateSystem:hr,WebXRController:Yr,ZeroFactor:fc,createCanvasElement:Yc},Symbol.toStringTag,{value:"Module"})),Yl={type:"change"},zo={type:"start"},vh={type:"end"},Vr=new Ao,jl=new Tn,ig=Math.cos(70*Xc.DEG2RAD),St=new N,Ot=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wa=1e-6;class rg extends hh{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new kn,this._lastTargetPosition=new N,this._quat=new kn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new so,this._sphericalDelta=new so,this._scale=1,this._panOffset=new N,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new N,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ag.bind(this),this._onPointerDown=sg.bind(this),this._onPointerUp=og.bind(this),this._onContextMenu=pg.bind(this),this._onMouseWheel=hg.bind(this),this._onKeyDown=ug.bind(this),this._onTouchStart=dg.bind(this),this._onTouchMove=fg.bind(this),this._onMouseDown=lg.bind(this),this._onMouseMove=cg.bind(this),this._interceptControlDown=mg.bind(this),this._interceptControlUp=gg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yl),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ot:n>Math.PI&&(n-=Ot),r<-Math.PI?r+=Ot:r>Math.PI&&(r-=Ot),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=St.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<ig?this.object.lookAt(this.target):(jl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(jl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wa||this._lastTargetPosition.distanceToSquared(this.target)>Wa?(this.dispatchEvent(Yl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ag(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function og(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vh),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(zo)}function cg(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hg(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vh))}function ug(i){this.enabled!==!1&&this._handleKeyDown(i)}function dg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(zo)}function fg(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function pg(i){this.enabled!==!1&&i.preventDefault()}function mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _g(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Yt;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Kl(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][f]);const g=Kl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Kl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new qt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+d,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const xt=i=>document.getElementById(i),vg=["temperature_2m","precipitation","rain","snowfall","wind_speed_10m","wind_direction_10m","wind_gusts_10m","cloud_cover_low","cloud_cover_mid","cloud_cover_high","shortwave_radiation"],Zl=600*1e3,$l=new Map,ti=(i,e=0)=>i==null||!Number.isFinite(Number(i))?"—":Number(i).toFixed(e),xg=i=>i*Math.PI/180;function Mg(i,e){return"https://api.open-meteo.com/v1/ecmwf?"+new URLSearchParams({latitude:String(i),longitude:String(e),models:"ecmwf_ifs",hourly:vg.join(","),forecast_hours:"24",timezone:"UTC"}).toString()}function Sg(i,e){return"https://marine-api.open-meteo.com/v1/marine?"+new URLSearchParams({latitude:String(i),longitude:String(e),hourly:"wave_height,wave_direction,wave_period",forecast_hours:"24",timezone:"UTC"}).toString()}async function Jl(i,e){const t=await fetch(i,{signal:e,mode:"cors",cache:"no-store"});if(!t.ok)throw new Error("Weather HTTP "+t.status);const n=await t.json();if(n.error)throw new Error(n.reason||"Weather API error");return n}function Eg({viewer:i,C:e}){const t=new AbortController;let n=!0,r=null,s=null,a=null,o=0,l=null,c=0,h=0,d=null,f=null;const p=xt("weather-fx"),g=p.getContext("2d",{alpha:!0});let _=0,m=0;const u=(D,F=!1)=>{if(!n)return;const H=xt("studio-status");H.textContent=D,H.classList.toggle("is-error",F)},T=()=>{for(const D of["wx-temp","wx-rain","wx-wind","wx-wave","wx-sun","wx-cloud"])xt(D).textContent="—";xt("studio-hour-label").textContent="—"};function y(){if(!s?.hourly?.time?.length)return null;const D=s.hourly,F=Math.min(o,D.time.length-1),H={time:D.time[F],temp:D.temperature_2m?.[F],precip:D.precipitation?.[F],rain:D.rain?.[F],snow:D.snowfall?.[F],wind:D.wind_speed_10m?.[F],windDir:D.wind_direction_10m?.[F],gust:D.wind_gusts_10m?.[F],low:D.cloud_cover_low?.[F],mid:D.cloud_cover_mid?.[F],high:D.cloud_cover_high?.[F],sun:D.shortwave_radiation?.[F]},G=a?.hourly?.time?.indexOf(H.time)??-1;return H.wave=G>=0?a.hourly.wave_height?.[G]:null,H.waveDirection=G>=0?a.hourly.wave_direction?.[G]:null,H}function v(){const D=y();if(!D){T();return}xt("wx-temp").textContent=ti(D.temp,1)+" °C",xt("wx-rain").textContent=ti(D.precip,1)+" mm/h",xt("wx-wind").textContent=ti(D.wind,0)+" km/h · "+ti(D.windDir,0)+"°",xt("wx-wave").textContent=D.wave===null||D.wave===void 0?"N/A (INLAND / NO DATA)":ti(D.wave,1)+" m",xt("wx-sun").textContent=ti(D.sun,0)+" W/m²",xt("wx-cloud").textContent=[D.low,D.mid,D.high].map(H=>ti(H,0)).join(" / ")+" %",xt("studio-hour-label").textContent=D.time+" UTC",xt("studio-status").classList.remove("is-error"),u("ECMWF IFS ~9km"+" · "+r.lat.toFixed(3)+"°, "+r.lon.toFixed(3)+"° · FORECAST (NOT OBSERVATION)")}async function C(D,F,H=!1){if(!n||!Number.isFinite(D)||!Number.isFinite(F))return;const G=+D.toFixed(3),K=+F.toFixed(3);if(!H&&f&&Math.abs(G-f.lat)<.09&&Math.abs(K-f.lon)<.09&&Date.now()-c<Zl||!H&&Date.now()-h<45e3)return;r={lat:G,lon:K},f=r,c=Date.now(),h=Date.now();const B=G.toFixed(1)+","+K.toFixed(1),X=$l.get(B);if(X&&!H&&Date.now()-X.time<Zl){s=X.weather,a=X.marine,o=0,v();return}l?.abort(),l=new AbortController;const Q=l.signal;u("FETCHING ECMWF IFS FORECAST AT "+G+"°, "+K+"°…");try{const re=await Jl(Mg(G,K),Q);let ce=null;try{ce=await Jl(Sg(G,K),Q)}catch(Re){if(Re.name==="AbortError")throw Re;ce=null}if(!n||Q.aborted)return;if(!re?.hourly?.time?.length)throw new Error("Hourly weather data is unavailable");s=re,a=ce,o=0,$l.set(B,{weather:re,marine:ce,time:Date.now()}),xt("studio-hour").max=String(re.hourly.time.length-1),xt("studio-hour").value="0",v()}catch(re){if(re?.name==="AbortError"||!n)return;s=null,a=null,T(),u("Live weather unavailable: "+String(re?.message||"network error")+". Display is not populated with invented measurements.",!0)}}async function w(D=!1){if(!n||!i||i.isDestroyed())return;const F=i.camera.positionCartographic;F&&await C(e.Math.toDegrees(F.latitude),e.Math.toDegrees(F.longitude),D)}function b(){n&&(clearTimeout(d),d=setTimeout(()=>w(),1200))}const P=()=>b();i.camera.moveEnd.addEventListener(P),xt("studio-refresh").addEventListener("click",()=>w(!0),{signal:t.signal}),xt("studio-hour").addEventListener("input",D=>{o=Number(D.target.value),v()},{signal:t.signal});function S(){const D=p.getBoundingClientRect();p.width=Math.max(1,Math.floor(D.width)),p.height=Math.max(1,Math.floor(D.height))}function M(D){if(!n||(_=requestAnimationFrame(M),D-m<65))return;m=D;const F=p.width,H=p.height;g.clearRect(0,0,F,H);const G=y();if(!G)return;const K=[G.low,G.mid,G.high];xt("wx-clouds").checked&&K.forEach((re,ce)=>{const Re=Math.max(0,Math.min(1,(Number(re)||0)/100));if(Re<.03)return;const Ie=[H*.67,H*.38,H*.13][ce],ye=[.004,.009,.014][ce]*(Number(G.wind)||8),Y=D*ye;g.save(),g.globalCompositeOperation="screen";for(let $=0;$<5;$++){let de=($*313+Y)%(F+450)-220,Ae=Ie+Math.sin($*8.41+D*12e-5)*35;const Me=120+ce*42,ke=g.createRadialGradient(de,Ae,0,de,Ae,Me);ke.addColorStop(0,"rgba(225,238,245,"+Re*[.09,.07,.05][ce]+")"),ke.addColorStop(1,"rgba(225,238,245,0)"),g.fillStyle=ke,g.fillRect(de-Me,Ae-Me,Me*2,Me*2)}g.restore()});const B=Number(G.wind)||0,X=xg(Number(G.windDir)||0),Q=Math.sin(X)*B*.15;if(xt("wx-wind-fx").checked&&B>3){const re=Math.min(65,Math.floor(B*1.15));g.lineWidth=1.2,g.strokeStyle="rgba(183,232,255,0.35)";for(let ce=0;ce<re;ce++){const Re=(ce*137.2+D*.045*(1+B/20))%(F+150)-75,Ie=(ce*89.21+D*.005%H)%H;g.beginPath(),g.moveTo(Re,Ie),g.lineTo(Re+15+Q,Ie+4+Math.cos(X)*8),g.stroke()}}if(xt("wx-rain-fx").checked&&(Number(G.precip)||0)>.03){const re=Math.min(240,Math.ceil(Number(G.precip)*38)+18);g.lineWidth=1.3,g.strokeStyle="rgba(167,213,250,.48)";for(let ce=0;ce<re;ce++){const Re=(ce*97.4+Math.sin(ce*5.29)*82+D*.04*Q+F*20)%(F+65),Ie=(ce*67.2+D*.33*(1+Number(G.precip)/4))%H;g.beginPath(),g.moveTo(Re,Ie),g.lineTo(Re+4+Q*.5,Ie+12+Math.min(25,Number(G.precip)*3)),g.stroke()}}if(xt("wx-waves-fx").checked&&Number.isFinite(Number(G.wave))&&G.wave!==null){const re=Math.min(7,Number(G.wave));g.strokeStyle="rgba(102,217,238,0.38)",g.lineWidth=1.3;for(let ce=0;ce<4;ce++){g.beginPath();const Re=H*.92+ce*13;for(let Ie=0;Ie<=F;Ie+=12){const ye=Re+Math.sin(Ie*.023+ce*1.7+D*.002)*Math.max(1,re*1.7);Ie===0?g.moveTo(Ie,ye):g.lineTo(Ie,ye)}g.stroke()}}}function R(){n&&S()}window.addEventListener("resize",R,{signal:t.signal}),p.hidden=!1,S(),_=requestAnimationFrame(M),w();const I=setInterval(()=>{n&&w()},300*1e3);return{setCity(){w(!0)},refresh:()=>w(!0),diagnostics:()=>({loaded:!!s,model:"ECMWF IFS HRES ~9km",time:y()?.time,latitude:r?.lat,longitude:r?.lon,wave:y()?.wave}),destroy(){t.abort(),n=!1,clearInterval(I),clearTimeout(d),l?.abort(),cancelAnimationFrame(_),window.removeEventListener("resize",R),i.camera.moveEnd.removeEventListener(P),g.clearRect(0,0,p.width,p.height),p.hidden=!0,T()}}}const Ze=i=>document.getElementById(i);function yg({C:i,viewer:e,mode:t="atlas",buildings:n=null}){const r=new AbortController;let s=!0,a=null,o=[],l=[],c=null,h=!1,d=[],f=null,p=[],g=!1,_=!1,m=null,u=null,T=null,y=null,v=4;const C=new i.ScreenSpaceEventHandler(e.scene.canvas),w=e.scene.screenSpaceCameraController,b=k=>{s&&(Ze("draw-status").textContent=k)},P=k=>{s&&(Ze("camera-status").textContent=k)};function S(k){const W=i.Cartographic.fromCartesian(k);return[i.Math.toDegrees(W.longitude),i.Math.toDegrees(W.latitude),Math.max(0,W.height)]}function M(k){return i.Cartesian3.fromDegrees(k[0],k[1],k[2]||0)}function R(k){let W=null;if(e.scene.pickPositionSupported)try{const te=e.scene.pick(k);i.defined(te)&&(W=e.scene.pickPosition(k))}catch{}if(!W&&e.scene.globe?.show){const te=e.camera.getPickRay(k);te&&(W=e.scene.globe.pick(te,e.scene))}return W||(W=e.camera.pickEllipsoid(k,e.scene.globe?.ellipsoid||i.Ellipsoid.WGS84)),W}function I(k){if(h&&B(!1),a===k){F();return}a=k,o=[],w.enableInputs=!k,document.querySelectorAll("[data-draw]").forEach(W=>W.classList.toggle("active",W.dataset.draw===k)),b(k?"Draw "+k.toUpperCase()+": click map to place points; choose FINISH to complete.":"DRAWING IDLE")}function D(k,W){if(!W.length)return;const te="AEROVIEW_EDIT";let ne,Ne;if(k==="pin"){const _e=W[0];ne={id:"ann-"+Date.now()+"-"+Math.floor(Math.random()*1e5),type:"pin",coordinates:_e},Ne=e.entities.add({id:ne.id,position:M(_e),point:{pixelSize:11,color:i.Color.fromCssColorString("#ffdb92"),outlineColor:i.Color.BLACK,outlineWidth:2,heightReference:i.HeightReference.NONE},label:{text:"PIN",font:"bold 14px sans-serif",fillColor:i.Color.WHITE,outlineColor:i.Color.BLACK,outlineWidth:3,style:i.LabelStyle.FILL_AND_OUTLINE,pixelOffset:new i.Cartesian2(0,-23)}})}else if(k==="line"){if(W.length<2){b("PATH needs at least 2 map points.");return}ne={id:"ann-"+Date.now()+"-"+Math.floor(Math.random()*1e5),type:"line",coordinates:W},Ne=e.entities.add({id:ne.id,polyline:{positions:W.map(M),width:5,material:i.Color.fromCssColorString("#f4b357"),clampToGround:!1}})}else{if(W.length<3){b("AREA needs at least 3 map points.");return}ne={id:"ann-"+Date.now()+"-"+Math.floor(Math.random()*1e5),type:"polygon",coordinates:W},Ne=e.entities.add({id:ne.id,polygon:{hierarchy:W.map(M),perPositionHeight:!0,material:i.Color.fromCssColorString("#3cddd0").withAlpha(.3),outline:!0,outlineColor:i.Color.fromCssColorString("#f2d6a1")}})}Ne.properties=new i.PropertyBag({source:te,type:k}),l.push({entity:Ne,model:ne}),e.scene.requestRender(),b(k.toUpperCase()+" saved as overlay · "+l.length+" feature(s).")}function F(){if(!a)return;const k=a;o.length&&D(k,o.map(W=>W.slice())),a=null,o=[],w.enableInputs=!0,document.querySelectorAll("[data-draw]").forEach(W=>W.classList.remove("active"))}function H(){d.forEach(k=>e.entities.remove(k.entity)),d=[],f=null}function G(k){const W=k.model,te=k.entity;W.type==="pin"&&(te.position=M(W.coordinates)),W.type==="line"&&(te.polyline.positions=W.coordinates.map(M)),W.type==="polygon"&&(te.polygon.hierarchy=new i.PolygonHierarchy(W.coordinates.map(M))),e.scene.requestRender()}function K(){H();const k=l.find(te=>te.entity===c);if(!h||!k)return;(k.model.type==="pin"?[k.model.coordinates]:k.model.coordinates).forEach((te,ne)=>{const Ne=e.entities.add({position:M(te),point:{pixelSize:13,color:i.Color.fromCssColorString("#ffdf86"),outlineWidth:2,outlineColor:i.Color.fromCssColorString("#112233"),disableDepthTestDistance:Number.POSITIVE_INFINITY}});d.push({entity:Ne,index:ne,entry:k})}),e.scene.requestRender()}function B(k){a&&F(),h=!!k,w.enableInputs=!h,Ze("draw-edit").classList.toggle("active",h),h?(K(),b("EDIT: click an annotation to select, then drag yellow vertex handles. Turn EDIT off to move the globe.")):(H(),b("Editor disabled; camera orbit restored."))}C.setInputAction(k=>{if(!s||!h)return;const W=e.scene.pick(k.position),te=d.find(ne=>ne.entity===W?.id);te&&(f=te,w.enableInputs=!1)},i.ScreenSpaceEventType.LEFT_DOWN),C.setInputAction(k=>{if(!s||!f)return;const W=R(k.endPosition);if(!W)return;const te=S(W),{entry:ne,index:Ne}=f;ne.model.type==="pin"?ne.model.coordinates=te:ne.model.coordinates[Ne]=te,f.entity.position=M(te),G(ne)},i.ScreenSpaceEventType.MOUSE_MOVE),C.setInputAction(()=>{f&&(f=null,b("Vertex updated. Save a GeoJSON copy to keep your changes.")),h&&(w.enableInputs=!1)},i.ScreenSpaceEventType.LEFT_UP);function X(k){if(!s)return;if(!a){const te=e.scene.pick(k.position);te?.id&&l.some(ne=>ne.entity===te.id)&&(c=te.id,h&&K(),b("Selected "+c.id+". "+(h?"Drag golden vertex handles to edit geometry.":"DELETE will remove this overlay.")));return}const W=R(k.position);if(!W){b("No ground intersection at that position. Try clicking the visible map.");return}o.push(S(W)),b("Placed "+o.length+" point(s). "+(a==="pin"?"":"Continue or click FINISH.")),a==="pin"&&F()}C.setInputAction(X,i.ScreenSpaceEventType.LEFT_CLICK),C.setInputAction(()=>F(),i.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);const Q=document.querySelectorAll("[data-draw]");for(const k of Q)k.addEventListener("click",()=>I(k.dataset.draw),{signal:r.signal});Ze("draw-finish").addEventListener("click",F,{signal:r.signal}),Ze("draw-edit").addEventListener("click",()=>B(!h),{signal:r.signal}),Ze("draw-undo").addEventListener("click",()=>{if(o.length){o.pop(),b("Removed last unsaved point.");return}const k=l.pop();k&&(c===k.entity&&(c=null,H()),e.entities.remove(k.entity),b("Undid last saved feature."),e.scene.requestRender())},{signal:r.signal}),Ze("draw-delete").addEventListener("click",()=>{const k=l.findIndex(W=>W.entity===c);if(k<0){b("Click an existing annotation first to select it.");return}e.entities.remove(l[k].entity),l.splice(k,1),c=null,H(),e.scene.requestRender(),b("Selected annotation deleted.")},{signal:r.signal}),Ze("draw-clear").addEventListener("click",()=>{o=[],H(),l.forEach(k=>e.entities.remove(k.entity)),l=[],c=null,I(null),b("All annotations cleared. Underlying imagery was not changed.")},{signal:r.signal});function re(k,W){const te=URL.createObjectURL(k),ne=document.createElement("a");ne.href=te,ne.download=W,document.body.appendChild(ne),ne.click(),ne.remove(),setTimeout(()=>URL.revokeObjectURL(te),15e3)}Ze("draw-export").addEventListener("click",()=>{if(!l.length){b("Add at least one annotation before exporting.");return}const k=l.map(({model:W})=>{let te;return W.type==="pin"?te={type:"Point",coordinates:W.coordinates}:W.type==="line"?te={type:"LineString",coordinates:W.coordinates}:te={type:"Polygon",coordinates:[[...W.coordinates,W.coordinates[0]]]},{type:"Feature",properties:{source:"AEROVIEW",id:W.id},geometry:te}});re(new Blob([JSON.stringify({type:"FeatureCollection",features:k},null,2)],{type:"application/geo+json"}),"aeroview-annotations.geojson"),b("Exported "+k.length+" features as GeoJSON (EPSG:4326).")},{signal:r.signal});const ce=k=>{Ze("project-status").textContent=k},Re=k=>Array.isArray(k)&&k.length>=2&&k.length<=3&&k.every(W=>typeof W=="number"&&Number.isFinite(W))&&Math.abs(k[0])<=180&&Math.abs(k[1])<=90&&(k.length<3||Math.abs(k[2])<2e5),Ie=k=>k&&k.destination&&k.orientation&&["x","y","z"].every(W=>typeof k.destination[W]=="number"&&Number.isFinite(k.destination[W])&&Math.abs(k.destination[W])<1e8)&&["heading","pitch","roll"].every(W=>typeof k.orientation[W]=="number"&&Number.isFinite(k.orientation[W])&&Math.abs(k.orientation[W])<1e3);function ye(){const k={schema:"aeroview-project",version:2,created_at:new Date().toISOString(),crs:"EPSG:4326",camera:{secondsPerWaypoint:v},buildingLayer:n?.exportSnapshot()||null,annotations:l.map(({model:W})=>({type:W.type,coordinates:JSON.parse(JSON.stringify(W.coordinates))})),keyframes:p.map(W=>({destination:{x:W.destination.x,y:W.destination.y,z:W.destination.z},orientation:{...W.orientation}}))};re(new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),"aeroview-project.json"),ce("Saved "+k.annotations.length+" annotations, "+k.keyframes.length+" camera views and "+(k.buildingLayer?.items.length||0)+" 3D building footprints. No keys, tiles or weather records.")}function Y(){a&&F(),h&&B(!1),g&&Ae(),H(),c=null,l.forEach(k=>e.entities.remove(k.entity)),l=[],o=[],p=[],Ze("keyframe-count").textContent="0 KEYFRAMES",v=4,Ze("camera-duration").value="4",Ze("camera-duration-label").textContent="4.0 s",e.scene.requestRender()}function $(k){const W=JSON.parse(k);if(W?.schema!=="aeroview-project"||![1,2].includes(W.version)||!Array.isArray(W.annotations)||!Array.isArray(W.keyframes)||W.annotations.length>300||W.keyframes.length>100)throw new Error("Unsupported project schema or excessive entries.");let te=0;const ne=W.annotations.map(me=>{if(!me||!["pin","line","polygon"].includes(me.type))throw new Error("Unknown annotation type.");const rt=me.type==="pin"?[me.coordinates]:me.coordinates;if(!Array.isArray(rt))throw new Error("Missing annotation coordinates.");if(me.type==="line"&&rt.length<2||me.type==="polygon"&&rt.length<3)throw new Error("Incomplete geometry.");if(te+=rt.length,te>5e3||!rt.every(Re))throw new Error("Invalid or oversized coordinate geometry.");return{type:me.type,coordinates:JSON.parse(JSON.stringify(rt))}});if(!W.keyframes.every(Ie))throw new Error("Invalid camera keyframe.");const Ne=W.version===2?W.camera?.secondsPerWaypoint:4;if(typeof Ne!="number"||!Number.isFinite(Ne)||Ne<2||Ne>12)throw new Error("Invalid camera timing.");const _e=W.version===2?n?.validateSnapshot(W.buildingLayer):void 0;Y();for(const me of ne)D(me.type,me.coordinates);p=W.keyframes.map(me=>({destination:new i.Cartesian3(me.destination.x,me.destination.y,me.destination.z),orientation:{heading:me.orientation.heading,pitch:me.orientation.pitch,roll:me.orientation.roll}})),Ze("keyframe-count").textContent=p.length+" KEYFRAMES",v=Ne,Ze("camera-duration").value=String(v),Ze("camera-duration-label").textContent=v.toFixed(1)+" s",W.version===2&&n&&n.restoreSnapshot(_e),ce("Loaded "+ne.length+" annotations, "+p.length+" camera views, "+(_e?.items.length||0)+" 3D building footprints."),b("Project overlays restored · edit or export GeoJSON as needed."),e.scene.requestRender()}Ze("project-save").addEventListener("click",ye,{signal:r.signal}),Ze("project-clear").addEventListener("click",()=>{Y(),n?.clear(),ce("Project reset, including local buildings. No files were deleted from your computer.")},{signal:r.signal}),Ze("project-load").addEventListener("click",()=>Ze("project-file").click(),{signal:r.signal}),Ze("project-file").addEventListener("change",async k=>{const W=k.target.files?.[0];if(W)try{if(W.size>8*1024*1024)throw new Error("Project must be smaller than 8 MB.");$(await W.text())}catch(te){ce("Cannot open project: "+(te?.message||"invalid file"))}finally{k.target.value=""}},{signal:r.signal});function de(){const k=e.camera;return{destination:i.Cartesian3.clone(k.positionWC),orientation:{heading:k.heading,pitch:k.pitch,roll:k.roll}}}Ze("camera-duration").addEventListener("input",k=>{v=Number(k.target.value),Ze("camera-duration-label").textContent=v.toFixed(1)+" s"},{signal:r.signal}),Ze("camera-back").addEventListener("click",()=>{if(g){P("Stop flight before removing a waypoint.");return}p.length&&p.pop(),Ze("keyframe-count").textContent=p.length+" KEYFRAMES",P("Camera route now contains "+p.length+" waypoints.")},{signal:r.signal}),Ze("camera-add").addEventListener("click",()=>{p.push(de()),Ze("keyframe-count").textContent=p.length+" KEYFRAMES",P("Captured waypoint "+p.length+". Add "+Math.max(0,2-p.length)+" more to fly.")},{signal:r.signal});function Ae(){g=!1;try{e.camera.cancelFlight()}catch{}P("Camera flyover stopped; "+p.length+" saved viewpoints.")}Ze("camera-stop").addEventListener("click",()=>{Ae(),_&&m?.state==="recording"&&m.stop()},{signal:r.signal});async function Me(){if(g){Ae();return}if(p.length<2){P("Add at least 2 viewpoints to animate a flight.");return}a&&F(),g=!0,P("Playing "+p.length+" camera keyframes. Capture with RECORD WEBM.");for(const k of p)if(!g||!s||!await new Promise(te=>{e.camera.flyTo({destination:k.destination,orientation:k.orientation,duration:v,complete:()=>te(!0),cancel:()=>te(!1)})}))break;g=!1,s&&P("Route finished. Set new views or download a screenshot.")}Ze("camera-play").addEventListener("click",Me,{signal:r.signal});const ke=()=>{const k=e.scene.canvas,W=document.createElement("canvas");return W.width=k.width,W.height=k.height,W},ut=k=>{const W=e.scene.canvas,te=k.getContext("2d",{alpha:!1});te.fillStyle="#0e1b29",te.fillRect(0,0,k.width,k.height),te.drawImage(W,0,0,k.width,k.height);const ne=document.getElementById("weather-fx");ne&&!ne.hidden&&te.drawImage(ne,0,0,k.width,k.height);const Ne=Math.max(13,Math.round(k.width/110)),_e="© OpenStreetMap contributors · openstreetmap.org/copyright   |   CesiumJS   |   Weather: Open-Meteo / ECMWF";te.font="600 "+Ne+"px sans-serif";const me=te.measureText(_e).width;return te.fillStyle="rgba(5,18,30,0.86)",te.fillRect(9,k.height-Ne-27,Math.min(k.width-18,me+26),Ne+19),te.fillStyle="#ffffff",te.fillText(_e,21,k.height-20,k.width-40),k};Ze("camera-snap").addEventListener("click",()=>{if(t!=="atlas"){P("3D provider export disabled until provider-specific attribution and recording permissions are implemented.");return}e.scene.requestRender();const k=()=>{e.scene.postRender.removeEventListener(k);try{ut(ke()).toBlob(W=>{W?.size>100?re(W,"aeroview-map-"+Date.now()+".png"):P("Screenshot unavailable with this WebGL driver.")},"image/png")}catch{P("Screenshot not supported by this WebGL browser.")}};e.scene.postRender.addEventListener(k),e.scene.requestRender()},{signal:r.signal});function L(){m?.state==="recording"&&m.stop(),y&&(clearTimeout(y),y=null),T&&(clearInterval(T),T=null)}return Ze("camera-record").addEventListener("click",()=>{if(_){L();return}if(t!=="atlas"){P("3D provider video export disabled pending copyright/attribution-compliant recording.");return}if(!e.scene.canvas.captureStream||!window.MediaRecorder){P("WEBM capture unsupported in this browser.");return}try{const k=ke();ut(k);const W=k.captureStream(20),ne=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(me=>MediaRecorder.isTypeSupported(me));if(!ne){W.getTracks().forEach(me=>me.stop()),P("No supported WebM encoding type.");return}const Ne=new MediaRecorder(W,{mimeType:ne,videoBitsPerSecond:45e5}),_e=[];Ne.ondataavailable=me=>{me.data?.size&&_e.push(me.data)},Ne.onerror=()=>P("Video recorder failed. Check browser permissions and GPU."),Ne.onstop=()=>{L(),_=!1,W.getTracks().forEach(rt=>rt.stop()),Ze("camera-record").textContent="● RECORD WEBM";const me=new Blob(_e,{type:ne});me.size>1e3?(re(me,"aeroview-flight-"+Date.now()+".webm"),P("Saved WebM clip ("+(me.size/1024/1024).toFixed(1)+" MB) with weather and map credits.")):P("Recorder returned no video frames on this device.")},m=Ne,u=W,_=!0,m.start(1e3),Ze("camera-record").textContent="■ STOP RECORD",T=setInterval(()=>{s&&!e.isDestroyed()&&(e.scene.requestRender(),ut(k))},50),y=setTimeout(L,2e4),P("Recording Cesium map + weather FX + OSM credit · max 20 seconds. Tap again to stop."),p.length>=2&&!g&&Me()}catch(k){_=!1,P("Recorder cannot start: "+(k?.name||"unsupported browser"))}},{signal:r.signal}),{diagnostics:()=>({annotations:l.length,drawMode:a,editMode:h,selected:!!c,keyframes:p.length,routeDuration:v,playing:g,recording:_}),destroy(){r.abort(),s=!1,Ae(),L(),C.destroy(),H(),w.enableInputs=!0,l.forEach(({entity:k})=>e.entities.remove(k)),l=[],p=[]}}}function Tg({C:i,viewer:e}){let t=null,n=[],r=null,s=[],a=0,o=!1,l=0;const c=24,h=250;let d=null;const f=Math.PI/180;function p(y,v){const C=Math.sin((y+1)*78.233+(v+1)*127.1)*43758.5453;return C-Math.floor(C)}function g(y,v){const C=Math.max(.2,Math.cos(v*f));let w=0,b=0,P=0;for(const S of s){const M=(y-S.lon)*111.32*C,R=(v-S.lat)*111.32,I=1/(.25+M*M+R*R);b+=I*S.u,P+=I*S.v,w+=I}return w?{u:b/w,v:P/w}:{u:0,v:0}}function _(y,v=0){const C=n[y];d&&(C.lon=d.w+(d.e-d.w)*p(y,v+l*1e-5),C.lat=d.s+(d.n-d.s)*p(y+11,v+17+l*1e-5))}function m(){if(!(!o||!t||e.isDestroyed())){for(let y=0;y<n.length;y++){const v=n[y];let{u:C,v:w}=g(v.lon,v.lat);const b=Math.hypot(C,w),P=110/3600,S=C*P,M=w*P;v.lon+=S/(111.32*Math.max(.2,Math.cos(v.lat*f))),v.lat+=M/111.32,(v.lon<d.w||v.lon>d.e||v.lat<d.s||v.lat>d.n)&&_(y,l+19);const R=Math.max(.18,Math.min(1.5,b*.024)),I=Math.max(.001,b),D=v.lon-C/I*R/(111.32*Math.max(.2,Math.cos(v.lat*f))),F=v.lat-w/I*R/111.32;v.line.positions=i.Cartesian3.fromDegreesArrayHeights([D,F,235,v.lon,v.lat,235])}l++,e.scene.requestRender()}}function u(){if(r!==null&&clearInterval(r),r=null,o=!1,t){try{e.scene.primitives.remove(t)}catch{}t=null}n=[],s=[],d=null}function T(y,v,C){if(u(),a=C,!y||!v||![9,25].includes(y.length)||v.length!==y.length)return!1;s=[];for(let b=0;b<y.length;b++){const P=v[b]?.hourly?.wind_speed_10m?.[C],S=v[b]?.hourly?.wind_direction_10m?.[C];if(P===null||S===null||P===void 0||S===void 0||!Number.isFinite(Number(P))||!Number.isFinite(Number(S)))continue;const M=Number(S)*f;s.push({lon:y[b].lon,lat:y[b].lat,u:-Math.sin(M)*Number(P),v:-Math.cos(M)*Number(P)})}if(s.length<Math.ceil(y.length*.55))return s=[],!1;d={w:Math.min(...y.map(b=>b.w)),e:Math.max(...y.map(b=>b.e)),s:Math.min(...y.map(b=>b.s)),n:Math.max(...y.map(b=>b.n))},t=e.scene.primitives.add(new i.PolylineCollection);const w=i.Material.fromType("Color",{color:i.Color.fromCssColorString("#b6f4ef").withAlpha(.9)});for(let b=0;b<c;b++){const P=t.add({positions:i.Cartesian3.fromDegreesArrayHeights([y[Math.floor(y.length/2)].lon,y[Math.floor(y.length/2)].lat,235,y[Math.floor(y.length/2)].lon+1e-4,y[Math.floor(y.length/2)].lat,235]),width:2,material:w});n.push({line:P,lon:0,lat:0}),_(b,1)}return o=!0,m(),r=setInterval(m,h),!0}return{setData:T,stop:u,diagnostics:()=>({active:o,particles:n.length,stations:s.length,updates:l,hour:a,interpolated:!0}),destroy:u}}const $e=i=>document.getElementById(i),Ql={temp:{name:"TEMPERATURE",key:"temperature_2m",min:0,max:40,unit:"°C"},rain:{name:"PRECIPITATION",key:"precipitation",min:0,max:15,unit:"mm/h"},wind:{name:"WIND SPEED",key:"wind_speed_10m",min:0,max:90,unit:"km/h"},cloud:{name:"CLOUD COVER",key:"cloud_cover",min:0,max:100,unit:"%"}};function bg({C:i,viewer:e}){const t=new AbortController;let n=!0,r=null,s=null,a=[],o=null,l=0,c=0,h=null,d="temp",f=0,p=0;const g=Tg({C:i,viewer:e}),_=R=>{$e("grid-status").textContent=R},m=(R,I,D)=>Math.min(D,Math.max(I,R)),u=R=>i.Math.toDegrees(R),T=(R,I)=>{const D=m((R-I.min)/(I.max-I.min),0,1);return d==="rain"?i.Color.fromHsl(.6-D*.6,.86,.5,.27):d==="temp"?i.Color.fromHsl(.68-D*.68,.85,.52,.3):d==="wind"?i.Color.fromHsl(.5-D*.45,.83,.49,.31):i.Color.fromHsl(.62-D*.58,.6,.52,.3)};function y(){const R=e.camera.positionCartographic;return{lat:u(R.latitude),lon:u(R.longitude)}}function v(){f=0,p=0,a.forEach(R=>e.entities.remove(R)),a=[],e.scene.requestRender()}function C(){g.stop(),o?.abort(),v(),s=null,r=null,h=null,$e("grid-legend").hidden=!0,_("Grid hidden. No further sampling is automatic.")}function w(R){if(!s)return[];const I=Ql[d].key;return s.map(D=>D?.hourly?.[I]?.[R])}function b(){if(v(),!s?.length||!r?.length){g.stop();return}const R=Math.min(23,Math.max(0,Number($e("studio-hour").value)||0)),I=Ql[d],D=w(R),F=D.filter(B=>B==null||!Number.isFinite(Number(B))).length,H=$e("grid-smooth").checked;if(H){const B=Math.min(...r.map(Y=>Y.w)),X=Math.max(...r.map(Y=>Y.e)),Q=Math.min(...r.map(Y=>Y.s)),re=Math.max(...r.map(Y=>Y.n)),ce=Math.sqrt(r.length)*2,Re=ce,Ie=(X-B)/Re,ye=(re-Q)/ce;for(let Y=0;Y<ce;Y++)for(let $=0;$<Re;$++){const de=B+($+.5)*Ie,Ae=Q+(Y+.5)*ye,Me=Math.max(.2,Math.cos(Ae*Math.PI/180));let ke=0,ut=0;for(let L=0;L<r.length;L++){const k=D[L];if(k==null||!Number.isFinite(Number(k)))continue;const W=(r[L].lon-de)*111.32*Me,te=(r[L].lat-Ae)*111.32,ne=1/(.1+W*W+te*te);ut+=ne,ke+=ne*Number(k)}ut<=0||(a.push(e.entities.add({name:"IDW INTERPOLATED estimate from "+r.length+" ECMWF point forecasts",rectangle:{coordinates:i.Rectangle.fromDegrees(B+$*Ie,Q+Y*ye,B+($+1)*Ie,Q+(Y+1)*ye),height:90,material:T(ke/ut,I),outline:!1}})),p++)}}for(let B=0;B<r.length;B++){const X=r[B],Q=D[B];if(!(Q==null||!Number.isFinite(Number(Q)))){if(H||(a.push(e.entities.add({name:"ECMWF point sample at "+X.lat.toFixed(3)+", "+X.lon.toFixed(3),rectangle:{coordinates:i.Rectangle.fromDegrees(X.w,X.s,X.e,X.n),height:100,material:T(Number(Q),I),outline:!0,outlineColor:i.Color.WHITE.withAlpha(.33)}})),p++),$e("grid-labels").checked){const re=Number(Q).toFixed(Q>=10||Q===0?0:1)+" "+I.unit,ce=e.entities.add({position:i.Cartesian3.fromDegrees(X.lon,X.lat,140),label:{text:re,fillColor:i.Color.WHITE,font:"bold 15px sans-serif",showBackground:!0,backgroundColor:i.Color.fromCssColorString("#10273c").withAlpha(.77),outlineColor:i.Color.BLACK,outlineWidth:2,style:i.LabelStyle.FILL_AND_OUTLINE,heightReference:i.HeightReference.NONE,disableDepthTestDistance:1e6}});a.push(ce)}if(d==="wind"&&$e("grid-vectors").checked){const re=s[B]?.hourly?.wind_direction_10m?.[R];if(re!=null&&Number.isFinite(Number(re))){const ce=(Number(re)+180)*Math.PI/180,Re=Math.max(.7,Math.min(2.6,.65+(Number(Q)||0)*.026)),Ie=Math.sin(ce)*Re,Y=Math.cos(ce)*Re/111.32,$=Ie/(111.32*Math.max(.2,Math.cos(X.lat*Math.PI/180))),de=e.entities.add({name:"Forecast wind TO direction · "+Math.round(Number(re))+"° FROM",polyline:{positions:i.Cartesian3.fromDegreesArrayHeights([X.lon-$*.5,X.lat-Y*.5,210,X.lon+$*.5,X.lat+Y*.5,210]),width:9,material:new i.PolylineArrowMaterialProperty(i.Color.WHITE.withAlpha(.92))}});a.push(de),f++}}}}d==="wind"&&$e("grid-tracers").checked?g.setData(r,s,R):g.stop(),$e("grid-legend").hidden=!1,$e("grid-legend-label").textContent=I.name+" — "+r.length+" POINT SAMPLES × "+I.unit+(H?" · IDW ESTIMATE":""),$e("grid-range").textContent=I.min+" — "+I.max+" "+I.unit+" (colors clipped)";const K={temp:"blue, #65bce0, #f7e16a, #e44c40",rain:"blue, #58aeff, #71db8b, #ffa33d, #e43e36",wind:"#1ce2b7, #45bdef, #faee67, #ef5b38",cloud:"#305a93, #6da4cb, #cfbfd7, #eee5e2"};$e("grid-color-scale").style.background="linear-gradient(90deg,"+K[d]+")",_("ECMWF IFS ~9 km model, "+r.length+" point samples · "+s[0].hourly.time[R]+" UTC"+(F?" · "+F+" missing":"")+". "+(H?"Color shading is IDW INTERPOLATION, not the ECMWF raster.":"Squares show point samples, not model grid cells.")+(f?" White arrows show wind FLOW.":"")),e.scene.requestRender()}function P(R,I=3){const D=.08084800574919153,F=9/(111.32*Math.max(.2,Math.cos(R.lat*Math.PI/180))),H=[],G=(I-1)/2;for(let K=-G;K<=G;K++)for(let B=-G;B<=G;B++){const X=m(R.lat+K*D,-85,85),Q=(R.lon+B*F+540)%360-180;H.push({lat:X,lon:Q,w:Q-F*.49,e:Q+F*.49,s:X-D*.49,n:X+D*.49})}return H}async function S(){if(!n)return;const R=y(),I=Date.now();if(I-c<45e3){_("Rate protection: wait 45 seconds between grid requests. Switch layers freely without another request.");return}const D=Number($e("grid-size").value)===5?5:3;if(Math.abs(R.lat)>75||Math.abs(R.lon)>175){_("Regional sampling is limited to 75° latitude and 175° longitude to avoid polar/dateline wrap errors.");return}const F=P(R,D),H=new URLSearchParams({latitude:F.map(K=>K.lat.toFixed(5)).join(","),longitude:F.map(K=>K.lon.toFixed(5)).join(","),hourly:"temperature_2m,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover",models:"ecmwf_ifs",forecast_hours:"24",timezone:"UTC"});o?.abort(),o=new AbortController;const G=o.signal;c=I,$e("grid-sample").disabled=!0,_("Requesting "+F.length+" forecast points in one explicit Open-Meteo call (approximately 9 km apart)…");try{const K=await fetch("https://api.open-meteo.com/v1/ecmwf?"+H.toString(),{signal:G,cache:"no-store"});if(!K.ok)throw new Error("HTTP "+K.status);const B=await K.json();if(!n||G.aborted)return;if(!Array.isArray(B)||B.length!==F.length||B.some(X=>!X.hourly?.time?.length))throw new Error("Incomplete multi-point forecast");s=B,r=F,h=R,l=Date.now(),$e("grid-count-label").textContent=F.length+" POINT SAMPLES",b()}catch(K){if(K.name==="AbortError"||!n)return;_("Weather grid unavailable: "+(K?.message||"unknown error")+". No fabricated data shown.")}finally{$e("grid-sample").disabled=!1}}function M(){if(!h){_("First click SAMPLE 9 to fetch a grid.");return}e.camera.flyTo({destination:i.Cartesian3.fromDegrees(h.lon,h.lat,2e4+Math.sqrt(r.length)*11e3),orientation:{heading:0,pitch:i.Math.toRadians(-90),roll:0},duration:1.6})}return $e("grid-size").addEventListener("change",()=>{const R=Number($e("grid-size").value)===5?25:9;$e("grid-sample").textContent="◎ SAMPLE "+R,s&&_("Selected "+R+" points for NEXT request. Existing samples remain until then.")},{signal:t.signal}),$e("grid-sample").addEventListener("click",S,{signal:t.signal}),$e("grid-fit").addEventListener("click",M,{signal:t.signal}),$e("grid-vectors").addEventListener("change",b,{signal:t.signal}),$e("grid-tracers").addEventListener("change",b,{signal:t.signal}),$e("grid-smooth").addEventListener("change",b,{signal:t.signal}),$e("grid-labels").addEventListener("change",b,{signal:t.signal}),$e("grid-clear").addEventListener("click",C,{signal:t.signal}),$e("grid-export").addEventListener("click",()=>{if(!s?.length||!r?.length){_("Use SAMPLE 9/25 before exporting station data.");return}const R=Math.min(23,Math.max(0,Number($e("studio-hour").value)||0)),I=s[0]?.hourly?.time?.[R],D=X=>X==null||!Number.isFinite(Number(X))?null:Number(X),F=["temperature_2m","precipitation","wind_speed_10m","wind_direction_10m","cloud_cover"],H={type:"FeatureCollection",name:"AEROVIEW ECMWF point samples",features:r.map((X,Q)=>({type:"Feature",geometry:{type:"Point",coordinates:[X.lon,X.lat]},properties:Object.fromEntries([["source","Open-Meteo ECMWF IFS"],["forecast_time_utc",I],["spacing_km_approx",9],["sample_type","point_forecast_not_native_grid"],...F.map(re=>[re,D(s[Q]?.hourly?.[re]?.[R])])])}))},G=new Blob([JSON.stringify(H,null,2)],{type:"application/geo+json"}),K=URL.createObjectURL(G),B=document.createElement("a");B.href=K,B.download="aeroview-weather-"+r.length+"-stations.geojson",document.body.appendChild(B),B.click(),B.remove(),setTimeout(()=>URL.revokeObjectURL(K),1e4),_("Exported "+r.length+" sampled forecasts as GeoJSON; not a continuous model raster.")},{signal:t.signal}),$e("grid-layer").addEventListener("change",R=>{d=R.target.value,b()},{signal:t.signal}),$e("studio-hour").addEventListener("input",b,{signal:t.signal}),{clear:C,render:b,diagnostics:()=>({stations:s?.length||0,selectedSize:Number($e("grid-size").value),layer:d,windArrows:f,shadedCells:p,smooth:$e("grid-smooth").checked,tracers:g.diagnostics(),values:w(Number($e("studio-hour").value)||0),lastCenter:h,loadedAt:l}),destroy(){t.abort(),n=!1,g.destroy(),o?.abort(),v(),$e("grid-legend").hidden=!0}}}const sn=i=>document.getElementById(i),Ag=3*1024*1024,xh=500,Mh=18e3,ec=i=>{if(i==null)return null;const t=String(i).trim().match(/^(-?\d+(?:\.\d+)?)\s*(m|ft|feet)?$/i);if(!t)return null;const n=Number(t[1])*(t[2]&&/ft|feet/i.test(t[2])?.3048:1);return Number.isFinite(n)?n:null};function wg(i){const e=i||{},t=ec(e.height??e["building:height"]);if(t!==null)return{height:Math.max(2,Math.min(450,t)),assumed:!1};const n=ec(e["building:levels"]??e.levels);return n!==null?{height:Math.max(3,Math.min(450,n*3)),assumed:!0}:{height:12,assumed:!0}}function Sh(i){return!Array.isArray(i)||i.length<4||i.length>1800?!1:i.every(e=>Array.isArray(e)&&e.length>=2&&e.length<=4&&typeof e[0]=="number"&&typeof e[1]=="number"&&Number.isFinite(e[0])&&Number.isFinite(e[1])&&e[0]>=-180&&e[0]<=180&&e[1]>=-85&&e[1]<=85)}function Rg(i){if(i?.type!=="FeatureCollection"||!Array.isArray(i.features))throw new Error("Expected a GeoJSON FeatureCollection.");const e=[];let t=0;for(const n of i.features){const r=n?.geometry;if(!r||!["Polygon","MultiPolygon"].includes(r.type))continue;const s=r.type==="Polygon"?[r.coordinates]:r.coordinates;if(!Array.isArray(s))throw new Error("Invalid polygon coordinates.");const a=wg(n.properties);for(const o of s){if(!Array.isArray(o)||!o.length||!o.every(Sh))throw new Error("Invalid polygon ring.");const l=o.reduce((h,d)=>h+d.length,0);if(t+=l,t>Mh||e.length>=xh)throw new Error("Building count/vertices exceed demo limits.");const c=o[0].reduce((h,d)=>(h[0]+=d[0],h[1]+=d[1],h),[0,0]);c[0]/=o[0].length,c[1]/=o[0].length,e.push({rings:o.map(h=>h.map(d=>[d[0],d[1]])),height:a.height,assumed:a.assumed,center:c,name:String(n.properties?.name||"Building").slice(0,60)})}}if(!e.length)throw new Error("No Polygon or MultiPolygon building footprints found.");return e}function Cg({C:i,viewer:e}){const t=new AbortController;let n=!0,r=[],s=!0,a=[];const o=_=>{sn("buildings-status").textContent=_},l=_=>_.flatMap(m=>[m[0],m[1]]);function c(_){const m=i.Cartesian3.fromDegreesArray(l(_.rings[0])),u=_.rings.slice(1).map(v=>new i.PolygonHierarchy(i.Cartesian3.fromDegreesArray(l(v)))),T=_.height,y=i.Color.fromHsl(.56-Math.min(T/600,.12),.13,.57,.72);return e.entities.add({name:_.name+(_.assumed?" (height estimated)":" (declared height)"),polygon:{hierarchy:new i.PolygonHierarchy(m,u),height:0,extrudedHeight:T,closeTop:!0,closeBottom:!0,material:y,outline:!0,outlineColor:i.Color.fromCssColorString("#dbe7ea").withAlpha(.63)}})}function h(){r.forEach(_=>e.entities.remove(_)),r=[],a=[],e.scene.requestRender()}async function d(_){if(_){if(_.size>Ag){o("GeoJSON must be ≤3 MB.");return}try{const m=Rg(JSON.parse(await _.text()));if(!n)return;h(),a=m;for(const T of a)r.push(c(T));s=!0,sn("buildings-toggle").textContent="◉ HIDE";const u=a.filter(T=>T.assumed).length;o("Loaded "+r.length+" GIS building footprints; "+u+" heights estimated from levels or assumed 12 m. NOT photogrammetry."),e.scene.requestRender()}catch(m){o("GeoJSON rejected: "+(m?.message||"invalid data")+". Existing geometry retained.")}}}sn("buildings-import").addEventListener("click",()=>sn("buildings-file").click(),{signal:t.signal}),sn("buildings-file").addEventListener("change",async _=>{const m=_.target.files?.[0];try{await d(m)}finally{_.target.value=""}},{signal:t.signal}),sn("buildings-toggle").addEventListener("click",()=>{if(!r.length){o("Import a building footprint file first.");return}s=!s,r.forEach(_=>_.show=s),sn("buildings-toggle").textContent=s?"◉ HIDE":"◉ SHOW",e.scene.requestRender()},{signal:t.signal}),sn("buildings-clear").addEventListener("click",()=>{h(),s=!0,sn("buildings-toggle").textContent="◉ HIDE",o("Local building extrusions removed; background map unchanged.")},{signal:t.signal});function f(){return{schema:"aeroview-buildings-v1",visible:s,items:a.map(_=>({rings:_.rings.map(m=>m.map(u=>u.slice())),height:_.height,assumed:_.assumed,name:_.name}))}}function p(_){if(_==null)return{schema:"aeroview-buildings-v1",visible:!0,items:[]};if(_.schema!=="aeroview-buildings-v1"||typeof _.visible!="boolean"||!Array.isArray(_.items)||_.items.length>xh)throw new Error("Invalid building snapshot schema.");let m=0;const u=_.items.map(T=>{if(!T||!Array.isArray(T.rings)||!T.rings.length||!T.rings.every(Sh)||typeof T.height!="number"||!Number.isFinite(T.height)||T.height<2||T.height>450||typeof T.assumed!="boolean"||typeof T.name!="string"||T.name.length>100)throw new Error("Invalid building footprint or height in project.");if(m+=T.rings.reduce((y,v)=>y+v.length,0),m>Mh)throw new Error("Project exceeds building vertex limit.");return{rings:T.rings.map(y=>y.map(v=>[v[0],v[1]])),height:T.height,assumed:T.assumed,name:T.name.slice(0,60)}});return{schema:"aeroview-buildings-v1",visible:_.visible,items:u}}function g(_){const m=p(_);h(),a=m.items,s=m.visible;for(const u of a)r.push(c(u));for(const u of r)u.show=s;sn("buildings-toggle").textContent=s?"◉ HIDE":"◉ SHOW",o("Restored "+r.length+" project building extrusions ("+a.filter(u=>u.assumed).length+" height estimates)."),e.scene.requestRender()}return{exportSnapshot:f,validateSnapshot:p,restoreSnapshot:g,clear:()=>{h(),s=!0,sn("buildings-toggle").textContent="◉ HIDE"},diagnostics:()=>({count:r.length,visible:s,assumed:a.filter(_=>_.assumed).length}),destroy(){t.abort(),n=!1,h()}}}const Li=i=>document.getElementById(i);function Pg({weather:i}){const e=new AbortController;let t=null,n=!1,r=!1,s=0;const a=Li("studio-hour"),o=Li("timeline-play"),l=Li("timeline-speed"),c=Li("timeline-status"),h=Li("timeline-loop");function d(T){r||(c.textContent=T)}function f(T="Paused. Weather data remains cached."){t!==null&&clearInterval(t),t=null,n=!1,o.textContent="▶ PLAY 24H",o.setAttribute("aria-pressed","false"),d(T)}function p(T){const y=Number(a.max)||23;a.value=String(Math.max(0,Math.min(y,T))),a.dispatchEvent(new Event("input",{bubbles:!0}))}function g(){if(!n||r)return;if(document.hidden){f("Paused automatically because the browser tab is hidden.");return}if(!i?.diagnostics()?.loaded){f("Point forecast is not loaded yet; no synthetic data displayed.");return}const T=Number(a.value),y=Number(a.max)||23;if(T>=y){if(!h.checked){f("Reached the final forecast hour.");return}p(0)}else p(T+1);s++,d("Hourly forecast "+(Number(a.value)+1)+" / "+(y+1)+" · buffered playback · no extra API requests.")}function _(){if(!r){if(n){f();return}if(!i?.diagnostics()?.loaded){d("Load a real point forecast before starting timeline playback.");return}n=!0,o.textContent="Ⅱ PAUSE",o.setAttribute("aria-pressed","true"),t=setInterval(g,Number(l.value)),d("Playback started. Each tick advances one forecast hour—this is not continuous time interpolation.")}}o.addEventListener("click",_,{signal:e.signal}),Li("timeline-reset").addEventListener("click",()=>{p(0),f("Forecast timeline reset to first available hour.")},{signal:e.signal}),l.addEventListener("change",()=>{n&&(clearInterval(t),t=setInterval(g,Number(l.value)))},{signal:e.signal});function m(){document.hidden&&n&&f("Paused when tab became hidden.")}function u(T){!n||T.isTrusted===!1||f("Paused after manual timeline change.")}return document.addEventListener("visibilitychange",m,{signal:e.signal}),a.addEventListener("change",u,{signal:e.signal}),{diagnostics:()=>({playing:n,hour:Number(a.value),speedMs:Number(l.value),steps:s,loop:h.checked}),destroy(){e.abort(),f("Timeline stopped."),r=!0,document.removeEventListener("visibilitychange",m),a.removeEventListener("change",u)}}}const Lg="1.145.0",Xa=`https://cdn.jsdelivr.net/npm/cesium@${Lg}/Build/Cesium/`,zs=Object.freeze({goldcoast:{name:"GOLD COAST",lat:-28.002,lon:153.43,alt:2100},hcmc:{name:"HỒ CHÍ MINH",lat:10.7769,lon:106.7009,alt:2200},singapore:{name:"SINGAPORE",lat:1.284,lon:103.851,alt:2100},nyc:{name:"NEW YORK",lat:40.7128,lon:-74.006,alt:2400},tokyo:{name:"TOKYO",lat:35.6812,lon:139.7671,alt:2400}}),Xe=i=>document.getElementById(i);let Di;function Dg(){return window.Cesium?.Viewer?Promise.resolve(window.Cesium):Di||(Di=new Promise((i,e)=>{if(window.CESIUM_BASE_URL=Xa,!document.getElementById("cesium-styles")){const a=document.createElement("link");a.id="cesium-styles",a.rel="stylesheet",a.href=Xa+"Widgets/widgets.css",document.head.appendChild(a)}const t=document.createElement("script");t.id="cesium-runtime",t.async=!0,t.src=Xa+"Cesium.js";let n=!1;const r=a=>{n||(n=!0,clearTimeout(s),a?(Di=void 0,t.remove(),e(a)):window.Cesium?.Viewer?i(window.Cesium):(Di=void 0,e(new Error("Cesium was not initialized"))))},s=setTimeout(()=>r(new Error("Cesium download timed out; check your connection")),45e3);t.onload=()=>r(),t.onerror=()=>r(new Error("Unable to load Cesium from the CDN")),document.head.appendChild(t)}),Di)}function tc(i,e,t,n){const r=zs[t]||zs.goldcoast,s=document.querySelector(".coordinates");if(s){const a=Math.abs(r.lat).toFixed(3)+"° "+(r.lat>=0?"N":"S"),o=Math.abs(r.lon).toFixed(3)+"° "+(r.lon>=0?"E":"W"),l=document.createElement("strong");l.textContent=r.name+" / "+(n==="atlas"?"WORLD ATLAS":"PHOTOREAL 3D"),s.replaceChildren(document.createTextNode(a+" · "+o),document.createElement("br"),l)}e.camera.setView({destination:i.Cartesian3.fromDegrees(r.lon,r.lat,n==="atlas"?r.alt*3.5:r.alt),orientation:{heading:i.Math.toRadians(0),pitch:i.Math.toRadians(-58),roll:0}}),e.scene.requestRender()}function Ig(i,e){const t=new i.Viewer("earth-view",{animation:!1,timeline:!1,baseLayerPicker:!1,baseLayer:!1,globe:e==="photoreal"?!1:void 0,geocoder:!1,homeButton:!1,sceneModePicker:!1,selectionIndicator:!1,infoBox:!1,navigationHelpButton:!1,fullscreenButton:!1,vrButton:!1,requestRenderMode:!0,maximumRenderTimeChange:1/0});if(e==="atlas"){const n=new i.OpenStreetMapImageryProvider({url:"https://tile.openstreetmap.org/",credit:"© OpenStreetMap contributors",minimumLevel:0,maximumLevel:18});t.imageryLayers.addImageryProvider(n)}return t}function Ug({onActivate:i=()=>{},onDeactivate:e=()=>{}}={}){let t=null,n=null,r=!1,s=0,a=null,o=!1,l=0,c=null,h="goldcoast",d=null,f=null,p=null,g=null,_=null;const m=document.querySelector(".coordinates")?.innerHTML,u=Xe("earth-dialog"),T=Xe("earth-key"),y=Xe("earth-osm-key"),v=Xe("earth-message"),C=Xe("earth-launch"),w=Xe("earth-view"),b=Xe("earth-hud"),P=()=>{T.value="",Xe("earth-paid-confirm").checked=!1,y.value="",Xe("earth-osm-confirm").checked=!1},S=()=>document.querySelector('input[name="earth-layer"]:checked')?.value||"atlas",M=(X,Q=!1)=>{v.textContent=X,v.classList.toggle("is-error",Q)},R=()=>{Xe("earth-key-section").hidden=S()!=="photoreal",Xe("earth-osm-section").hidden=S()!=="osm3d",M("")},I=()=>{r||(u.hidden=!1,R(),Xe("earth-launch").focus())},D=()=>{r||(u.hidden=!0,P(),M(""))};function F(){l++,c!==null&&clearTimeout(c),c=null,t&&!t.isDestroyed()&&t.camera.cancelFlight(),Xe("earth-flight").textContent="▶ CINEMATIC FLIGHT"}function H(){F();try{_?.destroy(),g?.destroy(),p?.destroy(),d?.destroy(),f?.destroy()}catch(Q){console.warn("Studio cleanup:",Q.name)}_=null,g=null,p=null,d=null,f=null,Xe("studio").hidden=!0;try{t&&!t.isDestroyed()&&t.destroy()}catch(Q){console.warn("Cesium cleanup:",Q.message)}t=null,n=null,o&&window.Cesium?.Ion&&(window.Cesium.Ion.defaultAccessToken=a,o=!1,a=null),w.replaceChildren(),w.hidden=!0,b.hidden=!0,Xe("earth-attribution").hidden=!0;const X=document.querySelector(".coordinates");X&&m&&(X.innerHTML=m),document.body.classList.remove("earth-mode")}const G=()=>{s++,H(),P(),e()};async function K(){if(r)return;const X=S(),Q=Xe("earth-city").value||"goldcoast",re=T.value.trim(),ce=y.value.trim();if(X==="osm3d"){if(!/^[A-Za-z0-9._-]{30,2048}$/.test(ce)){M("A valid Cesium ion assets:read access token is required.",!0);return}if(!Xe("earth-osm-confirm").checked){M("Confirm that Cesium ion streaming quota will be used.",!0);return}}if(X==="photoreal"){if(!/^[-\w]{12,256}$/.test(re)){M("A valid Google Map Tiles API key is required.",!0);return}if(!Xe("earth-paid-confirm").checked){M("Confirm that you understand this API may incur charges.",!0);return}}r=!0;const Re=++s;C.disabled=!0;const Ie=C.textContent;C.textContent="PREPARING THE GLOBE…",M("Loading the Cesium 3D engine. The procedural city remains available.");try{const ye=await Dg();if(Re!==s)return;if(t&&H(),w.hidden=!1,t=Ig(ye,X),tc(ye,t,Q,X),X==="osm3d"){a=ye.Ion.defaultAccessToken,o=!0,ye.Ion.defaultAccessToken=ce;const $=await ye.createWorldTerrainAsync();if(Re!==s)return;t.terrainProvider=$;const de=await ye.createOsmBuildingsAsync({showCreditsOnScreen:!0,maximumScreenSpaceError:20});if(Re!==s)return;t.scene.primitives.add(de),t.scene.requestRender()}if(X==="photoreal"){const $="https://tile.googleapis.com/v1/3dtiles/root.json?key="+encodeURIComponent(re),de=await ye.Cesium3DTileset.fromUrl($,{showCreditsOnScreen:!0,maximumScreenSpaceError:18,dynamicScreenSpaceError:!0});if(Re!==s)return;t.scene.primitives.add(de),t.scene.globe.show=!1,t.scene.requestRender()}n=X,h=Q,document.body.classList.add("earth-mode"),b.hidden=!1,Xe("earth-attribution").hidden=X!=="atlas",Xe("earth-status").textContent=X==="atlas"?"WORLD ATLAS · OSM MAP ON 3D GLOBE":X==="osm3d"?"REAL 3D BUILDINGS · CESIUM OSM":"PHOTOREAL 3D · GOOGLE MAP TILES",Xe("earth-open").textContent="◎  EARTH MODE",u.hidden=!0,P(),M(""),i(X),Xe("studio").hidden=!1;const Y=X!=="atlas"||window.matchMedia("(max-width:800px)").matches;Xe("studio").classList.toggle("collapsed",Y),Xe("studio-toggle").setAttribute("aria-expanded",String(!Y)),d=Eg({C:ye,viewer:t}),p=bg({C:ye,viewer:t}),_=Pg({weather:d}),g=Cg({C:ye,viewer:t}),f=yg({C:ye,viewer:t,mode:X,buildings:g})}catch(ye){console.warn("AEROVIEW Earth viewer could not start:",ye?.name||"loading error"),H(),e(),M(X==="photoreal"?"Photoreal tiles could not load. Verify Google Map Tiles API, billing, key restrictions and regional coverage.":X==="osm3d"?"OSM 3D did not load. Verify Cesium ion token, asset permissions, quota and connectivity.":"Unable to open the free atlas. Verify network/WebGL/CDN access and try again.",!0)}finally{r=!1,C.disabled=!1,C.textContent=Ie}}function B(){if(!t||t.isDestroyed()||!window.Cesium)return;F();const X=window.Cesium,Q=zs[h]||zs.goldcoast,re=h==="goldcoast",ce=re?[[-.012,.014,1350],[-.002,.011,950],[.01,.013,1350]]:[[-.011,.011,1550],[0,.008,980],[.01,.012,1350]],Re=++l;Xe("earth-flight").textContent="Ⅱ FLIGHT RUNNING",Xe("earth-status").textContent="CINEMATIC CAMERA · REAL GEOGRAPHIC COORDINATES";function Ie(ye){if(!t||t.isDestroyed()||Re!==l)return;if(ye>=ce.length){Xe("earth-flight").textContent="▶ CINEMATIC FLIGHT",Xe("earth-status").textContent="CAMERA PATH FINISHED · REAL COORDINATES";return}const[Y,$,de]=ce[ye],Ae=Q.lat+Y,Me=Q.lon+$;t.camera.flyTo({destination:X.Cartesian3.fromDegrees(Me,Ae,de),orientation:{heading:X.Math.toRadians(re?268:240),pitch:X.Math.toRadians(ye===1?-30:-40),roll:0},duration:3.8,complete:()=>{Re===l&&(c=setTimeout(()=>{c=null,Ie(ye+1)},650))},cancel:()=>{Re===l&&F()}})}Ie(0)}return Xe("earth-flight").addEventListener("click",B),Xe("earth-flight-stop").addEventListener("click",()=>{F(),t&&!t.isDestroyed()&&(Xe("earth-status").textContent="CAMERA PAUSED · DRAG TO EXPLORE")}),Xe("studio-toggle").addEventListener("click",()=>{const X=Xe("studio").classList.toggle("collapsed");Xe("studio-toggle").setAttribute("aria-expanded",String(!X))}),Xe("earth-open").addEventListener("click",I),Xe("earth-launch").addEventListener("click",K),Xe("earth-dialog-close").addEventListener("click",D),Xe("earth-cancel").addEventListener("click",D),u.querySelector(".earth-backdrop").addEventListener("click",D),u.querySelectorAll('input[name="earth-layer"]').forEach(X=>X.addEventListener("change",R)),Xe("earth-exit").addEventListener("click",()=>{G(),Xe("earth-open").textContent="◎  REAL EARTH"}),b.querySelectorAll("[data-city]").forEach(X=>X.addEventListener("click",()=>{if(!t||!window.Cesium)return;const Q=X.dataset.city;F(),h=Q,tc(window.Cesium,t,Q,n),d?.setCity()})),document.addEventListener("keydown",X=>{if(X.key==="Escape"){if(!u.hidden){D();return}t&&(G(),Xe("earth-open").textContent="◎  REAL EARTH")}}),window.__AEROVIEW_EARTH_DIAGNOSTICS__=()=>({active:!!t,mode:n,globe:t?.scene?.globe?.show,imageryLayers:t?.imageryLayers?.length,tileCount:t?.scene?.globe?._surface?._tilesToRender?.length,cameraHeight:t?.camera?.positionCartographic?.height,cameraLatitude:t?.camera?.positionCartographic?.latitude,cameraLongitude:t?.camera?.positionCartographic?.longitude,isViewerDestroyed:t?.isDestroyed?.(),weather:d?.diagnostics(),weatherGrid:p?.diagnostics(),playback:_?.diagnostics(),buildings:g?.diagnostics(),studio:f?.diagnostics()}),{get active(){return!!t},get mode(){return n},close:G}}function Ng(i){const e=[{frame:"#d4d8d6",glass:"#80aab4",shade:"#365b70",reflect:"#f0f5f1"},{frame:"#d7cbb9",glass:"#a4c5d0",shade:"#42617b",reflect:"#fbf1e3"},{frame:"#b3c9ce",glass:"#4380a2",shade:"#153d62",reflect:"#c8eef4"},{frame:"#e4ded0",glass:"#7fafbb",shade:"#406f89",reflect:"#f6f6df"},{frame:"#d5d5c8",glass:"#789c9c",shade:"#375d67",reflect:"#cce8df"}];let t=44213;const n=()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296;return e.map((r,s)=>{const a=document.createElement("canvas");a.width=256,a.height=512;const o=a.getContext("2d");o.fillStyle=r.frame,o.fillRect(0,0,256,512);const l=s===2?9:7,c=s===2?28:22,h=256/l,d=512/c;for(let p=0;p<c;p++)for(let g=0;g<l;g++){const _=g*h+3,m=p*d+3,u=h-6,T=d-6,y=n();o.fillStyle=y<.32?r.glass:y<.7?r.shade:r.reflect,o.fillRect(_,m,u,T),o.fillStyle="rgba(255,255,255,.33)",o.fillRect(_,m,Math.max(1,u*.11),T*.74),o.fillStyle="rgba(5,24,46,.30)",o.fillRect(_+u*.57,m,Math.max(1,u*.07),T),o.fillStyle="rgba(250,255,255,.23)",o.fillRect(_,m,u,1.5),(s===1||s===3)&&(o.fillStyle="rgba(240,243,240,.65)",o.fillRect(g*h,m+T*.83,h,Math.max(2,d*.12)))}for(let p=0;p<l+1;p++)o.fillStyle=s===2?"rgba(233,251,249,.74)":"rgba(230,235,229,.71)",o.fillRect(p*h-1.4,0,2.8,512);o.fillStyle="rgba(255,255,255,.30)",o.fillRect(0,0,256,3);const f=new i.CanvasTexture(a);return f.colorSpace=i.SRGBColorSpace,f.anisotropy=2,f.wrapS=i.RepeatWrapping,f.wrapT=i.RepeatWrapping,new i.MeshStandardMaterial({color:"#eaf1f1",map:f,roughness:s===2?.2:.45,metalness:s===2?.55:.24,envMapIntensity:.55})})}function Fg(i,e,t){const n=new i.MeshBasicMaterial({color:"#253b4a",transparent:!0,opacity:.15,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),r=new i.InstancedMesh(new i.BoxGeometry(1,1,1),n,t.length),s=new i.Object3D;for(let a=0;a<t.length;a++){const o=t[a],l=Math.min(250,o.h*.72),c=Math.max(8,o.w*.7);s.position.set(o.x+l*.27,.42,o.z+l*.3),s.rotation.set(0,-.75,0),s.scale.set(c,.04,l),s.updateMatrix(),r.setMatrixAt(a,s.matrix)}return r.instanceMatrix.needsUpdate=!0,r.frustumCulled=!1,e.add(r),r}function Og(i,e){const t=new i.MeshBasicMaterial({color:"#ebfff8",transparent:!0,opacity:.32,depthWrite:!1,side:i.DoubleSide,polygonOffset:!0,polygonOffsetFactor:-1}),n=[],r=[];for(let o=0;o<4;o++){const l=-178-o*5.7,c=n.length/3;let h=0;for(let d=-2200;d<=2200;d+=22){const f=2.6*Math.sin(d*.018+o*.83)+.8*Math.sin(d*.048-o*.9),p=l+f,g=-.275;if(n.push(d,g,p-1.1,d,g,p+1.1),h){const _=c+(h-1)*2;r.push(_,_+1,_+2,_+1,_+3,_+2)}h++}}const s=new i.BufferGeometry;s.setAttribute("position",new i.Float32BufferAttribute(n,3)),s.setIndex(r),s.computeVertexNormals();const a=new i.Mesh(s,t);return a.frustumCulled=!1,e.add(a),a}const at=i=>document.getElementById(i),Eh=at("world"),yh=at("loading"),ca=at("load-bar");ca.style.width="24%";let nc=2718281;const Lt=()=>(nc=Math.imul(1664525,nc)+1013904223>>>0)/4294967296,Ge=(i,e)=>i+(e-i)*Lt(),Wr=(i,e,t)=>i+(e-i)*t,pn=(i,e=.85,t=0)=>new oa({color:i,roughness:e,metalness:t});let Tt;try{Tt=new _h({canvas:Eh,antialias:window.devicePixelRatio<1.6,alpha:!1,powerPreference:"default"})}catch(i){throw yh.innerHTML='<div class="load-mark">A<span>✦</span></div><p>WEBGL IS UNAVAILABLE ON THIS DEVICE</p><p>Try Chrome/Edge with hardware acceleration enabled.</p>',i}Tt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.2));Tt.setSize(window.innerWidth,window.innerHeight);Tt.outputColorSpace=Bt;Tt.toneMapping=mo;Tt.toneMappingExposure=1.25;const ot=new nh;ot.background=new xe("#b6dbeb");ot.fog=new ia("#b9dce5",14e-5);const on=new Xt(62,window.innerWidth/window.innerHeight,.5,9500);on.position.set(690,360,370);const Mt=new rg(on,Eh);Mt.enableDamping=!0;Mt.dampingFactor=.055;Mt.maxPolarAngle=Math.PI/2.05;Mt.minDistance=18;Mt.maxDistance=1900;Mt.target.set(-85,54,-95);Mt.screenSpacePanning=!0;Mt.rotateSpeed=.55;Mt.zoomSpeed=.85;Mt.panSpeed=.65;const Th=new oh("#e0f3ff","#9ba88d",2.65);ot.add(Th);const lr=new Fo("#fff8e7",3.45);lr.position.set(-650,950,-450);ot.add(lr);const bh=new Fo("#d4e8ef",1.1);bh.position.set(600,250,300);ot.add(bh);const ir={top:{value:new xe("#4288bd")},horizon:{value:new xe("#dceef2")},sunDir:{value:new N(-.4,.33,-1).normalize()},sunColor:{value:new xe("#fff0c8")}},Bg=new dt(new gr(5500,32,20),new fn({side:Dt,depthWrite:!1,fog:!1,uniforms:ir,vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vDir;uniform vec3 top;uniform vec3 horizon;uniform vec3 sunDir;uniform vec3 sunColor;void main(){vec3 d=normalize(vDir);float a=smoothstep(-0.18,0.79,d.y);vec3 c=mix(horizon,top,a);float s=pow(max(dot(d,normalize(sunDir)),0.),540.);c+=sunColor*s*.7;float glow=pow(max(dot(d,normalize(sunDir)),0.),24.);c+=sunColor*glow*.12;gl_FragColor=vec4(c,1.0);}"}));ot.add(Bg);const zg=pn("#a9af8a",1),ko=new dt(new en(4500,2500),zg);ko.rotation.x=-Math.PI/2;ko.position.set(0,-.65,1050);ot.add(ko);const kg=pn("#83a37a"),Hg=pn("#f1e1b5"),ha=new oa({color:"#686b67",roughness:1}),Ah=pn("#b6b6a5"),Ho=new dt(new en(4500,50),Hg);Ho.rotation.x=-Math.PI/2;Ho.position.set(0,.16,-168);ot.add(Ho);const Go=new dt(new en(4500,17),Ah);Go.rotation.x=-Math.PI/2;Go.position.set(0,.24,-127);ot.add(Go);const Vo=new dt(new en(4500,8),ha);Vo.rotation.x=-Math.PI/2;Vo.position.set(0,.27,-114);ot.add(Vo);const ks={time:{value:0},deep:{value:new xe("#194c64")},shallow:{value:new xe("#397d85")},reflection:{value:new xe("#ffe5b5")}},Wo=new dt(new en(5e3,4700,1,1),new fn({uniforms:ks,side:zt,depthWrite:!0,vertexShader:"varying vec2 vXZ;void main(){vec4 p=modelMatrix*vec4(position,1.0);vXZ=p.xz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:"varying vec2 vXZ;uniform float time;uniform vec3 deep;uniform vec3 shallow;uniform vec3 reflection;void main(){float dist=max(0.0,-vXZ.y-175.0);float seaMix=smoothstep(40.,1050.,dist);vec3 color=mix(shallow,deep,seaMix);float wave=sin(vXZ.x*.008+vXZ.y*.013+time*.58)*sin(vXZ.y*.011-vXZ.x*.009-time*.39);color+=vec3(.02,.06,.065)*wave;float foamBand=exp(-dist/26.);float surf=sin(vXZ.x*.050+vXZ.y*.08+time*1.4)+sin(vXZ.x*.028-time*.94);float foam=foamBand*smoothstep(.07,.95,surf)*.74;float sunRipple=pow(max(0.,sin(vXZ.x*.025+vXZ.y*.034+time*.7)*sin(vXZ.y*.016-time*.42)),8.)*.045;color=mix(color,vec3(.96,1.,.95),foam);color+=reflection*sunRipple;gl_FragColor=vec4(color,1.0);}"}));Wo.rotation.x=-Math.PI/2;Wo.position.set(0,-.32,-2523);ot.add(Wo);Og(Bo,ot);function ua(i){return 155+Math.sin(i*.008+1.25)*84+Math.sin(i*.016)*25}const lo=[];for(let i=-130;i<=1250;i+=16)lo.push(new N(ua(i),0,i));const wh=[],Rh=[],Ch=[];for(let i=0;i<lo.length;i++){const e=lo[i],t=ua(e.z);if(wh.push(t-32,.32,e.z,t+32,.32,e.z),Rh.push(0,i/5,1,i/5),i>0){let n=i*2;Ch.push(n-2,n-1,n,n-1,n+1,n)}}const _r=new Yt;_r.setAttribute("position",new yt(wh,3));_r.setAttribute("uv",new yt(Rh,2));_r.setIndex(Ch);_r.computeVertexNormals();const Gg=new dt(_r,new oa({color:"#305d65",metalness:.24,roughness:.3,side:zt}));ot.add(Gg);const Ph=pn("#b5b39f"),Lh=new en(1,1),Hs=new Map;function fi(i,e,t,n,r,s){const a=new dt(Lh,s);a.rotation.x=-Math.PI/2,a.scale.set(i,e,1),a.position.set(t,r,n);const o=Hs.get(s)||[];return o.push(a),Hs.set(s,o),a}function Vg(){for(const[i,e]of Hs){const t=e.map(r=>{r.updateMatrix();const s=Lh.clone();return s.applyMatrix4(r.matrix),s}),n=_g(t,!1);if(t.forEach(r=>r.dispose()),!n)throw new Error("Unable to merge ground geometry");ot.add(new dt(n,i))}Hs.clear()}ca.style.width="46%";for(let i=-1e3;i<=1e3;i+=43)fi(7,1165,i,440,.3,ha),Math.round(i/43)%2===0&&fi(.32,1165,i,440,.315,Ph);for(let i=-91;i<=1040;i+=42)fi(2130,7,0,i,.31,ha),Math.round(i/42)%2===0&&fi(2130,.3,0,i,.32,Ph);const Gi=[],Dh=[[-270,130,100,125],[-450,360,125,110],[460,150,120,85],[630,475,105,100],[-670,630,160,150],[375,760,120,120]];for(const[i,e,t,n]of Dh){fi(t,n,i,e,.33,kg);for(let r=0;r<12;r++){let s=i+Ge(-t*.45,t*.45),a=e+Ge(-n*.45,n*.45);Yo(s,a,.35)}}const Ih=new Xn(1,1,1),Wg=Ng(Bo);let Gs=[[],[],[],[],[]],vr=[];function Uh(i,e){return Dh.some(([t,n,r,s])=>Math.abs(i-t)<r/2+10&&Math.abs(e-n)<s/2+10)}function Xo(i,e){return Math.abs(i-ua(e))<48}for(let i=-980;i<=980;i+=43)for(let e=-70;e<=1030;e+=42){const t=i+Ge(-7,7),n=e+Ge(-6,6);if(Xo(t,n)||Uh(t,n)||Lt()<.065)continue;const s=Math.exp(-Math.pow((t+40)/500,2))*Math.exp(-Math.pow((n-95)/380,2))*(1.15+Lt()*.5);let a;Lt()<s*.21?a=Ge(78,198):Lt()<s*.42?a=Ge(34,93):a=Ge(7,26),a*=n>540?.6:1;const o=Ge(12,24),l=Ge(12,25),c=Lt()<s*.22?2:Math.floor(Lt()*5),h={x:t,z:n,w:o,d:l,h:a,color:new xe().setHSL(.52+Ge(-.06,.08),Ge(.06,.18),Ge(.42,.69))};Gs[c].push(h),a>75&&(vr.push(h),Lt()<.3)}for(let i=0;i<32;i++){const e=i*2.39996,t=Math.sqrt(i)*22,n=-135+Math.cos(e)*t,r=50+Math.sin(e)*t;if(Xo(n,r))continue;const s=Ge(105,240);let a={x:n,z:r,w:Ge(13,22),d:Ge(14,23),h:s,color:new xe().setHSL(Ge(.51,.57),.16,Ge(.54,.7))};Gs[i%3===0?3:2].push(a),vr.push(a)}const Ke=new Et;let qo=0;for(let i=0;i<Gs.length;i++){const e=Gs[i];qo+=e.length;const t=new qn(Ih,Wg[i],e.length);for(let n=0;n<e.length;n++){const r=e[n];Ke.position.set(r.x,r.h/2+.6,r.z),Ke.scale.set(r.w,r.h,r.d),Ke.rotation.set(0,0,0),Ke.updateMatrix(),t.setMatrixAt(n,Ke.matrix),t.setColorAt(n,new xe().setRGB(.86+Math.min(.12,r.color.r*.18),.87+Math.min(.12,r.color.g*.18),.88+Math.min(.1,r.color.b*.14)))}t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),t.frustumCulled=!1,ot.add(t)}Fg(Bo,ot,vr);const Xg=pn("#637784",.58,.3),qg=pn("#d7c9b2",.34,.6),Kr=[],Zr=[];for(const i of vr)Lt()<.62&&Kr.push({x:i.x,y:i.h+4,z:i.z,w:i.w*.45,h:Ge(3,8),d:i.d*.45}),Lt()<.25&&Zr.push({x:i.x,y:i.h+12,z:i.z,h:Ge(8,17)});if(Kr.length){const i=new qn(Ih,Xg,Kr.length);Kr.forEach((e,t)=>{Ke.position.set(e.x,e.y,e.z),Ke.scale.set(e.w,e.h,e.d),Ke.rotation.set(0,0,0),Ke.updateMatrix(),i.setMatrixAt(t,Ke.matrix)}),i.instanceMatrix.needsUpdate=!0,i.frustumCulled=!1,ot.add(i)}if(Zr.length){const i=new qn(new Xi(.22,.5,1,5),qg,Zr.length);Zr.forEach((e,t)=>{Ke.position.set(e.x,e.y,e.z),Ke.scale.set(1,e.h,1),Ke.rotation.set(0,0,0),Ke.updateMatrix(),i.setMatrixAt(t,Ke.matrix)}),i.instanceMatrix.needsUpdate=!0,i.frustumCulled=!1,ot.add(i)}const pi=[];for(const i of vr){const e=Math.min(33,Math.floor(i.h/5.6));for(let t=1;t<e;t++)for(let n=-1;n<=1;n++)Lt()<.17||(pi.push({x:i.x+n*.24*i.w,y:t*(i.h/e)+1.25,z:i.z+i.d/2+.08}),Lt()<.55&&pi.push({x:i.x+i.w/2+.08,y:t*(i.h/e)+1.25,z:i.z+n*.24*i.d,side:!0}))}const Nh=new pr({color:"#ffe4a9",transparent:!0,opacity:.45,side:zt,depthWrite:!1}),Vs=new qn(new en(1.3,1.65),Nh,pi.length);for(let i=0;i<pi.length;i++){let e=pi[i];Ke.position.set(e.x,e.y,e.z),Ke.scale.set(1,1,1),Ke.rotation.set(0,e.side?Math.PI/2:0,0),Ke.updateMatrix(),Vs.setMatrixAt(i,Ke.matrix),Vs.setColorAt(i,new xe(Lt()<.36?"#ffcf86":"#fff0c8"))}Vs.frustumCulled=!1;ot.add(Vs);for(let i=25;i<970;i+=168){const e=ua(i);fi(98,9,e,i,1,ha);for(const t of[-5,5])fi(98,.9,e,i+t,1.05,Ah)}Vg();const Yg=pn("#806948"),jg=pn("#557e59"),Kg=new Xi(.45,.62,4.5,5),Zg=new aa(3.3,0);function Yo(i,e,t){Gi.push({x:i,z:e,y:t,s:Ge(.7,1.4)})}for(let i=-980;i<980;i+=18)Lt()>.27&&Yo(i,-134,.32);for(let i=0;i<250;i++){const e=Ge(-1020,1020),t=Ge(60,1e3);Uh(e,t)&&!Xo(e,t)&&Yo(e,t,.34)}const jo=new qn(Kg,Yg,Gi.length),Ws=new qn(Zg,jg,Gi.length);for(let i=0;i<Gi.length;i++){const e=Gi[i];Ke.rotation.set(0,0,0),Ke.position.set(e.x,e.y+2.25*e.s,e.z),Ke.scale.set(e.s,e.s,e.s),Ke.updateMatrix(),jo.setMatrixAt(i,Ke.matrix),Ke.position.set(e.x,e.y+5.6*e.s,e.z),Ke.scale.set(e.s,e.s*.72,e.s),Ke.updateMatrix(),Ws.setMatrixAt(i,Ke.matrix),Ws.setColorAt(i,new xe().setHSL(Ge(.25,.37),Ge(.14,.35),Ge(.25,.39)))}jo.frustumCulled=!1;Ws.frustumCulled=!1;ot.add(jo,Ws);const $g=pn("#7b8d7f");for(let i=0;i<19;i++){const e=new dt(new mr(Ge(55,170),Ge(10,55),7),$g);e.position.set(-2100+i*235,-3,Ge(-3250,-2550)),e.rotation.y=Lt()*Math.PI,e.scale.y=Ge(.3,.8),ot.add(e)}const Jg=new rh({color:"#fffbf6",transparent:!0,opacity:.22,depthWrite:!1}),Qg=new gr(1,10,7),da=new qn(Qg,Jg,375);let Fh=0;for(let i=0;i<125;i++){const e=Ge(-2200,2200),t=Ge(260,510),n=Ge(-2200,-550);for(let r=0;r<3;r++)Ke.position.set(e+Ge(-60,60),t+Ge(-7,7),n+Ge(-45,45)),Ke.scale.set(Ge(50,115),Ge(24,47),Ge(40,85)),Ke.rotation.set(0,0,0),Ke.updateMatrix(),da.setMatrixAt(Fh++,Ke.matrix)}da.instanceMatrix.needsUpdate=!0;da.frustumCulled=!1;ot.add(da);const co=[],e_=pn("#c7d7d9"),t_=new pr({color:"#fffaf0",side:zt});for(let i=0;i<11;i++){const e=new Ui,t=new dt(new Xn(Ge(5,12),1.5,3.3),e_);if(e.add(t),Lt()<.6){const n=new dt(new mr(4,13,3),t_);n.rotation.z=Math.PI/2.4,n.position.y=7,e.add(n)}e.position.set(Ge(-900,900),.4,Ge(-750,-230)),e.rotation.y=Ge(-Math.PI,Math.PI),ot.add(e),co.push({node:e,speed:Ge(.25,.8)})}ca.style.width="80%";const qa={skyline:{position:new N(690,360,370),target:new N(-85,54,-95)},overhead:{position:new N(0,780,360),target:new N(0,0,180)},waterfront:{position:new N(130,125,-580),target:new N(-50,65,75)},street:{position:new N(-40,22,275),target:new N(-85,37,-100)}};let an=null,_n=!1,ho=0;function n_(i){qa[i]&&(_n=!1,Mt.enabled=!0,at("cinematic-label").textContent="START FLYOVER",an={position:qa[i].position.clone(),target:qa[i].target.clone()},document.querySelectorAll(".view-btn").forEach(e=>e.classList.toggle("selected",e.dataset.view===i)),xr(i==="overhead"?"TOP DOWN VIEW":i==="waterfront"?"COASTLINE VIEW":i==="street"?"STREET VIEW":"SKYLINE VIEW"))}document.querySelectorAll(".view-btn").forEach(i=>i.addEventListener("click",()=>n_(i.dataset.view)));const uo=new ch;let Oh=45,ic=.12,Bh=!0;function Ko(i){Oh=i;const e=i<17||i>90;let t,n,r,s,a;if(i<=50){const o=i/50;t=new xe("#416a9f").lerp(new xe("#4c9ecb"),o),n=new xe("#ffdcac").lerp(new xe("#daebf4"),o),r=new xe("#fff0d0"),s=new xe("#bbcdcf").lerp(new xe("#cee9ed"),o),a=Wr(.75,3.1,o)}else if(i<=78){const o=(i-50)/28;t=new xe("#347ab5").lerp(new xe("#284f80"),o),n=new xe("#9cc8d9").lerp(new xe("#f0b081"),o),r=new xe("#ffe3af"),s=new xe("#aec8cb").lerp(new xe("#cc9e8c"),o),a=Wr(3.1,1.5,o)}else{const o=Math.min(1,(i-78)/22);t=new xe("#284f80").lerp(new xe("#091b36"),o),n=new xe("#f0b081").lerp(new xe("#324b70"),o),r=new xe("#dba676"),s=new xe("#cc9e8c").lerp(new xe("#273e61"),o),a=Wr(1.5,.26,o)}ir.top.value.copy(t),ir.horizon.value.copy(n),ir.sunColor.value.copy(r),ot.fog.color.copy(s),ot.background.copy(s),ir.sunDir.value.set(-.5,Math.max(.025,(78-i)/70),-1).normalize(),lr.color.copy(r),lr.intensity=a,lr.position.set(-450,Math.max(12,650-i*7),-950),Th.intensity=e?.56:Wr(1.4,2,Math.sin(i/100*Math.PI)),Tt.toneMappingExposure=e?.9:1.35,Nh.opacity=Bh?e?.91:.025:.01,ks.deep.value.copy(new xe(e?"#0b2945":i>76?"#246f9e":"#0079b0")),ks.shallow.value.copy(new xe(e?"#21586d":i>76?"#38a7ac":"#24d3d1")),at("time-label").textContent=i<17?"BLUE HOUR":i<55?"DAYLIGHT":i<79?"GOLDEN HOUR":i<91?"DUSK":"NIGHT",at("time-slider").value=String(i),at("time-slider").style.background=`linear-gradient(90deg,#dabf8d ${i}%,#56606b ${i}%)`}function zh(i){ic=i/100,ot.fog.density=18e-5+ic*.00175,at("haze-label").textContent=i+"%",at("haze-slider").value=String(i),at("haze-slider").style.background=`linear-gradient(90deg,#dabf8d ${i}%,#56606b ${i}%)`}at("time-slider").addEventListener("input",i=>Ko(Number(i.target.value)));at("haze-slider").addEventListener("input",i=>zh(Number(i.target.value)));at("lights-toggle").addEventListener("change",i=>{Bh=i.target.checked,Ko(Oh)});Ko(45);zh(12);function i_(){_n=!_n,an=null,Mt.enabled=!_n,at("cinematic-label").textContent=_n?"STOP FLYOVER":"START FLYOVER",_n&&(ho=0),xr(_n?"CINEMATIC FLYOVER ACTIVE":"FLYOVER PAUSED")}at("cinematic").addEventListener("click",i_);at("explore").addEventListener("click",()=>{_n=!1,Mt.enabled=!0,an=null,at("cinematic-label").textContent="START FLYOVER",xr("FREE EXPLORE: DRAG / SCROLL / PAN")});at("scene-controls-toggle").addEventListener("click",()=>{const i=document.body.classList.toggle("focus-view");at("scene-controls-toggle").setAttribute("aria-expanded",String(!i)),at("scene-controls-toggle").textContent=i?"⚙ SCENE SETTINGS":"✕ CLOSE SETTINGS"});at("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>xr("FULLSCREEN UNAVAILABLE"))});const Ya=["AUTO","ECO","BALANCED","ULTRA"],r_={ECO:.55,BALANCED:1,ULTRA:1.8};let Gn="AUTO",ri=1.2,Ii=0,fo=4;function kh(){const i=Gn==="AUTO"?ri:r_[Gn];return Math.min(window.devicePixelRatio||1.5,i)}function Xs(i=!1){Tt.setPixelRatio(kh()),Tt.setSize(window.innerWidth,window.innerHeight),at("quality-button").textContent="QUALITY · "+Gn,at("quality-button").title="Current internal pixel ratio: "+Tt.getPixelRatio().toFixed(2)+"×; click to cycle",i&&xr("RENDER QUALITY: "+Gn)}at("quality-button").addEventListener("click",()=>{Gn=Ya[(Ya.indexOf(Gn)+1)%Ya.length],Ii=0,fo=uo.elapsedTime+5,Xs(!0)});let rc;function xr(i){const e=at("toast");e.textContent=i,e.classList.add("visible"),clearTimeout(rc),rc=setTimeout(()=>e.classList.remove("visible"),2400)}const s_=at("fps"),a_=at("altitude");let ja=0,Ka=0;function o_(){const i=window.innerWidth,e=window.innerHeight;on.aspect=i/e,on.updateProjectionMatrix(),Tt.setPixelRatio(kh()),Tt.setSize(i,e)}window.addEventListener("resize",o_);function Hh(){const i=Math.min(uo.getDelta(),.07),e=uo.elapsedTime;if(_n){ho+=i;const t=ho,n=new N(-110-t*7,76+Math.sin(t*.2)*9,-48);on.position.set(690-t*11,260+25*Math.cos(t*.14),240+65*Math.sin(t*.1)),on.lookAt(n),Mt.target.copy(n)}else if(an){const t=Math.min(1,i*2.3);on.position.lerp(an.position,t),Mt.target.lerp(an.target,t),on.position.distanceTo(an.position)<1.1&&Mt.target.distanceTo(an.target)<1&&(on.position.copy(an.position),Mt.target.copy(an.target),an=null)}Mt.update(),ks.time.value=e;for(let t=0;t<co.length;t++){const n=co[t];n.node.position.x+=Math.sin(n.node.rotation.y)*i*n.speed*3,n.node.position.z+=Math.cos(n.node.rotation.y)*i*n.speed*3}if(Tt.render(ot,on),ja++,e-Ka>=1){const t=Math.round(ja/(e-Ka));s_.innerHTML=`${t} <small>FPS</small>`,Gn==="AUTO"&&e>=fo&&(t<26?(Ii++,Ii>=2&&ri>.51&&(ri=Math.max(.5,ri-.25),Xs(),Ii=0)):(t>55&&ri<1.2&&(ri=Math.min(1.2,ri+.15),Xs()),Ii=0),fo=e+1),ja=0,Ka=e}a_.innerHTML=`${Math.round(Math.max(on.position.y,0))} <small>M</small>`}Tt.setAnimationLoop(Hh);Ug({onActivate:()=>{_n=!1,Mt.enabled=!1,Tt.setAnimationLoop(null)},onDeactivate:()=>{Mt.enabled=!0,Tt.setAnimationLoop(Hh)}});window.__AEROVIEW_DIAGNOSTICS__=()=>({drawCalls:Tt.info.render.calls,triangles:Tt.info.render.triangles,pixelRatio:Tt.getPixelRatio(),quality:Gn,buildings:qo,windowInstances:pi.length,cloudInstances:Fh});Xs();ca.style.width="100%";requestAnimationFrame(()=>{requestAnimationFrame(()=>yh.classList.add("hidden"))});console.info("AEROVIEW initialized —",qo,"buildings,",pi.length,"windows,",Gi.length,"trees");
