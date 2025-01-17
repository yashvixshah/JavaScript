
const myArr=[1,2,3,4,4,5,"yashvi"]
//js arrays are resizeable

console.log(myArr[3])

const friends=["deepi","rohan","prash"]
console.log(friends[0])

myArr.push(6)
console.log(myArr)
friends.push("yashvi")
console.log(friends)

myArr.pop()
myArr.pop()
console.log(myArr)

const newStringArray=myArr.join() //simply turns array to string
console.log(myArr)
console.log(newStringArray)

// slice does not affect original array
// splice affects the original array

console.log("A: ",myArr)
console.log(myArr.slice(1,3))
console.log(`Used slice: ${myArr}`)

console.log(myArr.splice(1,3))
console.log(`After splice: ${myArr}`)


