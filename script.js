//Variables
compGuess = null;
computerScore = 0;
playerScore = 0;
//________________________________________________________________
//Function to create random computer Guess
function computerPlay(){
    randNum = Math.random();
    if (randNum <= 0.3) {
        compGuess = "rock";
    }
    else if (randNum > 0.3 && randNum <= 0.6){
        compGuess = "paper";
    }
    else {
        compGuess = "scissors";
    }
}