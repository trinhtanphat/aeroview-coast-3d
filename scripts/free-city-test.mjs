import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
page.setDefaultTimeout(22000);
const errors=[],httpFailures=[],requests={free:0,cesium:0,google:0};
page.on('response',r=>{if(r.url().includes('tiles.openfreemap.org')&&r.status()>=400)httpFailures.push({status:r.status(),path:r.url().slice(0,110)});});
page.on('requestfailed',r=>{if(r.url().includes('tiles.openfreemap.org'))httpFailures.push({error:r.failure()?.errorText,url:r.url().slice(0,110)});});
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{
 const u=r.url();
 if(u.includes('tiles.openfreemap.org'))requests.free++;
 if(/assets\.cesium\.com|api\.cesium\.com/.test(u))requests.cesium++;
 if(u.includes('tile.googleapis.com'))requests.google++;
});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#real-3d-open').click();
const shortcutSelectsFreeCity=await page.locator('input[name=earth-layer][value=free3d]').isChecked();
const noKeySection=!(await page.locator('#earth-osm-key').isVisible())&&!(await page.locator('#earth-key').isVisible());
await page.locator('#earth-launch').click();
await page.waitForTimeout(10500);
const early=await page.evaluate(()=>({message:document.querySelector('#earth-message')?.textContent,dialogHidden:document.querySelector('#earth-dialog')?.hidden,worldHidden:document.querySelector('#earth-view')?.hidden,mapCount:document.querySelectorAll('.free-city-viewport canvas').length,freeLoaded:window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.loaded}));
console.log('EARLY_STATE',JSON.stringify(early),'JS_ERRORS',JSON.stringify(errors));
await page.locator('#earth-hud').waitFor({state:'visible',timeout:25000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.loaded,{timeout:65000});
const loaded=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.waitForTimeout(11000);
const afterTiles=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
console.log('AFTER_TILES',JSON.stringify(afterTiles),'FAILURES',JSON.stringify(httpFailures.slice(0,8)));
await page.screenshot({path:'free-city-preview.png'});
const mapImage=await page.locator('.free-city-viewport').evaluate(e=>({width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,canvas:e.querySelectorAll('canvas').length,style:e.querySelector('.maplibregl-control-container')!==null}));
await page.locator('#earth-flight').click();
const during=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.flightRunning);
await page.waitForTimeout(1000);
await page.locator('#earth-flight-stop').click();
const stopped=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.flightRunning);
await page.locator('[data-city=singapore]').click();
await page.waitForTimeout(1600);
const city=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#earth-exit').click();
const exited=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['homepage Real 3D shortcut selects free city',shortcutSelectsFreeCity],
 ['no key required',noKeySection],['free map loaded',loaded.freeMap?.loaded],
 ['uses actual geolocated vector building layer',loaded.freeMap?.buildingLayer],
 ['attribution shown',mapImage.style],
 ['viewport rendered',mapImage.width>=1000&&mapImage.height>=500&&mapImage.canvas>0],
 ['actual building footprints rendered',afterTiles.visibleBuildings>20&&afterTiles.tilesLoaded&&afterTiles.sourceLoaded],
 ['flight plays',during],['flight stops',!stopped],
 ['changes to selected city',Math.abs(city.latitude-1.284)<.1],
 ['no paid service calls',requests.cesium===0&&requests.google===0],
 ['OpenFreeMap tiles requested',requests.free>0],
 ['Earth mode exited',!exited],
 ['no JS pageerrors',errors.length===0]
];
const failed=checks.filter(x=>!x[1]).map(x=>x[0]);
console.log(JSON.stringify({checks:checks.map(([name,pass])=>({name,pass})),failed,requests,mapImage,loaded:loaded.freeMap,afterTiles,city,httpFailures,errors},null,2));
await browser.close();
if(failed.length)process.exit(1);
