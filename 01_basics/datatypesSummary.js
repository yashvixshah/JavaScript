// ***** Primitive data types *****

//CALL BY VALUE ONLY
// 7 types: String, Number, Boolean, Null, undefined, Symbol

const score=55;
let name="yashvi"
let age=18

const id= Symbol('123');
const id2= Symbol('123');

console.log(id === id2) //not same will be unique

//it is dynamically typed language as you dont need to mention specific type


// ***** REFERENCE TYPES *****

// ARRAY, OBJECTS AND FUNCTIONS
const heroes = ["yashvi","deep","rohan","prasham"]; //array

let myObj=          //object stored in variable
{
    name: "yashvi", //objects
    age: 22
}

//function example
const myFunction=function(){
    console.log("Basic function");
}


//memory
//stack is used for primitive types and heap for non-primitive types