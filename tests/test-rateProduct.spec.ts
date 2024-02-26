import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('asd113@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('Aa123456');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('menuitem', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Jackets' }).click();
  await page.getByRole('link', { name: 'Typhon Performance Fleece-' }).first().click();
  await page.getByRole('link', { name: 'Reviews ' }).click();
  await page.getByLabel('4 stars').evaluate(e => e.click());
  await page.waitForTimeout(1000);
  await page.getByLabel('Summary').click();
  await page.getByLabel('Summary').fill('Good value');
  await page.waitForTimeout(1000);
  await page.getByLabel('Review', { exact: true }).click();
  await page.getByLabel('Review', { exact: true }).fill('good value for the money');
  await page.locator('.submit').click();
});