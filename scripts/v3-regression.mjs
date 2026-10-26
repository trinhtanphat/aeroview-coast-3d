import {chromium} from 'playwright-core';
import {readFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(20000);
const errors=[],weatherRequests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(r.url().startsWith('https://api.open-meteo.com/v1/ecmwf'))weatherRequests.push(r.url())});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor();
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded,{timeout:60000});
await page.locator('#grid-sample').click();
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid?.stations===9,{timeout:75000});
const requestsAfterSampling=weatherRequests.length;
await page.locator('#grid-layer').selectOption('wind');
const arrowsBefore=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.windArrows);
await page.locator('#grid-vectors').uncheck();
const arrowsOff=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.windArrows);
await page.locator('#grid-vectors').check();
const arrowsOn=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.windArrows);
await page.locator('#studio-hour').fill('1');
const weatherDownload=page.waitForEvent('download',{timeout:20000});
await page.locator('#grid-export').click();
const dataFile=await weatherDownload;
const weatherData=JSON.parse(readFileSync(await dataFile.path(),'utf8'));
const weatherMeta={count:weatherData.features.length,
 pointTypes:weatherData.features.every(f=>f.geometry.type==='Point'),
 time:weatherData.features[0]?.properties?.forecast_time_utc,
 sample:weatherData.features[0]?.properties?.sample_type,
 values:weatherData.features[0]?.properties?.wind_speed_10m};
const noExtraGridFetch=weatherRequests.length===requestsAfterSampling;
await page.locator('#grid-clear').click();
const buildingFixture={type:'FeatureCollection',features:[
{type:'Feature',properties:{name:'TEST BUILDING',height:'45 m'},geometry:{type:'Polygon',coordinates:[[[153.425,-28.002],[153.426,-28.002],[153.426,-28.003],[153.425,-28.003],[153.425,-28.002]]]}},
{type:'Feature',properties:{name:'TOWER 2','building:levels':8},geometry:{type:'Polygon',coordinates:[[[153.428,-28.001],[153.429,-28.001],[153.429,-28.002],[153.428,-28.002],[153.428,-28.001]]]}}
]};
await page.locator('#buildings-file').setInputFiles({name:'buildings.geojson',mimeType:'application/geo+json',buffer:Buffer.from(JSON.stringify(buildingFixture))});
await page.waitForTimeout(300);
const buildingStart=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().buildings);
await page.locator('#camera-duration').fill('6.5');
await page.locator('[data-draw=pin]').click();
await page.mouse.click(720,550);
await page.locator('#camera-add').click();
const dlEvent=page.waitForEvent('download',{timeout:20000});
await page.locator('#project-save').click();
const projectDownload=await dlEvent;
const projectBytes=readFileSync(await projectDownload.path());
const project=JSON.parse(projectBytes.toString());
await page.locator('#project-clear').click();
const clear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#project-file').setInputFiles({name:'project.json',mimeType:'application/json',buffer:projectBytes});
await page.waitForTimeout(400);
const restored=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
const bad={...project,buildingLayer:{...project.buildingLayer,items:[{...project.buildingLayer.items[0],height:-80}]}};
await page.locator('#project-file').setInputFiles({name:'bad-project.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(bad))});
await page.waitForTimeout(300);
const afterBad=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
const badMessage=await page.locator('#project-status').innerText();
const legacy={...project,version:1};
delete legacy.camera;delete legacy.buildingLayer;
await page.locator('#project-file').setInputFiles({name:'legacy.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(legacy))});
await page.waitForTimeout(250);
const afterLegacy=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#camera-back').click();
const afterRemoval=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.keyframes);
await page.locator('#earth-exit').click();
const report={arrowsBefore,arrowsOff,arrowsOn,requestsAfterSampling,noExtraGridFetch,weatherMeta,
 buildingStart,project:{version:project.version,buildings:project.buildingLayer?.items?.length,
  annotations:project.annotations.length,keyframes:project.keyframes.length,seconds:project.camera?.secondsPerWaypoint,
  containsKey:projectBytes.toString().includes('AIza')},clear:{buildings:clear.buildings?.count,annotations:clear.studio?.annotations},
 restored:{buildings:restored.buildings?.count,annotations:restored.studio?.annotations,keyframes:restored.studio?.keyframes,seconds:restored.studio?.routeDuration},
 afterBad:{buildings:afterBad.buildings?.count,annotations:afterBad.studio?.annotations},
 badMessage,afterLegacy:{buildings:afterLegacy.buildings?.count,seconds:afterLegacy.studio?.routeDuration},afterRemoval,errors};
console.log(JSON.stringify(report,null,2));
await browser.close();
const validations=[
 ['9 wind arrows enabled',arrowsBefore>=7],['wind vectors toggle off',arrowsOff===0],['wind vectors toggle on',arrowsOn>=7],
 ['no extra API calls on layer changes',noExtraGridFetch],['nine exported stations',weatherMeta.count===9],
 ['point geometry',weatherMeta.pointTypes],['honest sample metadata',weatherMeta.sample==='point_forecast_not_native_grid'],
 ['building fixture count',buildingStart.count===2],['project version',project.version===2],
 ['building snapshot',project.buildingLayer.items.length===2],['camera speed',project.camera.secondsPerWaypoint===6.5],
 ['reset buildings',clear.buildings?.count===0],['reset annotations',clear.studio?.annotations===0],
 ['restore buildings',restored.buildings?.count===2],['restore annotation',restored.studio?.annotations===1],
 ['restore keyframe',restored.studio?.keyframes===1],['restore speed',restored.studio?.routeDuration===6.5],
 ['invalid file keeps buildings',afterBad.buildings?.count===2],['invalid file keeps annotations',afterBad.studio?.annotations===1],
 ['invalid project is rejected',badMessage.includes('Cannot open project')],
 ['v1 keeps building layer',afterLegacy.buildings?.count===2],['v1 resets speed',afterLegacy.studio?.routeDuration===4],
 ['remove camera keyframe',afterRemoval===0],['browser has no pageerrors',errors.length===0]
];
const failures=validations.filter(([_,ok])=>!ok).map(([label])=>label);
console.log('CHECKS',validations.length,'FAILED',JSON.stringify(failures));
if(failures.length)process.exit(1);
