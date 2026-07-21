/* const browser= await chromium.launch({channel:"msedge",headless:false})  //browser
const context=await browser.newContext()      //context
const page=await context.newPage()            //page
 */

/* whenever we use page fixture , we cannot define browser and mode under channel/headless in test function and it will refer to config setting */

import {test} from "@playwright/test"

test("Selector", async ({page}) =>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    
    await page.locator('#username').fill('democsr2') 
    await page.locator('#password').fill('crmsfa')
    await page.locator('input[type="submit"]').click()

      await page.waitForTimeout(3000)
     console.log(await page.title())
     console.log(page.url())
    await page.locator('#button').click()
    await page.locator('.x-panel-header > a[href*="leadsMain"]').click()
    await page.waitForTimeout(2000)
    await page.locator('a[href*="createLeadForm"]').click()

    await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_companyName').fill('Testleaf')
    await page.locator('#createLeadForm_firstName').fill('Shweta')
    await page.locator('#createLeadForm_lastName').fill('Kumari')
    await page.locator('[name="personalTitle"]').fill('Mrs')
    await page.locator('[name="generalProfTitle"]').fill('QA')
    await page.locator('[name="annualRevenue"]').fill('2000000')
    await page.locator('[name="departmentName"]').fill('Testing')

    const sourceDropdown= await  page.locator('[name="dataSourceId"]')
    const countdropdown = await sourceDropdown.count()

    for (let i =0 ;i< countdropdown; i++){

        console.log(await sourceDropdown.nth(i).innerText())

    }

})
