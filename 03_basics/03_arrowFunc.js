const user={
    name: "deep",
    price: 6969,

    welcomeMsg: function(){
        console.log(`Hi, ${this.name}!`)
    }
}

// user.welcomeMsg()
// user.name="sam"
// user.welcomeMsg()

//console.log(this)

// this keyword does not work in arrow function
const chai2= function() 
 {
    const username= "rohan"
    console.log(this.username) //would print undefined
}
chai2()

const chai= () => {
    const username= "rohan"
    console.log(this.username) //would also print underfined
}
chai()

//here it is fine if you don't use return keyword because you have used ()
const addTwo = (number1,number2) => (number1+number2) //implicit return

console.log(addTwo(9,9))