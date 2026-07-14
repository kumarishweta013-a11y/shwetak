//array = collection of heterogenous datatypes

let arr=["A", "B","C"]
console.log(arr)
console.log(arr[2])

// to add value in array 

arr[3]= 4
console.log(arr)//heterogenous array meaning can be added and removed anytime

console.log(arr.length)

//Methods in array 

/* 1. push() = to add value in array */

//arr = arr.push(undefined, true)
console.log(arr.push(undefined, true))
console.log(arr)

/*pop()- remove only 1 element at the end of the array */
console.log(arr.pop())
console.log(arr)

/*unshift()= add 1 more elemnet at the begining of the array */
console.log(arr.unshift("Shweta"))
console.log(arr)

/*shift()= remove 1  elemnet at the begining of the array */
console.log(arr.shift())
console.log(arr)

//slice() to add or remove  in between the array
console.log(arr.slice())


