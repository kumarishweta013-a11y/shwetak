/* function -resusable block of code
types of funtion

1. Function declaration/Named function
2.Function expression
3.arrow
4.call back */

/*Named function
function name(params){
    //functionbody

}name(arg)*/

function sum(a,b){
    c= a+b
     //console.log(z)
     return c
}
console.log(sum(1,2))


/*Function Expression */

let funExp=function(){
    console.log("this is an function expression")
}
funExp()

/* Arrow function */

const funAr =(a)=>a*a
console.log(funAr(5))

const sq=(num)=>{
    return num*num
}
console.log(sq(6))


/*callback */

function add(a, b, cb){
    let num = a+b
    console.log(num)
    cb(90,5)
}


function sub(c,d){
    let sb = c-d
    console.log(sb)
}

add (4, 5,sub)
