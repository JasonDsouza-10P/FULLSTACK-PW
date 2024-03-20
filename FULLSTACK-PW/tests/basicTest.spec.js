import {expect, test} from "@playwright/test"

test("Test One",async({page})=>{

await page.goto("https://demoqa.com/login");
await page.pause();
await expect(page).toHaveTitle("DEMOQA");




});