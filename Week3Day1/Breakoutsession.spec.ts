/* const browser= await chromium.launch({channel:"msedge",headless:false})  //browser
const context=await browser.newContext()      //context
const page=await context.newPage()            //page
 */

/* whenever we use page fixture , we cannot define browser and mode under channel/headless in test function and it will refer to config setting */

import {test} from "@playwright/test"

test("Selector", async ({page}) =>{

    await page.goto("https://login.salesforce.com/?locale=in")
    
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') //byid
    //await page.locator('p>input').first().fill('')//immidiate child
    //await page.locator('p>input').nth(0).fill('')//first element using nth method
    //await page.locator('label+input').nth(1).fill('')
   
     await page.locator('#password').fill('TestLeaf@2025')//byclass
     await page.locator('input[type="submit"]').click()//bytag

      await page.waitForTimeout(5000)
     console.log(await page.title())
     console.log(page.url())

     
})
