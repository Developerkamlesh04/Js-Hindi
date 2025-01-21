const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const previousGuesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParse");

let previousGuessesArray = [];
let numberGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        previousGuessesArray.push(guess);
        if (numberGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    previousGuesses.textContent = `Previous guesses: ${previousGuessesArray.join(
        ", "
    )}`;
    userInput.value = "";
    userInput.focus();
}

function displayMessage(message) {
    lowOrHi.textContent = message;
    lowOrHi.style.color = message === "You got it right!" ? "green" : "red";
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You got it right!");
        endGame();
    } else {
        numberGuess++;
        remaining.textContent = `Guesses remaining: ${11 - numberGuess}`;
        if (guess < randomNumber) {
            displayMessage("Your guess is too low.");
        } else if (guess > randomNumber) {
            displayMessage("Your guess is too high.");
        }
    }
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    startOver.innerHTML = `<button id="restart">Start New Game</button>`;
    const restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", function () {
        resetGame();
    });
}

function resetGame() {
    previousGuessesArray = [];
    numberGuess = 1;
    playGame = true;

    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = "";
    userInput.focus();

    previousGuesses.textContent = "";
    lowOrHi.textContent = "";
    remaining.textContent = "";
    startOver.innerHTML = "";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

//! 2nd method

// submit.addEventListener("click", function (event) {
//     event.preventDefault();
//     const guess = parseInt(userInput.value);
//     // console.log(typeof guess);
//     if (isNaN(guess)) {
//         alert("Please enter a valid number");
//     } else {
//         if (guess === randomNumber) {
//             lowOrHi.textContent = "You got it right";
//             startOver.style.backgroundColor = "green";
//             document.body.style.backgroundColor = "green";
//             submit.disabled = true;
//         } else if (guess !== randomNumber) {
//             previousGuesses.textContent += guess + " ";
//             if (guess < randomNumber) {
//                 lowOrHi.textContent = "Your guess is too low";
//             } else if (guess > randomNumber) {
//                 lowOrHi.textContent = "Your guess is too high";
//             }
//         }
//     }
//     userInput.value = "";
//     Reminning.textContent = 10 - previousGuesses.textContent.split(" ").length;
//     if (Reminning.textContent === "0") {
//         submit.disabled = true;
//         startOver.style.backgroundColor = "red";
//         document.body.style.backgroundColor = "red";
//     }
// })
