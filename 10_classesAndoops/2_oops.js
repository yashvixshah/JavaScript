//object literal: collection of properties and methods
const user={
    username: "yashvi",
    userCount: 8,
    signedIn: false,

    getUserDetails(){
        //console.log("GOT USER DETAILS")
        //console.log(`Username: ${username}`). this won't work since no particular reference is given
        console.log(`Username: ${this.username}`)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())



//Solution to first type-
// Constructor function: creates a new context/instance
function User(username, loginCount, signedIn)
{
    this.username=username
    this.loginCount=loginCount
    this.signedIn=signedIn

    //return this  //even if you write or not it will return thiss
}

const userOne=new User("hitesh",12,false)
const userTwo=new User("deep",16,true)
console.log(userOne.getUserDetails)
console.log(userTwo)