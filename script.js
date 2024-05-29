//This mathematical algorithm generates the random number 
let randomNumber = Math.floor(Math.random() * 100) + 1;

//These are the variables required in order for the function to work
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButtton;
let previousGuesses = [];
guessField.focus();

/*Function that checks out the user`s guess with the correct answer and provides output.
It also checks on the amount of turns left. */
function checkGuess () {
    const userGuess = Number(guessField.value);

    if(guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    }
    previousGuesses.push(userGuess);
    guesses.textContent = `Previous guesses: ${previousGuesses.join(", ")}`;

    if(userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = " ";
      setGameOver();
    }else if(guessCount === 10) {
      lastResult.textContent = "Sorry, you ran out of guesses. The number was " + randomNumber;
      lowOrHi.textContent = " ";
      setGameOver();
  }else{
    lastResult.textContent = "Wrong! Try again!";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
  }else if(userGuess > randomNumber) {
    lowOrHi.textContent = "Last guess was too high!";
  }
  }
  guessCount++;
  guessField.value = " ";
  guessField.focus();
  }

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

//This function that resets everything by clearing the paragraph elements and generating a new random number.
function resetGame() {
    guessCount = 1;
    previousGuesses = [];
    
    const resetParas = document.querySelector(".resetParas p");
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
