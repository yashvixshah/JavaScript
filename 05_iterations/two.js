//for of loop

// const arr=[1,2,3,4,5]
// for(const val of arr)
// {
//     console.log(val)
// }

const greetings="Hello yashvi"
for(const g of greetings)
{
    if(g==" ")
    {
        continue
    }
    console.log(`each char is ${g}`)
}


//MAPS
const map=new Map() //object in js holds key value pairs
map.set(1,"yashvi")
map.set(2,"deep")
map.set(3,"rohan")
map.set(4,"prasham")
//stores unique values only and maintains order

console.log(map)

for(const [key,value] of map)
{
    console.log(key ,"-" ,value)
}