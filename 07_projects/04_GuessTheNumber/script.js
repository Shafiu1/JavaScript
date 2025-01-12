const MIN=1;
const MAX=100;

let randomNumber = Math.floor((Math.random()*(MAX-MIN))+MIN);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
    }else if(guess<1){
        alert("please enter a number more than 1");
    }else if(guess>100){
        alert("please enter a number less than 100")
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess ===randomNUmber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess<randomNUmber){
        displayMessage(`Number is too low`);
    }else if(guess>randomNumber){
        displayMessage(`Number is too HIGH`);
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML= `${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerText=`<h2 id='newGame'>Start new Game</h2>`
    StartOver.appendChild(p);
    playGame(false);
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        let randomNumber = Math.floor((Math.random()*(MAX-MIN))+MIN);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playGame=true;
    })
}

