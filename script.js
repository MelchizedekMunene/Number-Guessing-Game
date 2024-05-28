//This mathematical algorithm generates the random number 
let randomNumber = Math.floor(Math.random() * 100) + 1;

//These are the variables requires in order for the function to work
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButtton;

/*Function that checks out the user`s guess with the correct answer and provides output.
It also checks on the amount of turns screen left. */

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses: ";
    }
    guesses.textContent = '${guesses.textContent} ${userGuess}';

    if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You Got It Right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();

    }else if(guessCount === 10){
        lastResult.textContent = "Game Over!!";
        lowOrHi.textContent = " ";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong! Try Again!";
        lastResult.style.backgroundColor = "red";
    }
    if(userGuess > randomNumber){
        lowOrHi.textContent = "The number was too high.";
    }else if(userGuess < randomNumber){
        lowOrHi,textContent = "The number was too low.";
    }
}

guessCount++;
guessField.value = " ";
guessField.focus();
