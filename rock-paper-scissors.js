let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if(Math.random() > 0.7) {
        return "rock";
    } else if(Math.random() < 0.7 && Math.random() > 0.4) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let user = prompt("Rock, Paper or Scissors: ");
    return user;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanSelection.toLowerCase();
    computerChoice = computerSelection.toLowerCase();
    if(humanChoice === computerChoice) {
        console.log("Pair! Play again!");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log("You win! Play again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log("You lose! Try again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        console.log("You win! Play again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log("You lose! Try again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        console.log("You win! Play again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log("You lose! Try again!");
        console.log(`Score is: Computer: ${computerScore} and Human: ${humanScore}`)
    } else {
        console.log("Wat");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);