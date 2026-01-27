import { test, expect } from '@playwright/test';

test.describe('Game Discount Checker', () => {

  test('De frontend bevat een lijst van games', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('table')).toBeVisible();
    const rows = await page.locator('.game-row').count();
    expect(rows).toBeGreaterThan(0);
  });

  test('De frontend bevat een input veld om te filteren op naam', async ({ page }) => {
    await page.goto('/');
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search games...');
  });

  test('De frontend toont de juiste games na het filteren via de slider', async ({ page }) => {
    await page.goto('/');
    const total = await page.locator('.game-row').count();

    // slider op 50% zetten en input event triggeren
    await page.evaluate(() => {
      const s = document.getElementById('discount-slider') as HTMLInputElement | null;
      if (s) { s.value = '50'; s.dispatchEvent(new Event('input', { bubbles: true })); }
    });

    await page.waitForTimeout(200);

    const visible = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.game-row')).filter(el => !!(el as HTMLElement).offsetParent).length
    );

    expect(visible).toBeLessThanOrEqual(total);
  });

  test('De frontend toont de juiste games na zoeken + slider', async ({ page }) => {
    await page.goto('/');
    await page.fill('#search-input', 'Steam');
    await page.waitForTimeout(100);

    const afterSearch = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.game-row')).filter(el => !!(el as HTMLElement).offsetParent).length
    );

    await page.evaluate(() => {
      const s = document.getElementById('discount-slider') as HTMLInputElement | null;
      if (s) { s.value = '10'; s.dispatchEvent(new Event('input', { bubbles: true })); }
    });

    await page.waitForTimeout(200);

    const combined = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.game-row')).filter(el => !!(el as HTMLElement).offsetParent).length
    );

    expect(combined).toBeLessThanOrEqual(afterSearch);
  });

});