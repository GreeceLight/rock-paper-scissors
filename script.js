//Variables
compGuess = null;
computerScore = 0;
playerScore = 0;
computerPlay();
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
    console.log(compGuess);
}
//________________________________________________________________
//Functions maintaining the game
function initialLoad(){
    const rockChoice = document.querySelector('.rock');
    const paperChoice = document.querySelector('.paper');
    const scissorsChoice = document.querySelector('.scissors');
    scissorsChoice.addEventListener('click', ()=> {
        console.log('scissors chosen');
    })
    rockChoice.addEventListener('click', ()=> {
        console.log('rock chosen');
    })
    paperChoice.addEventListener('click', ()=> {
        console.log('paper chosen');
    })
}

function playGame(){
    computerPlay();
    if (compGuess == playerGuess) {
        console.log("Heck Yeah! " + playerGuess + " beats " + compGuess);
        return 1;
    }
    else{
        console.log("Oh no! " + compGuess + " beats " + playerGuess);
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
// function playRounds() {
//     for(let round = 0; round < 5; round++){
//         if(playGame() == 1 ){
//             playerScore++;
//             console.log("Playerscore: " + playerScore + " | Computerscore: " + computerScore);
//         }
//         else{
//             computerScore++;
//             console.log("Computerscore: " + computerScore + " | Playerscore: " + playerScore);
//         }
//     }
//     playAgain();
// }

