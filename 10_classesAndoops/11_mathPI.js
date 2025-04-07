//tells you hidden features of an object

// console.log(Math.PI)
// Math.PI=5 //can't change value but WHYYYYY?
// console.log(Math.PI)

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor) // the writable property is set to false and that's why we can't change value

const chai = {
    name: "ginger chai",
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("Problem here")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name")) //can't write just chai because getOwnProperty descriptor does not work on object it works on property

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false   //enumerable means repeatable
})

console.log(Object.getOwnPropertyDescriptor(chai,"name")) 

for (const [key,value] of Object.entries(chai) ){
    if(typeof value!=="function")
    {
        console.log(`${key} : ${value}`) //as we only want key value pairs not function
    }
    
}