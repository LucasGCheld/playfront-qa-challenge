import { test, expect } from '@playwright/test';

test('Página deve funcionar corretamente em resolução mobile', async ({ page }) => {
  // Define a resolução mobile
  await page.setViewportSize({ width: 375, height: 667 });

  // Aguarda a página ser totalmente carregada
  await page.waitForLoadState('domcontentloaded');

  // Verifica que a página é visível
  await expect(page.locator('body')).toBeVisible();

  // Verifica que a página não tem overflow horizontal
  const body = page.locator('body');
  const overflow = await body.evaluate((el) => {
    return el.scrollWidth > el.clientWidth;
  });
  expect(overflow).toBe(false);

  // Verifica que a página é visível
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
});
