let choices = ["Rock", "Paper", "Scissors"];
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function compChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == rock && computerChoice() == rock) {
        return "It is a draw. Rock v rock";
    } else if (playerChoice.toLowerCase() == rock && computerChoice() == scissors) {
        return "You win. Rock beats scissors";
    } else if (playerChoice.toLowerCase() == rock && computerChoice() == paper) {
        return "You lose. Paper beats rock";
    } else if (playerChoice.toLowerCase() == paper && computerChoice() == rock) {
        return "You win. Paper beats rock";
    } else if (playerChoice.toLowerCase() == paper && computerChoice() == scissors) {
        return "You lose. Scissors beats paper";
    } else if (playerChoice.toLowerCase() == paper && computerChoice() == paper) {
        return "It is a draw. Paper v paper";
    } else if (playerChoice.toLowerCase() == scissors && computerChoice() == rock) {
        return "You lose. Rock beats scissors";
    } else if (playerChoice.toLowerCase() == scissors && computerChoice() == paper) {
        return "You win. Scissors beats paper";
    } else {
        return "It is a draw. Scissors v scissors";
    };
};

console.log(playRound("Rock", compChoice))