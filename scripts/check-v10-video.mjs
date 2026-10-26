import {chromium} from 'playwright-core';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox']});
const page=await browser.newPage({viewport:{width:1366,height:900}});
const u=pathToFileURL(resolve(process.env.DEMO_VIDEO_PATH||'public/demo-flight-v10.webm')).href;
await page.goto(u,{waitUntil:'domcontentloaded',timeout:20000});
await page.waitForFunction(()=>document.querySelector('video')?.readyState>=2,{timeout:20000});
const v=await page.evaluate(async()=>{
 const vid=document.querySelector('video');
 vid.pause();
 await new Promise((resolve,reject)=>{const t=setTimeout(resolve,4000);vid.addEventListener('seeked',()=>{clearTimeout(t);resolve()},{once:true});vid.currentTime=Math.min(1.7,Math.max(.1,vid.duration*.4));});
 return {width:vid.videoWidth,height:vid.videoHeight,duration:vid.duration,currentTime:vid.currentTime,readyState:vid.readyState,error:vid.error?.message||null};
});
// Video frame validated from the actual decoded HTMLVideoElement.
console.log(JSON.stringify(v,null,2));
await browser.close();
if(v.width<300||v.height<300||!Number.isFinite(v.duration)||v.duration<2.5||v.error)process.exit(1);
