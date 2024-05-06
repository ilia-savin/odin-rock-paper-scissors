let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice +
        ", score is " + String(humanScore) + " and " + String(computerScore);
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice +
        ", score is " + String(computerScore) + " and " + String(humanScore);
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerChoice = computerPlay();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore <= computerScore) {
        console.log("You lost this game!");
    } else if (humanScore >= computerScore) {
        console.log("You won this game!");
    } else {
        console.log("What a nice game!")
    }
}

playGame();