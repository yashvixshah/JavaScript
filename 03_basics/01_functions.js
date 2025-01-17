//simply package of code that you can reuse n number of times


function sayMyName() //function defination
{
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("V");
    console.log("I");
}

//sayMyName() //function call

// function addTwoNums(number1, number2)
// {
//     console.log(number1+number2) //just printing on console 
// }

//addTwoNums(4,5)

function addTwoNums(number1,number2)
{
    const result=number1+number2
    return result;
}

const final=addTwoNums(6,8)
console.log(final)


function loginUserMsg(username)
{
    if(!username)
    {
        console.log("Please pass username argument")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("deep"))
console.log(loginUserMsg()) //will display undefined just logged in

//what to do when you have multiple params to add?
function calcPrice(...nums) //rest operator 
{
    return nums //will return array of all args passed
}

console.log(calcPrice(10,20,30))

const user={
    name: "yashvi",
    age: 21
}

//handling objects in functions
function handleObj(anyObject)
{
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObj(user)

//can also pass object directly
handleObj({
    name: "deep",
    age: 21
})

const myArray=[200,400,600,800,1000]

function returnSecondValue(myArr)
{
    return myArr[1]
}

console.log(returnSecondValue(myArray))