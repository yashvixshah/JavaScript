// let a=10
// const b=20
// var c=30

// console.log(a,b,c) this works completely fine
let a=300;
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("inner A: ",a) //block scope
}
console.log(a) //global scope

//console.log(a,b,c) //would create problem simce a and b will be out of scope


//nested scope
function one()
{
    const username="yashvi"

    function two(){
        const web="www.google.com"
        console.log(username)
    }
    //console.log(web) //simply remember elder can't take icecream from younger
    two()
}
//one()

if(true)
{
    const username="yashvi"
    if(username === "yashvi")
    {
        const web="www.google"
        console.log(username + web)
    }
    console.log(username)
    //console.log(web)  out of scope
}
//console.log(username) out of scope

//******************** INTERESTING ********************

console.log(addOne(5))    //can access before declaration

function addOne(number)
{
    return number+1;
}

//console.log(addTwo(5))  //can't access before declaration in this type
const addTwo = function(num)
{
    return num+2
}
console.log(addTwo(5))  


