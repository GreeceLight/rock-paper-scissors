//Variables
compGuess = null;
computerScore = 0;
playerScore = 0;

const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');
const computerWins = document.querySelector('#compWins');
const playerWins = document.querySelector('#playerWins');
const whoWins = document.querySelector('#whoWon');


initialLoad();
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
function initialLoad(){
    rockChoice.addEventListener('click', ()=> {
        playGame('rock');
    })
    paperChoice.addEventListener('click', ()=> {
        playGame('paper');
    })
    scissorsChoice.addEventListener('click', ()=> {
        playGame('scissors');
    })

}

function playGame(playerGuess){
    computerPlay();
    if ((compGuess == 'rock' && playerGuess == 'paper')  || (compGuess == 'paper' && playerGuess == 'scissors') || (compGuess == 'scissors' && playerGuess == 'rock')) {
        console.log("Heck Yeah! You chose " + playerGuess + "! And the computer chose " + compGuess);
        whoWins.textContent = "Heck Yeah! You chose " + playerGuess + "! And the computer chose " + compGuess;
        
        return 1;
    }
    else if (compGuess == playerGuess){
        console.log('It was a draw on ' + playerGuess + '!');
        whoWins.textContent = 'It was a draw on ' + playerGuess + '!';
    } 
    else{
        console.log("Oh no! The computer chose " + compGuess + "! And you chose " + playerGuess);
        whoWins.textContent = "Oh no! The computer chose " + compGuess + "! And you chose " + playerGuess;

        return 2;
    }
}

//________________________________________________________________
//Function to reset the game
function reset(){
    computerScore = 0;
    playerScore = 0;
}
//________________________________________________________________
//Function to play the game again
function playAgain(){
    if(computerScore>playerScore) alert("The computer won, oof!");
    else alert("Hey! You Won!! WWOOOOOO!!!");
    
    askPlay = prompt("Do you want to play again? :")
    if(askPlay == "Yes" || askPlay == "yes"){
        playRounds();
        reset();
    }
    else if (askPlay == "No" || askPlay == "no"){
        alert("Okay, Bye")
        reset();
    }
}
//________________________________________________________________
//Function for rounds implementation
function playRounds() {
    for(let round = 0; round < 5; round++){
        if(playGame() == 1 ){
            playerScore++;
            console.log("Playerscore: " + playerScore + " | Computerscore: " + computerScore);
        }
        else{
            computerScore++;
            console.log("Computerscore: " + computerScore + " | Playerscore: " + playerScore);
        }
    }
    playAgain();
}

