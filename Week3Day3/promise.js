
let marks =45
let student = new Promise((resolve, reject)=>{
 

    if (marks >35){
        resolve("passed")
    }else{
        reject("Failed")
    }
})

student
.then(result=>(console.log(result)))//resolve
.catch(error=>(console.log(error)))//reject
