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
        console.log("Player: " + playerChoice.toLowerCase());
        console.log("Computer: " + computerChoice);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    };
    if (playerChoice.toLowerCase() == computerChoice) {
        stats();
        console.log(`%cIt is a draw, ${playerChoice.toLowerCase()} vs. ${computerChoice}`, "color: blue");
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors" ||
               playerChoice.toLowerCase() == "paper" && computerChoice == "rock" ||
               playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        ++playerScore;
        stats();
        console.log(`%cYou win, ${playerChoice.toLowerCase()} beats ${computerChoice}`, "color: green");
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper" ||
               playerChoice.toLowerCase() == "paper" && computerChoice == "scissors" ||
               playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        ++computerScore;
        stats();
        console.log(`%cYou lose, ${computerChoice} beats ${playerChoice.toLowerCase()}`, "color: red");
    } else {
        console.log("That is not a valid input");
    };
};

function game() {
    for (playerScore && computerScore; playerScore < 5 && computerScore < 5;) {
        playChoice = prompt("Enter rock, paper, or scissors", "Rock");
        playRound(playChoice, compChoice());
    };
    if (playerScore == 5) {
        console.log("YOU WON THE GAME!");
    } else if (computerScore == 5) {
        console.log("YOU LOST THE GAME!");
    };
};

let buttonContainer = document.createElement('div');
let rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
let paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);
let buttons = document.querySelectorAll('button');
let array = Array.from(buttons)
console.log(array)
array.forEach(button => button.addEventListener('click', function roundPlay() {
    if (playerScore < 5 && computerScore < 5) {
        playRound(button.textContent, compChoice())
        if (playerScore == 5) {
            button.removeEventListener('click', roundPlay);
            console.log("YOU WON THE GAME!");
        } else if (computerScore == 5) {
            button.removeEventListener('click', roundPlay);
            console.log("YOU LOST THE GAME! (scrub)")
            };
    } 
}));