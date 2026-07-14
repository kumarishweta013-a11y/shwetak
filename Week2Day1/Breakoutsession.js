
function reverseString(){
    let string = "Testleaf"
    let revString =""
   for (let i = string.length -1; i >=0 ; i--){
    revString += string[i]
}
   console.log("reverse string is " ,revString )
}

reverseString()