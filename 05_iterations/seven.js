//reduce
const nums=[1,2,3]

const total= nums.reduce((accum,current) =>
{
    return accum + current
},0)  //this zero is initial value that the accumulator takes

console.log(total)

const shopCart=
[
    {
        item: "Book",
        price: 100
    },
    {
        item: "pencil",
        price: 200
    },
    {
        item: "pen",
        price: 300
    },
    {
        item: "erasor",
        price: 400
    }
]

const shopTotal= shopCart.reduce((accumulator,item) =>{
    return accumulator+item.price
},0)

console.log(shopTotal)