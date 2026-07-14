/*String literal- always hold value in string */

let firmName ='TCS'
let companyName='TCS'
console.log(firmName == companyName) //true
console.log(firmName === companyName) //true

/* string Objects hold memory of the string
all primitive data types will get stored in stack memory
and non-primitive data type will get stored in heap memory*/

let firmName1 = new String ("TCS")
let companyName1 =new String ("TCS")
console.log(firmName1 == companyName1)//false
console.log(firmName1 === companyName1)//false
console.log(firmName1 == firmName)//true
console.log(firmName1.toString() === companyName1.toString())//true


/* length is property which specify the length iof the string */

// index start from 0 and length start from 1

function lengthString(){
 let course ="Automation"
 console.log(course.length)

}

lengthString()

/* string methods -there are string methods
Escape sequence \,\t,\n  

Concatenation= concat() , "+", 
`${}`  this is modern method for using it for concatenation called as template literal*/

let v=50
let v1="testcases"
console.log(v.toString().concat(v1))
console.log(`there are ${v} ${v1}`)

/* charAt()- in order to find charcater at specific index */

let name='Shwetakkkkkkkkkkkkkkkkkeuoiweu'

console.log(name.charAt(25));

/* indexof()- to find the index of the charcater */
console.log(name.indexOf("o"))// firxt occurence of index
console.log(name.indexOf("k",6))//next accurence of index at 8
console.log(name.lastIndexOf("k"))


/*substring()- to extract the portion of the string */
console.log(name.substring(4,29))
console.log(name.substring(4))
console.log(name.substring(29,4))//it is internally getting swapped if start index is greater than end index
console.log(name.substring(3,-5))// negative value will be changed to 0 and then it will be swapped , in this case it 0,3

/*slice() extract the portion of the string , accepts negative value */

console.log(name.slice(5,1)) // in slice case it will not swap
console.log(name.slice(-7))
console.log(name.slice(-30,-1))

//Diff b/w slice and substring

/* split() - to get string in array format, this method can be used */

console.log(name.split()) //
console.log(name.split("")) // to split each character
console.log(name.split("k"))