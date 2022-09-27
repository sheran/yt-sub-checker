#!/usr/bin/env node
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
        defaultViewport: {
            width: 1366,
            height: 768
        },
        args: ['--disable-features=site-per-process', '--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
)

await page.goto(`https://youtube.com/c/RichRebuilds/videos`, {
    waitUntil: 'networkidle2',
  });

var thumbs = await page.$eval("a#video-title", thumb => thumb.getAttribute("href"));
  
console.log(thumbs);
  
await browser.close();
})();