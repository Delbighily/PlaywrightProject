import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('asd113@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('Aa123456');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Search entire store here...').click();
  await page.getByPlaceholder('Search entire store here...').fill('watch');
  await page.getByPlaceholder('Search entire store here...').press('Enter');
  await page.getByRole('link', { name: 'Bolo Sport Watch' }).first().click();
  await page.getByRole('link', { name: ' Add to Wish List' }).click();
});