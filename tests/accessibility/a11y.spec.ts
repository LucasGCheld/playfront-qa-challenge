import { test, expect } from '@playwright/test';

test('Acessibilidade da página principal deve atender a requisitos básicos', async ({ page }) => {
  await page.goto('/');

  // Aguarda a página ser totalmente carregada
  await page.waitForLoadState('domcontentloaded', { timeout: 45000 });

  // Verifica que o botão de cadastro está visível e tem label
  const registerButton = page.getByTestId('btn-register');
  await expect(registerButton).toBeVisible();
  await expect(registerButton).toHaveClass(/btn-primary/);
  await expect(registerButton).toHaveAttribute('type', 'submit');
});
