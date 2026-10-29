async page => {
  const out = [];
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(800);
  // Demo: registrar pago
  await page.getByRole('button', { name: 'Pago registrado' }).click();
  await page.waitForTimeout(700);
  out.push('paid status: ' + await page.locator('#demo-panel [data-key="demo.panel.status"] dd').textContent());
  await page.locator('.demo').screenshot({ path: '.taste-skill/shots/i-demo-paid.png' });
  await page.getByRole('button', { name: 'Crédito cancelado' }).focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(600);
  out.push('done lock: ' + await page.locator('#demo-panel [data-key="demo.panel.lock"] dd').textContent());
  // Tema oscuro + inglés
  await page.getByRole('button', { name: 'Cambiar tema' }).click();
  await page.getByRole('button', { name: 'Cambiar idioma' }).click();
  await page.waitForTimeout(600);
  out.push('theme: ' + await page.evaluate(() => document.body.dataset.theme) + ', h1: ' + await page.locator('h1').innerText());
  await page.screenshot({ path: '.taste-skill/shots/i-dark-en-hero.png' });
  await page.locator('.demo').scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.locator('.demo').screenshot({ path: '.taste-skill/shots/i-dark-demo.png' });
  await page.reload(); await page.waitForTimeout(800);
  out.push('after reload theme: ' + await page.evaluate(() => document.body.dataset.theme) + ', lang: ' + await page.evaluate(() => document.documentElement.lang));
  await page.goto('http://localhost:3000/projects'); await page.waitForTimeout(800);
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '.taste-skill/shots/i-dark-projects.png', fullPage: true });
  // restaurar
  await page.evaluate(() => { localStorage.clear(); });
  // móvil: menú
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000'); await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Menú' }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: '.taste-skill/shots/i-mob-menu.png' });
  await page.getByRole('link', { name: 'Proyectos' }).last().click();
  await page.waitForURL('**/projects'); await page.waitForTimeout(500);
  out.push('menu nav ->' + page.url() + ', menu open after nav: ' + await page.locator('#mobile-menu').getAttribute('data-open'));
  await page.goto('http://localhost:3000/cv'); await page.waitForTimeout(1500);
  await page.screenshot({ path: '.taste-skill/shots/i-mob-cv.png' });
  return out.join('\n');
}
