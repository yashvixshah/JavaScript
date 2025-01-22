const submit=document.getElementById("subt")
const userInput=document.getElementById("guessField")
const guessArray=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas");


const p=document.createElement("p")

let randomNumber=parseInt(Math.random() * 100 + 1);

let prevGuess=[] //array to store all previous guesses
let numGuess=1 //count of guesses made

let playGame=true;

if(playGame)
{
    submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) 
{
  if(isNaN(guess) || guess<1 || guess>100)
  {
    alert("Please enter valid input")
  }
  else{
    prevGuess.push(guess) //store in array of old guesses
    if(numGuess==11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess)
{
  //checks if its equal to random number
  if(guess==randomNumber)
  {
    displayMessage("Congrats! You guessed it right!")
    endGame()
  }
  else if(guess<randomNumber)
  {
    displayMessage("AWW number is too low")
  }
  else if(guess>randomNumber)
  {
    displayMessage("Uii number is too high")
  }
}

function displayGuess(guess)
{
  //updates the prev guesses and guesses remaining
  userInput.value=""
  guessArray.innerHTML += `${guess}-`
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message)
{
  //dom manipulation happens here
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=""
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML='<h3 id="newGame">Start new game</h3>'
  startOver.appendChild(p)
  playGame=false;
  newGame()
}

function newGame(){
  const newGame=document.querySelector("#newGame")
  newGame.addEventListener('click',(e)=> {
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess=1;
    guessArray.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true;
  })
}

