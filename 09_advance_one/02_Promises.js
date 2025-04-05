// Promise object represents eventual completion or failure of an asynchronous operation and it's result

// - which means the task given would not be completed immediately, b ut it will be added 
// to the queue and notified when completed

// -which operations can be promised?
// cryptographic operations, file system

// promises states:
// 1. pending
// 2. fulfilled
// 3. rejected

//fetch('https://somthing.com').then(//results).catch(//catches error).finally() ->this is consuming promises
//but we will learn to make promises first

//🔹 Some functions (like fetch) already return a Promise, so you don't have to manually create one.
//🔹 But if you are writing your own async logic, you may need to create your own Promise.


//---------------ONE WAY to create and consume promise(by storing in variable)----------
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //e.g cryptography, DB calls, network calls
    setTimeout(()=>{
        console.log("Async task 1")
        resolve()
    },2000)

})

// resolve argument is directly connected to promise.then()
promiseOne.then(()=>{
    console.log("Promise 1 Consumed")
})
//.then() also has a call back function which automatically retrieves the value from the created promise
// we have to connect promise and .then by calling resolve() in the promise

//-------------WAY 2-------------------
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2")
        resolve()
    },1000)
   
}).then(()=>{
    console.log("Async task 2 resolved")
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "Chai", email: "xyz@gmail.com"}) //pass data (mostly as an object) the promise got as an argument
    },2000)
})

promiseThree.then((user)=>{
    console.log(user)
})

//data sent by resolve in promise is received in .then()

promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "yashvishah",password:"123"})
        }
        else{
            reject("ERROR: something went wrong")
        }
    },2000)
})

promiseFour
.then((user)=>{  //chaining to access the value returned by 1st chain
    console.log(user)
    return user.username;
}).then((myUsername)=>{
    console.log(myUsername)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Finally the promise is either resolved or rejected")
})   //it will run no matter what


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "javascript",password:"123"})
        }
        else{
            reject("ERROR: promise5 went wrong")
        }
    },2000)
})

//async await: it waits for task to finish, otherwise does not move ahead and gives you an error 
//only problem is it does not explicitly handles errors like then() catch() so we have to use try catch

async function consumePromiseFive(){
    try{
        const result = await promiseFive
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

consumePromiseFive()

// //API USING PROMISES
// //it uses promises because converting into json takes time 
// async function getUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const JSONdata = await response.json();   //we apply await here too
//         console.log(JSONdata)
//     }catch(error)
//     {
//         console.log("Error: ",error)
//     }
// }
// getUsers()

//---the same using .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

//QUESTION: Why is the fetch printing first and then other things?
