import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5003/physicianDesktop/');
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('sohaem');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('7790');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('cashed');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.getByRole('row', { name: 'ID , 00128139alx cashedorder service transaction testing test four 28 Y  01234569874' }).getByRole('img').first().click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.goto('await page.goto('http://dev-testing.andalusiagroup.net:5003/physicianDesktop');
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('sohaem');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('7790');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();');
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.locator('#target').getByRole('button', { name: '' }).click();
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('cahed');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('cashed');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.getByRole('row', { name: 'ID , 00128134alx
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128134alx');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('row', { name: 'ID , 00128134alx cashedorder service transaction testing testtwo 29 Y  01234567891' }).getByRole('img').first().click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByText('Vital Signs').click();
  await page.frameLocator('#oldPortal').locator('circle').nth(1).click();
  await page.frameLocator('#oldPortal').locator('#AddVitalSign0').click();
  await page.frameLocator('#oldPortal').getByPlaceholder('Value').click();
  await page.frameLocator('#oldPortal').getByPlaceholder('Value').fill('38');
  await page.frameLocator('#oldPortal').getByRole('button', { name: 'Save' }).click();
  await page.frameLocator('#oldPortal').locator('circle').nth(2).click(); cashedorder service transaction testing testtwo 29 Y  01234567891' }).getByRole('img').first().click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByText('Vital Signs').click();
  await page.frameLocator('#oldPortal').locator('#AddVitalSign0').click();await page.frameLocator('#oldPortal').getByPlaceholder('Value').click();
  await page.frameLocator('#oldPortal').getByPlaceholder('Value').fill('36');
  await page.frameLocator('#oldPortal').getByRole('button', { name: 'Save' }).click();
});