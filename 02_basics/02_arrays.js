const heroines=["kareena","katrina","alia"]
const heroes=["ranbir","shahrukh","salman"]

//heroes.push(heroines)   //WRONG WAY: will push an array in array 
//console.log(heroes)

const bollywood=heroes.concat(heroines)
console.log(bollywood)

const allbolly=[...heroes,...heroines]
console.log(allbolly)

const arr=[1,2,[3,4,5],6,[7,[8,9]]]
const newArr=arr.flat(2)
console.log(newArr)

console.log(Array.isArray("Yashvi")) //checks if it is an array
console.log(Array.from("Yashvi")) //converts into an array

let s1=100
let s2=200
let s3=300

const newNumArray= Array.of(s1,s2,s3)
console.log(newNumArray)