//for loop

// for(let i=1;i<=10;i++)
// {
//     console.log(`Table of ${i}`)
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// for(let k=1;k<=20;k++)
// {
//     if(k==5)
//     {
//         console.log(`Detected 5`)
//         continue //break
//     }
//     console.log(`Value is ${k}`)
// }

let j=0
while(j<=10)
{
    console.log(j)
    j=j+2
}

let myArray=["yashvi","deep","rohan"]
let m=0;
while(m<myArray.length)
{
    console.log(`Value at index ${m} is ${myArray[m]}`)
    m++
}

let i=0;
do{
    console.log(i)     //will run atleast once
    i++
}while(i<10)