import { test, expect } from '@playwright/test';

test('Tabela de usuários deve carregar e mostrar os dados corretos', async ({ page }) => {
  await page.goto('/');

  // Aguarda a tabela de usuários ser visível
  await page.waitForSelector('[data-testid="data-table"]', { state: 'visible', timeout: 10000 });

  // Verifica que o cabeçalho da tabela está visível
  const headers = page.locator('[data-testid="data-table"] thead th');
  // O site possui 7 cabeçalhos reais - verificação de visibilidade e contagem
  await expect(headers.first()).toBeVisible();
  await expect(headers).toHaveCount(7);

  // Verifica que os usuários são carregados na tabela
  const rows = page.locator('[data-testid="data-table"] [data-testid="table-body"] tr');
  await expect(rows).toHaveCount(5);

  // Verifica dados específicos dos usuários (pula a checkbox na primeira coluna)
  await expect(rows.first().locator('td').nth(1)).toHaveText('1');
  // Status está na 5ª coluna (idx 5) - o valor é 'active'
  await expect(rows.first().locator('td').nth(5)).toHaveText('active');
});
