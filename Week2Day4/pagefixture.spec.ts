/* const browser= await chromium.launch({channel:"msedge",headless:false})  //browser
const context=await browser.newContext()      //context
const page=await context.newPage()            //page
 */

/* whenever we use page fixture , we cannot have channel and headless in test function and it will refer to config setting */

import {test} from "@playwright/test"

test("page fixture",async ({page}) => {

await page.goto("https://www.google.com/")

const title = await page.title() // await is used as page.title return promise 
console.log(title)
console.log( page.url()) // this doesnt return promise so await is not needed here
   
})