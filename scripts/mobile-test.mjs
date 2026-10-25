import { chromium } from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
for(const [width,height] of [[390,844],[768,1024]]){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,hasTouch:true,isMobile:true});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
 await page.waitForTimeout(1700);
 const before=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,innerWidth:window.innerWidth,mainClient:document.querySelector('.main-layout').clientHeight,mainScroll:document.querySelector('.main-layout').scrollHeight,panelBottom:Math.round(document.querySelector('#panel').getBoundingClientRect().bottom),cssPointer:getComputedStyle(document.querySelector('.main-layout')).pointerEvents,hit:document.elementFromPoint(180,420)?.outerHTML.slice(0,180)}));
 await page.mouse.move(Math.min(width/2,180),Math.min(height/2,460));
 await page.mouse.wheel(0,380);await page.waitForTimeout(300);
 const wheelScroll=await page.locator('.main-layout').evaluate(el=>el.scrollTop);
 const session=await page.context().newCDPSession(page);
 await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:180,y:630}]});
 for(let y=590;y>=230;y-=40){await session.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:180,y}]});await page.waitForTimeout(30);}
 await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 await page.waitForTimeout(350);
 const touchScroll=await page.locator('.main-layout').evaluate(el=>el.scrollTop);
 const programScroll=await page.locator('.main-layout').evaluate(el=>{el.scrollTop=150;return el.scrollTop;});
 await page.locator('#quality-button').scrollIntoViewIfNeeded({timeout:10000});
 await page.locator('#quality-button').click({timeout:10000});
 const quality=await page.locator('#quality-button').innerText();
 await page.screenshot({path:'mobile-'+width+'.png'});
 console.log(JSON.stringify({width,height,...before,wheelScroll,touchScroll,programScroll,quality,errors}));
 await page.close();
 if(errors.length||before.scrollWidth>width+2||touchScroll<100||!quality.includes('ECO'))process.exitCode=1;
}
await browser.close();
