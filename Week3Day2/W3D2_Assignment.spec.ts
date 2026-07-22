import {test} from "@playwright/test"

test("salesforce", async ({page}) =>{

    await page.goto("https://login.salesforce.com/?locale=in")
    
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com') //byid
     await page.locator('//input[@type="password"]').fill('TestLeaf@2025')
     await page.locator('//input[@type="submit"]').click()
     await page.waitForTimeout(2000)
     await page.locator('//button[@title="App Launcher"]').click()

     await page.locator('//button[@aria-label="View All Applications"]').click()
     await page.locator('//input[@role="combobox"]').fill('Accounts')
     await page.locator('//mark[contains(text(),"Accounts")]').click()
     await page.locator('//a[@title="New"]').click()
     await page.locator('//input[@name="Name"]').fill('MyAccount')

     await page.locator('//button[@aria-label="Type"]').click()
     await page.locator('(//span[text()="Analyst"])').click()
     await page.locator('//button[@aria-label="Industry"]').click()
     await page.locator('(//span[text()="Banking"])').click()

     await page.locator('//button[@name="SaveEdit"]').click()


})