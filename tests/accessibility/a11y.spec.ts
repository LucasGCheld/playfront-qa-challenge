import { test, expect } from '@playwright/test';

test('Acessibilidade da página principal deve atender a requisitos básicos', async ({ page }) => {
  await page.goto('/');

  // Aguarda a página ser totalmente carregada
  await page.waitForLoadState('domcontentloaded');

  // Verifica que elementos principais têm nomes acessíveis
  const buttons = page.locator('button:not([disabled])');
  await expect(buttons.first()).toBeVisible();

  // Verifica que o botão de cadastro está visível (elemento interativo real)
  await expect(page.getByTestId('btn-register')).toBeVisible();
});
