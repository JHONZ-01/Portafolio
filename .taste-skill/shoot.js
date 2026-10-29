async page => {
  const pages = [['/', 'home'], ['/projects', 'projects'], ['/about', 'about'], ['/cv', 'cv']];
  for (const [w, h, tag] of [[390, 844, 'mob'], [1440, 900, 'desk']]) {
    await page.setViewportSize({ width: w, height: h });
    for (const [url, name] of pages) {
      await page.goto('http://localhost:3000' + url);
      await page.waitForTimeout(1200);
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `.taste-skill/shots/${tag}-${name}-full.png`, fullPage: true });
      const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      console.log(tag, name, 'overflow', ov);
    }
  }
}
