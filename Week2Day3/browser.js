/* /* async and  await is coupled always use together */

/*c browser context - playwright will open new browser context everytime runs the code
each test will be run in each context, this is nothing both incognito and no history will be save 

each context will have multiple tab */

/* to install playwright -npm init playwright@latest */

/* import (test) from "@playwright/test" 

test is in built function available in playwright */


 /*Browser -> Context -> Page
 ----------------------------

Browser: Actual browser engine (Chromium, Firefox, WebKit)

Context: Isolated environment like an incognito session

Page: A single tab within a context

const browser=await chromium.launch({headless:false,channel:"msedge"})
const context=await browser.newContext()
const page=await context.newPage()


Commonly used Commands :
------------------------

To create a playwright file -> filename.spec.ts

To run the test file -> npx playwright test filename.spec.ts

To open the test report -> npx playwright show-report

Default mode - headless
 */