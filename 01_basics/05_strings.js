// can be denoted using ' ' or  " "

const name="Yashvi"
const repo=15

console.log(name + repo) //old way

console.log(`hello my name is ${name} `)
//string interpolation (modern way)

// another way to declare string
const surname=new String("Shah")
console.log(surname[0])

console.log(surname.toUpperCase())
console.log(surname.charAt(2))

console.log(surname.slice(-8,2)) //takes negative value for reverse

const StringOne="    BLAH     "
console.log(StringOne)
console.log(StringOne.trim())   //removes extra white spaces

const url="www.google.%20com"
console.log(url.replace("%20","-"))

console.log(url.includes('google'))

const splitExample='yashvi-kalpesh-shah'
console.log(splitExample.split('-'))
