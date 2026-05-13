const fs = require('fs');
const path = require('path');

async function run() {
  let chromium;
  try {
    chromium = require('@playwright/test').chromium;
  } catch (e) {
    console.error('Cannot require @playwright/test.chromium:', e.message);
    process.exit(1);
  }

  const home = process.env.HOME || process.env.USERPROFILE || '.';
  const candidates = [
    path.join(home, '.cache/ms-playwright/chromium-1223/chrome-linux64/chrome'),
    path.join(home, '.cache/ms-playwright/chromium-1223/chrome-linux/chrome'),
    path.join(home, '.cache/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell'),
  ];

  let executablePath = candidates.find((p) => fs.existsSync(p));
  if (!executablePath) {
    console.warn('No local Playwright chromium executable found. Using bundled launcher.');
    executablePath = undefined; // let Playwright pick
  }

  const URL = process.env.TARGET_URL || 'http://localhost:3000/';
  const viewports = [
    { name: 'Galaxy-S21', width: 360, height: 800 },
    { name: 'iPhone-SE', width: 375, height: 667 },
    { name: 'iPhone-14-Plus', width: 430, height: 932 },
    { name: 'Pixel-4', width: 411, height: 731 },
    { name: 'iPad-Air', width: 768, height: 1024 },
    { name: 'iPad-Pro', width: 1024, height: 1366 },
    { name: 'Desktop-1280', width: 1280, height: 800 },
    { name: 'Desktop-1920', width: 1920, height: 1080 },
  ];

  fs.mkdirSync('.output', { recursive: true });

  for (const vp of viewports) {
    console.log(`Running viewport: ${vp.name} ${vp.width}x${vp.height}`);
    const browser = await chromium.launch({ headless: true, executablePath, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    const consoleErrors = [];
    const failedRequests = [];
    const notFoundResponses = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (err) => consoleErrors.push(String(err)));
    page.on('requestfailed', (request) => {
      const failure = request.failure();
      failedRequests.push({ url: request.url(), error: failure ? failure.errorText : 'unknown' });
    });
    page.on('response', async (response) => {
      if (response.status() === 404) {
        notFoundResponses.push(response.url());
      }
    });

    try {
      await page.goto(URL, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const screenshotPath = `.output/${vp.name}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });

      const scrollWidth = await page.evaluate(() => Math.max(document.documentElement.scrollWidth || 0, document.body.scrollWidth || 0));
      const innerWidth = await page.evaluate(() => window.innerWidth || 0);
      const overflowElements = await page.evaluate(() => {
        const results = [];
        const elements = Array.from(document.querySelectorAll('body *'));
        for (const el of elements) {
          // Ignore animated marquee elements (visual-only) to avoid false-positive overflow
          const cls = (el.className || '').toString();
          // Ignore animated marquee elements or any children inside an animate-marquee container
          if (cls.includes('animate-marquee') || cls.includes('will-change-transform') || el.closest('.animate-marquee')) continue;

          const rect = el.getBoundingClientRect();
          if (rect.right > window.innerWidth + 1 || rect.left < -1) {
            results.push({
              tag: el.tagName.toLowerCase(),
              className: cls.slice(0, 120),
              id: el.id || '',
              right: Math.round(rect.right),
              left: Math.round(rect.left),
              width: Math.round(rect.width),
              parentTag: el.parentElement ? el.parentElement.tagName.toLowerCase() : '',
              parentClassName: el.parentElement ? (el.parentElement.className || '').toString().slice(0, 120) : '',
            });
          }
        }
        return results.slice(0, 20);
      });

      console.log(`${vp.name} — innerWidth=${innerWidth} scrollWidth=${scrollWidth}`);
      if (overflowElements.length) console.log(`${vp.name} overflow elements:`, overflowElements);
      if (consoleErrors.length) console.log(`${vp.name} console errors:`, consoleErrors.slice(0, 10));
      if (failedRequests.length) console.log(`${vp.name} failed requests:`, failedRequests.slice(0, 10));
      if (notFoundResponses.length) console.log(`${vp.name} 404 responses:`, notFoundResponses.slice(0, 10));

      if (scrollWidth > innerWidth + 2) {
        console.warn(`${vp.name} has horizontal overflow (scrollWidth ${scrollWidth} > innerWidth ${innerWidth})`);
      }
    } catch (err) {
      console.error('Error testing viewport', vp.name, err);
    }
    await browser.close();
  }
  console.log('Responsive checks complete. Screenshots saved to .output/');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
