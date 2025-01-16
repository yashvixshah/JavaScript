const num=400
console.log(num)

const score=new Number(89) //explicitly defines number
console.log(score)
console.log(score.toString())
console.log(score.toFixed(2)) //gives 2 digits after dot

const otherNum=123.45678
console.log(otherNum.toPrecision(3));


//******************* MATHS *************************
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,5,6,7,7,8))
console.log(Math.max(4,5,6,7,7,8))
console.log(Math.random())

const min=90
const max=100
//imp if you want values randomly generated between the range
console.log(Math.floor(Math.random() * ((max-min+1)) + min))