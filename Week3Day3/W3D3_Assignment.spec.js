import {chromium , test, webkit} from "@playwright/test"


test('Edge Browser' , async() =>{
    
    const eBrowser= await chromium.launch({channel:"msedge", headless:false})
    const eContext = await eBrowser.newContext()
    const ePage = await eContext.newPage()

    await ePage.goto("https://www.redbus.in/")
    console.log(await ePage.title())
    console.log(ePage.url())

})

test('flipkart Browser' , async() =>{
    
    const wBrowser= await webkit.launch({channel:"webkit", headless:false})
    const wContext = await wBrowser.newContext()
    const wPage = await wBrowser.newPage()

    await wPage.goto("https://www.flipkart.com/")
    console.log(await wPage.title())
    console.log(wPage.url())

})
