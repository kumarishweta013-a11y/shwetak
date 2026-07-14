
/*to print duplicate of number in array */
let num=[56,78,90,23,90,76,43,56]

for (i=0; i<=num.length ; i++){
    for (j=i+1 ; j<=num.length; j++){
        if (num[i]===num[j]){
            console.log(num[i])
        }
    }
}

let str=["A","B","C","A"]

for (i=0; i<=str.length ; i++){
    for (j=i+1 ; j<=str.length; j++){
        if (str[i]===str[j]){
            console.log(str[i])
        }
    }
}

/* let str1="abcvgdkjirua"
let str2= str1.split(" ")
console.log(str2)
for (i=0; i<=str2.length ; i++){
    for (j=i+1 ; j<=str2.length; j++){
        if (str2[i] === str2[j]){
            console.log(str2[i])
        }
    }
} */
