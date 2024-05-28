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

    if(guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
      }
      guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You Got It Right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();

    }else if(guessCount === 10){
        lastResult.textContent = "Game Over!!";
        lastResult.style.backgroundColor
        lowOrHi.textContent = "purple";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong! Try Again!";
        lastResult.style.backgroundColor = "red";
    }
    if(userGuess > randomNumber){
        lowOrHi.textContent = "The number was too high.";
    }else if(userGuess < randomNumber){
        lowOrHi.textContent = "The number was too low.";
    }
}

guessCount++;
guessField.value = " ";
guessField.focus();

guessSubmit.addEventListener("click" , checkGuess);

//This function allows the user to restart the game.
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled =true;
    resetButtton = document.createElement("button");
    resetButtton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click" , resetGame);
}

//This function that resets everything by clearing the paragraph elements
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelector(".resetParas");
    for (const resetPara of resetParas) {
        resetPara.textContent = " ";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = " ";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
