import { test, expect } from '@playwright/test';

test('Formulário de cadastro deve funcionar corretamente', async ({ page }) => {
  await page.goto('/');

  // Aguarda o formulário ser visível
  await page.waitForSelector('[data-testid="registration-form"]', { state: 'visible', timeout: 10000 });

  const form = page.locator('[data-testid="registration-form"]');
  await expect(form).toBeVisible();

  // Preenche o formulário corretamente
  await form.getByPlaceholder('John Doe').fill('Nova Pessoa');
  await form.getByPlaceholder('john@example.com').fill('nova@exemplo.com');
  await form.getByPlaceholder('Min 8 characters').fill('senha1234');

  await form.getByRole('button', { name: 'Register' }).click();

  // Verifica que o cadastro foi concluído
  // O div #formSuccess pode estar com a classe 'hidden' inicialmente
  const success = page.locator('[data-testid="form-success"]');
  await expect(success).toBeVisible();
  await expect(success).toContainText('Registration successful');
});
