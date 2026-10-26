import {chromium} from 'playwright-core';
import {readFileSync} from 'node:fs';
const browser=await chromium.launch({
 executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']
});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(20000);
const errors=[],requestUrls=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(r.url().startsWith('https://api.open-meteo.com/v1/ecmwf'))requestUrls.push(r.url())});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor();
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded===true,{timeout:60000});
await page.locator('#grid-size').selectOption('5');
const button=await page.locator('#grid-sample').innerText();
await page.locator('#grid-sample').click();
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid?.stations===25,{timeout:85000});
const sampled=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
await page.locator('#grid-smooth').check();
const smooth=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
await page.locator('#grid-labels').uncheck();
await page.locator('#grid-layer').selectOption('wind');
const vectors=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
await page.locator('#grid-tracers').check();
const windStart=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.tracers);
await page.waitForTimeout(1300);
const windEnd=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.tracers);
await page.locator('#grid-fit').click();
await page.waitForTimeout(1600);
if(!process.env.TEST_BASE_URL)await page.screenshot({path:'regional-25-preview.png'});
const reqsBefore=requestUrls.length;
await page.locator('#studio-hour').fill('2');
await page.locator('#grid-layer').selectOption('rain');
const rain=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
const dl=page.waitForEvent('download',{timeout:20000});
await page.locator('#grid-export').click();
const download=await dl,geo=JSON.parse(readFileSync(await download.path(),'utf8'));
const stations=geo.features.map(f=>f.geometry?.coordinates?.map(n=>Number(n).toFixed(4)).join(','));
const unique=new Set(stations);
const sourceMetadata=geo.features.every(f=>f.properties?.sample_type==='point_forecast_not_native_grid'&&f.properties?.source==='Open-Meteo ECMWF IFS');
const reqsAfter=requestUrls.length;
await page.locator('#grid-smooth').uncheck();
const normal=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
await page.locator('#grid-clear').click();
const clear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid);
await page.locator('#earth-exit').click();
const closed=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['selector changes sample button',button.includes('25')],
 ['25 point forecast samples',sampled.stations===25],
 ['25 actual display squares',sampled.shadedCells===25],
 ['100 IDW shaded patches',smooth.shadedCells===100&&smooth.smooth],
 ['wind arrow support for 25',vectors.windArrows>=20],
 ['24 animated tracers from at least 20 stations',windStart.active&&windStart.particles===24&&windStart.stations>=20],
 ['particles visibly animate',windEnd.updates>windStart.updates],
 ['hour and layer render without new API queries',reqsAfter===reqsBefore],
 ['25-point station GeoJSON export',geo.features.length===25&&unique.size===25],
 ['GeoJSON transparent provenance',sourceMetadata],
 ['normal grid restored',normal.shadedCells===25&&!normal.smooth],
 ['grid clear releases state',clear.stations===0&&clear.shadedCells===0&&!clear.tracers.active],
 ['Earth exit works',closed],
 ['no JS errors',errors.length===0]
];
const failed=checks.filter(c=>!c[1]).map(c=>c[0]);
console.log(JSON.stringify({button,sampled:{stations:sampled.stations,shadedCells:sampled.shadedCells},
 smooth:{stations:smooth.stations,shadedCells:smooth.shadedCells},
 vectors:{windArrows:vectors.windArrows},windStart,windEnd,
 rain:{layer:rain.layer,shadedCells:rain.shadedCells},reqsBefore,reqsAfter,
 exported:geo.features.length,unique:unique.size,filename:download.suggestedFilename(),
 closed,errors,checks:checks.map(([label,pass])=>({label,pass})),failed},null,2));
await browser.close();
if(failed.length)process.exit(1);
