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
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Green').click();
  await page.getByLabel('Qty').click();
  await page.getByLabel('Qty').click();
  await page.getByLabel('Qty').fill('3');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: ' My Cart' }).click();
  await page.locator('#top-cart-btn-checkout').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
  
  //In case newly registered
  /*await page.getByLabel('Street Address: Line 1').click();
  await page.getByLabel('Street Address: Line 1').fill('16 st');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Damietta');
  await page.locator('#checkout').click();
  await page.getByLabel('Country').selectOption('EG');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('22643625');
  await page.getByLabel('Zip/Postal Code').click();
  await page.getByLabel('Zip/Postal Code').fill('0572');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();*/
});