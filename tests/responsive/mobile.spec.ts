import { test, expect } from '@playwright/test';

test('Página deve funcionar corretamente em resolução mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/', { waitUntil: 'networkidle' });

  // 🛠️ Garantir que styles/media queries de mobile foram aplicados
  const body = page.locator('body');
  await expect(body).toBeVisible({ timeout: 10000 });
  await expect(body).not.toHaveCSS('display', 'none');
  await expect(body).not.toHaveCSS('visibility', 'hidden');

  // 🛠️ Verificar overflow no elemento raiz
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  expect(overflow).toBe(false);
});
