import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1366,height:800},deviceScaleFactor:1});
page.setDefaultTimeout(12000);
const jsErrors=[], warnings=[];
page.on('pageerror',e=>jsErrors.push(e.message));
page.on('console',msg=>{if(msg.type()==='error')warnings.push(msg.text().slice(0,250))});
await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor({timeout:20000});
await page.locator('#earth-open').click();
let modalOpen=await page.locator('#earth-dialog').isVisible();
await page.locator('input[name=earth-layer][value=photoreal]').check();
let keyShown=await page.locator('#earth-key-section').isVisible();
await page.locator('#earth-launch').click();
let invalidKeyMessage=await page.locator('#earth-message').innerText();
let noBilledRequest=await page.evaluate(()=>!document.querySelector('script[src*="Cesium"]'));
await page.locator('input[name=earth-layer][value=atlas]').check();
await page.locator('#earth-city').selectOption('hcmc');
await page.locator('#earth-launch').click();
let atlasOutcome;
try{await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});atlasOutcome='active';}
catch{atlasOutcome='error: '+await page.locator('#earth-message').innerText();}
const earthVisible=await page.locator('#earth-view').isVisible();
let osmCredit=await page.locator('#earth-attribution').innerText().catch(()=> '');
const cesiumPresent=await page.evaluate(()=>!!window.Cesium?.Viewer);
const atlasCreditShown=await page.locator('#earth-attribution').isVisible();
if(atlasOutcome==='active'){
 await page.locator('[data-city=singapore]').click();
 await page.waitForTimeout(8500);
 const coordInAtlas=await page.locator('.coordinates').innerText();
 const geoDiag=await page.evaluate(()=>({earth:window.__AEROVIEW_EARTH_DIAGNOSTICS__?.(),osmRequests:performance.getEntriesByType('resource').filter(r=>r.name.includes('tile.openstreetmap.org')).length,cesiumCanvas:!!document.querySelector('#earth-view canvas')}));
 if(!coordInAtlas.includes('SINGAPORE'))throw new Error('Earth coordinates did not update to Singapore');
 console.log('EARTH DIAGNOSTICS',JSON.stringify(geoDiag));
 const panelInfo=await page.locator('#studio').evaluate(el=>({hidden:el.hidden,display:getComputedStyle(el).display,visibility:getComputedStyle(el).visibility,rect:el.getBoundingClientRect().toJSON(),parent:el.parentElement.id,bodyClass:document.body.className}));
 console.log('STUDIO PANEL',JSON.stringify(panelInfo));
 await page.screenshot({path:'earth-atlas-preview.png'});
 await page.locator('#earth-exit').click();
}
const restored=await page.locator('#world').isVisible() && !(await page.locator('body').getAttribute('class'))?.includes('earth-mode');
const hasKeyAfterExit=await page.locator('#earth-key').inputValue();
const restoredCoords=(await page.locator('.coordinates').innerText()).includes('ORIGINAL PROCEDURAL SCENE');
const report={modalOpen,keyShown,invalidKeyMessage,noBilledRequest,atlasOutcome,earthVisible,osmCredit:osmCredit.slice(0,180),cesiumPresent,atlasCreditShown,restored,restoredCoords,keyErased:hasKeyAfterExit==='',jsErrors,warnings};
console.log(JSON.stringify(report,null,2));
await browser.close();
if(!modalOpen || !keyShown || !invalidKeyMessage.includes('key')|| !noBilledRequest || atlasOutcome!=='active' || !cesiumPresent || !atlasCreditShown || !restored || !restoredCoords || jsErrors.length)process.exit(1);
