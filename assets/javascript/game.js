// Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Assigning variables to keep track of wins, losses and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var isNewGame = false;

//Create variables that hold references to places in HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userGuessText = document.getElementById("userGuess-text");



//Function for when user presses key, user guesses letter, gets added to letters guessed variable, and guesses left is updated
document.onkeyup = function(event) {
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter);

    lettersGuessed.push(event.key);

    if (computerLetter === event.key) {
      wins++;  
      winsText.textContent = wins;
      resetGame();
      isNewGame = true;
    }
    else if (guessesLeft === 0) {
        losses++;
        lossesText.textContent = losses;
        resetGame();  
        isNewGame = true;
    }

    if (!isNewGame) {
        guessesLeft--;    
    }
    isNewGame = false;
    

    guessesLeftText.textContent = guessesLeft;
    userGuessText.textContent = lettersGuessed;

};

function resetGame(){
    guessesLeft = 9;
    lettersGuessed = [];
};


