let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let results = document.createElement('div');
results.textContent = "||"
let humanScore = document.createElement('div');
let cpuScore = document.createElement('div');
humanScore.classList.toggle('score');
cpuScore.classList.toggle('score');
humanScore.textContent = "Player Score: " + playerScore;
cpuScore.textContent = "Computer Score: " + computerScore;
/* let playChoice; */

function compChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
};

function playRound(playerChoice, computerChoice) {
    function stats() {
        humanScore.textContent = "Player Score: " + playerScore;
        cpuScore.textContent = "Computer Score: " + computerScore;
    };
    if (playerChoice.toLowerCase() == computerChoice) {
        stats();
        results.textContent = `It is a draw, ${playerChoice.toLowerCase()} vs. ${computerChoice}`;
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors" ||
    playerChoice.toLowerCase() == "paper" && computerChoice == "rock" ||
    playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        ++playerScore;
        stats();
        results.textContent = `You win, ${playerChoice.toLowerCase()} beats ${computerChoice}`;
    } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper" ||
    playerChoice.toLowerCase() == "paper" && computerChoice == "scissors" ||
    playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
                   ++computerScore;
                   stats();
                   results.textContent = `You lose, ${computerChoice} beats ${playerChoice.toLowerCase()}`;
                };
            };
            
let buttonContainer = document.createElement('div');
let rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
let paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
buttonContainer.classList.toggle('buttonContainer');
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);
buttonContainer.insertBefore(results, rockBtn);
buttonContainer.insertBefore(cpuScore, results);
buttonContainer.insertBefore(humanScore, cpuScore);
let buttons = document.querySelectorAll('button');
let array = Array.from(buttons)
array.forEach(button => button.addEventListener('click', function roundPlay() {
    if (playerScore < 5 && computerScore < 5) {
        playRound(button.textContent, compChoice())
        if (playerScore == 5) {
            button.removeEventListener('click', roundPlay);
            results.textContent = "YOU WON THE GAME!";
            let refresh = document.createElement('button');
            refresh.textContent = "PLAY AGAIN";
            buttonContainer.appendChild(refresh);
            refresh.addEventListener('click', function () {
                window.location.reload();
            });
        } else if (computerScore == 5) {
            button.removeEventListener('click', roundPlay);
            results.textContent = "YOU LOST THE GAME! (scrub)";
            let refresh = document.createElement('button');
            refresh.textContent = "PLAY AGAIN";
            buttonContainer.appendChild(refresh);
            refresh.addEventListener('click', function () {
                window.location.reload();
            });
        };
    } 
}));