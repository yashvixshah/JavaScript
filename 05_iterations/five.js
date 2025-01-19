// const coding=["c","c++","java","ruby","python","js"]

// //for each NEVER returns a value
// const values = coding.forEach((item)=>{
//     return item
// })

// console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10]

//filter returns values while forEach does not
const newNums= myNums.filter((num)=> {
    return num > 4
}) //num > 4 is condition

console.log(newNums)


const newNums1=[]       //same thing using foreach
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums1.push(num)
    }
})

console.log(newNums1)

const myCoding=[            //array of objects
    {
        language: "java",
        filename: ".java",
        year: 2000
    },
    {
        language: "python",
        filename: ".py",
        year: 2001
    },
    {
        language: "c",
        filename: ".c",
        year:2003
    },
    {
        language: "c++",
        filename: ".cpp",
        year: 1999
    }
]

const codeFilter = myCoding.filter((lang) => {
    return lang.language == "c"
})

const codeFilter2= myCoding.filter((y) => y.year < 2000)

console.log(codeFilter)
console.log(codeFilter2)