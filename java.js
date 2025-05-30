const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors:");
    } while (!choices.includes(choice));
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "tie";
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "human";
        } else {
            return "computer";
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
            console.log(`Round ${i+1}: You win!`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Round ${i+1}: Computer wins!`);
        } else {
            console.log(`Round ${i+1}: It's a tie!`);
        }
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}


playGame();