import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
const errors=[],ionRequests=[],googleRequests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{
 if(r.url().includes('api.cesium.com')||r.url().includes('assets.cesium.com'))ionRequests.push(r.url().replace(/access_token=[^&]*/g,'access_token=REDACTED'));
 if(r.url().includes('tile.googleapis.com'))googleRequests.push('google-tile-request');
});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#earth-open').click();
await page.locator('input[name=earth-layer][value=osm3d]').check();
const osmShown=await page.locator('#earth-osm-key').isVisible();
await page.locator('#earth-launch').click();
const noToken=await page.locator('#earth-message').innerText();
await page.locator('#earth-osm-key').fill('eyJfakefakefakefakefakefakefakefakefakefake');
await page.locator('#earth-launch').click();
const noConsent=await page.locator('#earth-message').innerText();
const noRequestsBeforeOptin={ion:ionRequests.length,google:googleRequests.length};
await page.locator('input[name=earth-layer][value=atlas]').check();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:85000});
await page.locator('#earth-flight').click();
const flightStarted=await page.locator('#earth-flight').innerText();
await page.waitForTimeout(1400);
const posDuring=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().cameraHeight);
await page.locator('#earth-flight-stop').click();
const flightStopped=await page.locator('#earth-flight').innerText();
await page.locator('#earth-exit').click();
const afterExit=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#earth-open').click();
await page.locator('input[name=earth-layer][value=osm3d]').check();
const cleared=await page.locator('#earth-osm-key').inputValue();
await page.locator('#earth-dialog-close').click();
const checks=[
 ['OSM 3D credential form visible',osmShown],
 ['empty ion token rejected',noToken.includes('valid Cesium ion')],
 ['ion token without consent rejected',noConsent.includes('Confirm')],
 ['no unauthenticated ion requests',noRequestsBeforeOptin.ion===0],
 ['no Google requests',noRequestsBeforeOptin.google===0&&googleRequests.length===0],
 ['atlas successfully loads',!!afterExit&&!afterExit.active],
 ['cinematic flight starts',flightStarted.includes('FLIGHT RUNNING')],
 ['flight camera position finite',Number.isFinite(posDuring)],
 ['flight stops',flightStopped.includes('CINEMATIC FLIGHT')],
 ['credentials cleared',cleared===''],
 ['no JavaScript errors',errors.length===0]
];
const failures=checks.filter(x=>!x[1]).map(x=>x[0]);
console.log(JSON.stringify({checks:checks.map(([name,pass])=>({name,pass})),failures,osmShown,noToken,noConsent,
 noRequestsBeforeOptin,flightStarted,flightStopped,posDuring,afterExit:{active:afterExit?.active},errors},null,2));
await browser.close();
if(failures.length)process.exit(1);
