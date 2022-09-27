import { test, expect } from '@playwright/test';

test('homepage has title and link', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);

  // create a locator
  const getStarted = page.locator('text=some link');
  // const getStarted = page.locator('.link');
 // const getStarted = page.locator('a:has-text("some link")');


  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/');

  // Click the get started link.
  await getStarted.click();

});

test('should have header', async ({ page }) => {
  await page.goto('/');
  const header = await page.locator('header');

  expect(header !== undefined).toBeTruthy();
});

test('should have footer', async ({ page }) => {
  await page.goto('/');
  const footer = await page.locator('footer');

  expect(footer !== undefined).toBeTruthy();
});
