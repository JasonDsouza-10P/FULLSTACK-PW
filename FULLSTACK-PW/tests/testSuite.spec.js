import {expect, test} from "@playwright/test"

test.describe('Test Suite', () => {

test("Test One",async({page})=>{

    await page.goto("https://demoqa.com/login");
    await page.pause();
    await expect(page).toHaveTitle("DEMOQA");
    
    });

test("Test Two",async({page})=>{

await page.goto("https://demoqa.com/login");
await page.pause();
await page.click("id=userName");
await page.locator("[id='userName']").fill("Jdsz");
await page.pause();
//await expect(page).toHaveTitle("DEMOQA");
await page.locator ("[id='password']").fill("10@Pearls");
//await.page.pause();
await page.click('[id="login"]');
await expect( page.getByText('Books : ')).toBeVisible();
await page.pause();


});
});