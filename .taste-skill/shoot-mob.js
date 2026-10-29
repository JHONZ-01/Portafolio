async page => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [url, name] of [['/', 'home'], ['/projects', 'projects'], ['/about', 'about']]) {
    await page.goto('http://localhost:3000' + url);
    await page.waitForTimeout(1000);
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(900);
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let i = 0, y = 0; y < H; i++, y += 1700) {
      await page.screenshot({ path: `.taste-skill/shots/m-${name}-${i}.png`, fullPage: true, clip: { x: 0, y, width: 390, height: Math.min(1700, H - y) } });
    }
  }
}
