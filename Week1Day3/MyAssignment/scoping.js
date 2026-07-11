//scoping-> visibility or accessbility of the variable in the script.

/*block scoped
function scoped
global scoped */

//let and const-block scoped variables
//var is function scoped


/*function invokebrowser(){
let browser="chrome"
if(browser =="chrome"){
    let  browserName="edge"
    console.log("the browser name inside the is block",browserName);
}

console.log("the browser name outside the if block",browserName)
}
console.log("outside the function block",browserName)

invokebrowser()*/

let genderType="male"
function printGender(){
    let color="brown"
    if (genderType== "Female"){
         var age=30
        let color="pink"
        console.log("color inside the block",color)
    }
    console.log("value of the age  inside function the block",age)
    console.log("color inside the block function",color)
}

console.log("the value of genderType globally",genderType)
console.log("color inside the block",color)
printGender()

