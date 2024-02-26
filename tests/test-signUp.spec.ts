import { test, expect } from '@playwright/test';

test('Sign up test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('banner').locator('li').filter({ hasText: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Diaa');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Mohamed');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('asd113@gmail.com');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Aa123456');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Aa123456');
  await page.getByRole('button', { name: 'Create an Account' }).click();
});