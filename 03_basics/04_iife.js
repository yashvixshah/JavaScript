//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// used for immediate execution or if we don't want global scope to pollute blocks


//()()  // first bracket for defination second for execution call

//named iife
(function chai(){
    console.log("IIFE EXAMPLE")
})();           //need to add end for context end for next function otherwise won't woke

//unnamed iife
(() => {
    console.log("IIFE EXAMPLE 2")
})();

((name) => {
    console.log(`Hi, ${name}`)
})("Yashvi")