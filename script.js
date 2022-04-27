let choices = ["Rock", "Paper", "Scissors"];

function compChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
};
