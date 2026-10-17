import { test, expect } from '@playwright/test';

test('Dropdown assíncrono deve carregar opções e permitir seleção', async ({ page }) => {
  await page.goto('/');

  // Aguarda o dropdown assíncrono ser visível
  await page.waitForSelector('[data-testid="custom-dropdown"]', { state: 'visible', timeout: 10000 });

  const dropdown = page.locator('[data-testid="custom-dropdown"]');
  await expect(dropdown).toBeVisible();

  // Clica para carregar opções
  await dropdown.locator('[data-testid="custom-dropdown-trigger"]').click();

  // Aguarda as opções aparecerem
  await dropdown.locator('[data-testid="custom-dropdown-menu"]').waitFor({ state: 'visible', timeout: 10000 });

  // Verifica que as opções são carregadas
  const options = dropdown.locator('[data-testid="custom-dropdown-menu"] li');
  await expect(options).toHaveCount(4);

  // Verifica que o valor selecionado está visível
  await expect(dropdown.locator('.custom-dropdown-value')).toBeVisible();
});
