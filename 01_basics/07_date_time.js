let myDate=new Date()
console.log(myDate) //data in miliseconds
console.log(myDate.toDateString())
console.log(myDate.toString())

//date is an object in javascript
const myCreatedDate=new Date(2024,0,25)
//year, month(starts from 0), date
console.log(myCreatedDate.toDateString());

const myCreatedDate1=new Date("25-01-2024")
console.log(myCreatedDate.toDateString());

console.log(Date.now())     //in milliseconds


let newDate=new Date();
console.log(newDate.getDate())

newDate.toLocaleString('default',
    {
        weekday: "long" 
    }
)