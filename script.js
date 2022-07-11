//Variables
compGuess = null;
computerScore = 0;
playerScore = 0;
rounds = 1;

const roundsText = document.querySelector('#rounds');
const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');
const computerWins = document.querySelector('#compWins');
const playerWins = document.querySelector('#playerWins');
const whoWins = document.querySelector('#whoWon');

main();
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
//________________________________________________________________
//Functions maintaining the game
function main(){
    rockChoice.addEventListener('click', ()=> {
        return playGame('rock');
    })
    paperChoice.addEventListener('click', ()=> {
        return playGame('paper');
    })
    scissorsChoice.addEventListener('click', ()=> {
         return playGame('scissors');
    })

}

function playGame(playerGuess){
    computerPlay();
    if ((compGuess == 'rock' && playerGuess == 'paper')  || (compGuess == 'paper' && playerGuess == 'scissors') || (compGuess == 'scissors' && playerGuess == 'rock')) {
        whoWins.textContent = "Heck Yeah! You chose " + playerGuess + "! And the computer chose " + compGuess;
        playerWins.textContent = ++playerScore;
        addRounds();
        return 1;
    }
    else if (compGuess == playerGuess){
        whoWins.textContent = 'It was a draw on ' + playerGuess + '!';
        addRounds();
    } 
    else{
        whoWins.textContent = "Oh no! The computer chose " + compGuess + "! And you chose " + playerGuess;
        computerWins.textContent = ++computerScore;
        addRounds();
        return 2;
    }
}

//________________________________________________________________
//Function to reset the game
function reset(){
    rounds = 1;
    computerWins.textContent =  computerScore = 0;
    playerWins.textContent =  playerScore = 0;
}

//________________________________________________________________
//Function for rounds implementation
function addRounds() {
    if (rounds < 5){
        roundsText.textContent = 'Round: ' + rounds;
        rounds++;
    }
    else if (rounds == 5){
        if (computerScore > playerScore){
            roundsText.textContent = 'The Computer Won! Try Again?'
            reset();
        }
        else if (computerScore < playerScore){
            roundsText.textContent = 'The Player Won! Play Again?';
            reset();
        }
    } 
}

