import { test, expect } from '@playwright/test';

test('Formulário de cadastro deve funcionar corretamente', async ({ page }) => {
  await page.goto('/');

  const form = page.locator('[data-testid="registration-form"]');
  await expect(form).toBeVisible();

  await form.getByPlaceholder('John Doe').fill('Nova Pessoa');
  await form.getByPlaceholder('john@example.com').fill('nova@exemplo.com');
  await form.getByPlaceholder('Min 8 characters').fill('senha1234');

  // 🛠️ Aceitar os termos de uso antes do envio
  const termsCheckbox = form.locator('[data-testid="check-terms"]');
  if (await termsCheckbox.count() > 0) {
    await termsCheckbox.check();
  }

  await form.getByRole('button', { name: 'Register' }).click();

  // 🛠️ Aguarda o elemento perder a classe 'hidden' ou ficar visível
  const successMsg = page.locator('[data-testid="form-success"]');
  await expect(successMsg).not.toHaveClass(/hidden/, { timeout: 10000 });
  await expect(successMsg).toBeVisible();
});
