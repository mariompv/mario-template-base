import { test, expect } from '@playwright/test';

test('Debe cargar la pantalla principal correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/.*legalia.*/i);
});
