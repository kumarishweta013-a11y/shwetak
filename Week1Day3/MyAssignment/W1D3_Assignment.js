
function isOddOrEven(){
    let num =9
    if(num % 2 ==0){
        console.log("number is even");
        
    }else{
        console.log("Number is odd")
    }
    
}

isOddOrEven();


function checknumber(){
    let number = -3
    if(number > 0){
        console.log("Number is positive");
        
    }else if (number < 0){
        console.log("number is negative");
        
    }
    else {
        console.log("number is neutral");
        
    }
}

checknumber();

//Assignment Details:  
//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//runTests` with `switch` for test type messages. 

function launchBrowser(){
    let browserName='Chrome'
    if (browserName == 'Chrome'){
        console.log("Chrome browser is launched");
    }
    else{
        console.log("Chrome browser is not launchec");
        
    }
}

launchBrowser();


function runTests(){

    let testType = "Smoke"
    switch (testType){
        case 'Smoke':
        console.log("smoke test cases are executed");
        break;
        case 'Regression':
            console.log("Regression test cases are executed");
            break;
        case 'Sanity':
            console.log("Sanit test cases are executed");
            break;
        default:
            console.log("No test cases are executed");
            break;
            
        
    }
}

runTests();
