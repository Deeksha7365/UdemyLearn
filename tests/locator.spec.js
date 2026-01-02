import { expect, test } from '@playwright/test';
import { type } from 'node:os';
//https://rahulshettyacademy.com/client/#/auth/register
test('locators', async ({ page }) => {


    page.goto("https://rahulshettyacademy.com/angularpractice/");

    //use getbylabel for checkbox,radiobutton and dropdown
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption({ label: "Female" });
await page.getByPlaceholder("Password").fill("abc123");
await page.getByRole("button",{name:'submit'}).click();
await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
})