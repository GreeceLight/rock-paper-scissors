Creating a project to simulate Rock Paper Scissors(R.P.S.)

Project Layout
Computer must generate a random number to represent R.P.S.
    Rock = 1
    Paper = 2
    Scissors = 3
Have the numbers corralate to a string variable(answer) of each option: "Rock", "Paper", or "Scissors"

Take in user input of string(guess) being either "Rock", "Paper", or "Scissors"

Compare the answer var to the guess var and determine if it's the same.
    if answer != guess{
        say "Try again"
        restart game where the answer resets
    }
