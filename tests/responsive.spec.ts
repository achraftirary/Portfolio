import { test, expect } from '@playwright/test';
import fs from 'fs';

const URL = process.env.TARGET_URL || 'http://localhost:3000';

const viewports = [
  { name: 'iPhone-SE', width: 375, height: 667 },
  { name: 'Pixel-4', width: 411, height: 731 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'Desktop', width: 1280, height: 800 },
];

test.describe('Responsive smoke checks', () => {
  for (const vp of viewports) {
    test(vp.name, async ({ page }) => {
      // capture console errors
      const consoleErrors: string[] = [];
      page.on('console', (m) => {
        if (m.type() === 'error') consoleErrors.push(m.text());
      });
      page.on('pageerror', (err) => consoleErrors.push(String(err)));

      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(URL, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);

      // ensure output dir exists
      fs.mkdirSync('./.output', { recursive: true });
      const screenshotPath = `./.output/${vp.name}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });

      const scrollWidth = await page.evaluate(() => Math.max(document.documentElement.scrollWidth || 0, document.body.scrollWidth || 0));
      const innerWidth = await page.evaluate(() => window.innerWidth || 0);

      // Log results
      console.log(`${vp.name} — innerWidth=${innerWidth} scrollWidth=${scrollWidth}`);
      if (consoleErrors.length) {
        console.log(`${vp.name} console errors:`, consoleErrors.slice(0, 10));
      }

      // Basic assertion: no horizontal overflow
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth + 2);
    });
  }
});
