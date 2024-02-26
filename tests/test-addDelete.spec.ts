import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByPlaceholder('Search entire store here...').click();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('asd113@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('Aa123456');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('menuitem', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Jackets' }).click();
  await page.getByRole('link', { name: 'Typhon Performance Fleece-' }).first().click();
  await page.getByLabel('Green').click();
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Qty').click();
  await page.getByLabel('Qty').fill('3');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: ' My Cart' }).click();
  await page.getByRole('link', { name: ' Remove' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});