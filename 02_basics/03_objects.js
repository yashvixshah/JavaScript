// can be declared using literal and constructor
// if declared using literal -> it will be singleton 
//otherwise multiple instances

const mySymbol=Symbol("symbol1")
//object literals
const user={
    name: "yashvi",
    [mySymbol]: "symbol2", //have to define symbol keys in square brackets
    age: 21,
    location: "ahmedabad",
    isLogged: false
}

//access methods
console.log(user.name)
console.log(user[mySymbol]) //syntax to print symbol keys

user.name="deep" //to change values
//Object.freeze(user) //no further changes can be made
user.name="yashvi"  //would make no change
console.log(user)

user.greetings=function(){
    console.log("hello user")
}

user.greetingsTwo=function(){
    console.log(`hello user ${this.name}`)
}

console.log(user.greetings())
console.log(user.greetingsTwo())



