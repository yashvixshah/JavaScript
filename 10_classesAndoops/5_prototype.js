let myName = "yashvi"
let myName2 = "yashvi       "

console.log(myName.length)
console.log(myName.truelength) //true length is a non-defined function
//our goal is to create a by deafult function named true length "for all strings" that works like trim()

let myName3 = "BLAHHHH    "
String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
}

myName3.truelength();
myName2.truelength();
"DEEP.     ".truelength();

let myHero=["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`SpiderPower is :${this.spiderman}` )
    }
}


Object.prototype.yashvi=function(){
    console.log("Yashvi is now present in all objects")
}

heroPower.yashvi(); //both will have properties of object prototype as everything in jS is a object
myHero.yashvi();

//Question: But what if I inject a property to Array will it go to Object?
Array.prototype.heyYashvi=function(){
    console.log("yashvi says hello in array")
}

myHero.heyYashvi()
heroPower.heyYashvi()


//inheritance
const user ={
    name: "blah",
    email: "blah.google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS ASsignment",
    isFullTime: true,
    __proto__ : teachingSupport //now TASupport will have all properties of teachingSupport
}

teacher.__proto__ = user //old syntax

//each of this objects are a separate instance and have all default proprties
//when we want to link two objects we use  __proto__


//MODERN PROTOTYPE
Object.setPrototypeOf(teachingSupport,teacher) //same as __proto__
//teachingsupport will have properties of teacher now