let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playChoice;

function compChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
};

function playRound(playerChoice, computerChoice) {
    function stats() {
        console.log("Player: " + playChoice.toLowerCase());
        console.log("Computer: " + computerChoice);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    };
    if (playerChoice.toLowerCase() == "rock" && computerChoice == "rock") {
        stats();
        console.log("It is a draw. Rock v rock");
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        ++playerScore;
        stats();
        console.log("You win. Rock beats scissors");
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        ++computerScore;
        stats();
        console.log("You lose. Paper beats rock");
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        ++playerScore;
        stats();
        console.log("You win. Paper beats rock");
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        ++computerScore;
        stats();
        console.log("You lose. Scissors beats paper");
    } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "paper") {
        stats();
        console.log("It is a draw. Paper v paper");
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        ++computerScore;
        stats();
        console.log("You lose. Rock beats scissors");
    } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        ++playerScore;
        stats();
        console.log("You win. Scissors beats paper");
    } else {
        stats();
        console.log("It is a draw. Scissors v scissors");
    };
};

function game() {
    for (playerScore && computerScore; playerScore < 5 && computerScore < 5;) {
        playChoice = prompt("Enter rock, paper, or scissors", "Rock");
        console.log(playRound(playChoice, compChoice()));
    };
    if (playerScore == 5) {
        console.log("YOU WON THE GAME!");
    } else if (computerScore == 5) {
        console.log("YOU LOST THE GAME!");
    };
}

console.log(game())