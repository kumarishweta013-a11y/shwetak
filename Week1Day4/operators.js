//Arithmetic operators
/* + , -, *, /(division-Quotient), %(modulus-remainder) */

//Assignment operator
/*  +=, -=, *=,/=, %= */


//Comparision operator

/* >, <, >= ,<= , !=

10 == '10' --True --loose equality , only compares value 
10 === '10' --- false --strict equality, compares both value  and its data type */

//corecion => type conversion 

console.log(1==false) //converted false to interger as 0 then it will compare 
console.log(null == undefined) //true both are empty so it will print true
console.log(null === undefined) // false as it compares data type

//Logical operator
/* && , || ,  ! */

console.log(true && true)
console.log(true || false)
console.log(!false);

//Urinary operators--increment or decrement- works on single operand
/* post increment a++, pre increment ++a 
post decrement a-- , pre decrement --a */

a=10
console.log(a++);//increment
console.log(a)//assignment

console.log(++a)// increment and assigment in the same line
console.log(a)


