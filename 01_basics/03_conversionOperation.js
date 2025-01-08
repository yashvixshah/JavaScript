let score="35"

let score2="33abs"

console.log(typeof score)
console.log(typeof (score))

let valueinNumber= Number(score); //type conversion of string to number//
console.log("after conversion: " +typeof valueinNumber)

let valueinNumber2=Number(score2);
console.log(typeof valueinNumber2)
//will successfully get converted to number and print type as number//
// but will return Nan (not a num) when printed//
console.log(valueinNumber2)

//conversion possibilities
// "33" => 33
// "33abc" => Nan
// true=>1 false=>0

let isLoggedin=1

let booleanIsLoggedIn=Boolean(isLoggedin)
console.log(booleanIsLoggedIn)

// 1 => true   0 => false
// "" => false
// "yashvi" => true