import {test} from "@playwright/test"

test("xpath", async({page}) =>{

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('//input[@name="USERNAME"]').fill('demoscrs2')
await page.locator('//label[text()="Password"]').fill('crmsfa')
await page.locator('//input[contains@class,"decorative"]').click()//partial attribute
//await page.locator ('//input[contains(text(),"Pass"]') ---partial text based
//await page.locator('(//input[@class="inputLogin"])[2]') ---conditional based 
})

//form[@id="login"]/p[@class="top"] parent to child
//p[@class="top"]/input[@id="username"] parent to child

//input[@id="password"]/parent::p ---child to parent
//input[@id="password"]/ancestor::form ---grand child to grand parent
//input[@type="submit"]/ancestor::form ---grand child to grand parent


//label[text()="Username"]/following-sibling::input  -----elder to younger siblings
/*(//input[@class="inputLogin"])[1]/preceding-sibling::label --- younger to elder */
//input[@value="login"]/preceding::label[@for="password"]    ----one cousin from another