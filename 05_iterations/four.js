//for each loop

const coding=["c","c++","java","ruby","python","js"]

coding.forEach(function (item){    //call back function would not have a name so just write function
    console.log(item)
})

coding.forEach((blah) => {     //for each using arrow function
    console.log(blah)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe) //passing ref of the function

//access the for each loop has
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
}) //prints value, its index and the entire array

const myCoding=[            //array of objects
    {
        language: "java",
        filename: ".java"
    },
    {
        language: "python",
        filename: ".py"
    },
    {
        language: "c",
        filename: ".c"
    },
    {
        language: "c++",
        filename: ".cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.language,item.filename)
})