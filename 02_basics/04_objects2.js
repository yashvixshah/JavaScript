const tinderUser= new Object() //declared using constructor(singleton object)
const tinderUser2={} //declared using literal

tinderUser2.id=123
tinderUser2.name="yashvi"
console.log(tinderUser2)

const anotherUSER={
    email: "abc@gmail.com",
    fullname: {
        username: {
            firstname: "yashvi",
            lastname: "shah"
        }
    }
}

//console.log(anotherUSER.fullname.username.lastname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = 
{
    3: "c",
    4: "d"
}

const obj3 = { obj1,obj2 } //will create objects inside objects
const obj4=Object.assign(obj1,obj2) //will separately combine all objects together
console.log(obj4)


//methods on an object

console.log(tinderUser2)
console.log(Object.values(tinderUser2)) //fetches only keys
console.log(Object.values(tinderUser2)) //fetches only values
console.log(Object.entries(tinderUser2))

const course = {
    coursename: "javascript",
    price: 999,
    instructor: "mr.xyz"
}

//course.coursename instead of writing this multiple times

//better way: "concept of destructuring"
const {coursename}=course
console.log(coursename)  //can use coursename directly instead of doing course.coursename