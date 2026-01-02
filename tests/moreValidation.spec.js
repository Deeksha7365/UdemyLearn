const {test,expect} = require("@playwright/test");
 
 
test("more  validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();
await page.locator("#displayed-text").click();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
page.on('dialog',dialog => dialog.accept())
await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();
//const frame=await page.frameLocator("#courses-iframe").click();
//frame.

})