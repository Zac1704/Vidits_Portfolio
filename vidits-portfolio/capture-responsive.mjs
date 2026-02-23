import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.waitForTimeout(2000); // Wait for animations to settle

    // Desktop
    await page.setViewportSize({ width: 1536, height: 776 });
    await page.evaluate(() => window.scrollTo(0, 1500)); // Scroll to My Work
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'desktop-responsive.png' });

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tablet-responsive.png' });

    // Mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'mobile-responsive.png' });

    await browser.close();
})();
