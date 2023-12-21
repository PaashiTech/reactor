import { test, expect } from '@playwright/test';

test.describe('Visuals', () => {
  test('Title reads "Humble Dialog Box"', async ({ page }) => {
    await page.goto('/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Humble Dialog Box');
  });
  test('Heading reads "Login"', async ({ page }) => {
    await page.goto('/');
    // Expect a title "to contain" a substring.
    await expect(page.getByRole('heading', { name: 'Reactor' })).toBeVisible();
  });
});
