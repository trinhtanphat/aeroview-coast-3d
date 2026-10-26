import {chromium} from 'playwright-core';
import {statSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(15000);
const err=[];
page.on('pageerror',e=>err.push(e.message));
await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor();
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForTimeout(6000);
const out={png:null,webm:null,errors:err};
try{
 const pngEvent=page.waitForEvent('download',{timeout:15000});
 await page.locator('#camera-snap').click();
 const d=await pngEvent;
 out.png={name:d.suggestedFilename,size:statSync(await d.path()).size};
}catch(e){out.png={error:String(e.message).slice(0,250),status:await page.locator('#camera-status').innerText()};}
try{
 await page.locator('#camera-record').click();
 await page.waitForTimeout(4500);
 const recStatus=await page.locator('#camera-status').innerText();
 const webmEvent=page.waitForEvent('download',{timeout:17000});
 await page.locator('#camera-record').click();
 const d=await webmEvent;
 out.webm={name:d.suggestedFilename,size:statSync(await d.path()).size,recordingStatus:recStatus};
}catch(e){out.webm={error:String(e.message).slice(0,250),status:await page.locator('#camera-status').innerText()};}
console.log(JSON.stringify(out,null,2));
await browser.close();
if(out.errors.length)process.exit(1);
