/*Assignment Steps:
1. Declare a global variable browser and assign it the value "Chrome".
o Example: let browser = "Chrome";
2. Create a function named checkBrowserVersion that accepts a callback function as an
argument:
o Use setTimeout to simulate a delay (like waiting for data from a server).
o After the delay (2 seconds), invoke the callback function and pass the browser value to it.
3. Write a callback function that logs the browser version to the console when invoked.
4. Call checkBrowserVersion and pass the callback function to it. o The callback should print the
browser version after the 2-second delay.*/

let browser ="chrome"
function checkBrowserVersion(callback){
    setTimeout(() => {
        
    }, 2000);
    callback(browser)
}

function displaybrowser(bversion){
    console.log(bversion)
}

checkBrowserVersion(displaybrowser)