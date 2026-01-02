import { expect, test } from '@playwright/test';
import { type } from 'node:os';
//https://rahulshettyacademy.com/client/#/auth/register
test('login page', async ({ page }) => {
  
    const signin=page.locator("#signInBtn");
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 // await expect(page).toHaveTitile("Google");
  await page.locator("#username").type("rahulshettyacademy");
 console.log(await page.locator("#username").inputValue());
  await page.locator("[type='password']").type("learning");
 const dropdown= await page.locator("select.form-control");
console.log(await dropdown.selectOption("consult"));


//below 4 code is for radio button 
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked();
console.log(await page.locator(".radiotextsty").last().isChecked());
await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked();
//await page.pause();
  await signin.click(); //to reuse locator multiple times
//console.log(await page.locator("[style*='block']").textContent());
//await expect(page.locator("[style*='block']")).toContainText('Incorrect');
// console.log(await page.locator(".card-title a").first().textContent());
// console.log(await page.locator(".card-title a").nth(1).textContent());
// console.log(await page.locator(".card-title a").allTextContents());//here it will not wait 30 sec for alltextcontect but playwright wait 30 sec for texcontent



});
//18 completed  going 19th and 4th one assignment last video pending(5th one)

test('add to cart ', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
  await page.locator("#userEmail").type("shettyd87@gmail.com");
  await page.locator("#userPassword").type("Shetty12345#");
  await page.locator("#login").click();
   const productname='ZARA COAT 3';
  const product=page.locator(".card-body");
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const title=page.locator(".card-body b").allTextContents();
 console.log(await title);
const value= await product.count();
for(let i=0;i<value;i++)
{
 if(await product.nth(i).locator("b").textContent()==productname)
 {
//await product.nth(i).locator(button[style*=right]).click();
//    //text=add to cart
await product.nth(i).locator("text=Add To Cart").click();
break;

 }
 
}
const email='shettyd87@gmail.com';
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
//type("ind",{delay:100});
const dropdown= await page.locator(".ta-results");
await dropdown.waitFor();
const value1=await dropdown.locator("button").count();
for(let i=0;i<value1;i++)
{
  const content=await dropdown.locator("button").nth(i).textContent();
if(content==' India')
{
  await dropdown.locator("button").nth(i).click();
  break;
}
}
expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

await page.locator(".action__submit").click();
expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const order=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(order);


await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (order.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
  }
  
}
const orderIdDetails = await page.locator(".col-text").textContent();
   expect(order.includes(orderIdDetails)).toBeTruthy();
})
