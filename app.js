const options = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;

const getComputerChoice = () => {
    return options[Math.floor(Math.random()*3)]
};

const playRound = (playerSelection, computerSelection=getComputerChoice()) => {
    if (playerSelection.toLowerCase === computerSelection){
        return "Tie! You and Computer Chose the Same Thing"
    }
    switch(playerSelection.toLowerCase()){
        case "rock":
            if (computerSelection === 'paper'){
                computerScore += 1;
                return "You Lose! Paper beats Rock"
            } else {
                playerScore += 1;
                return "You Win! Rock beats Scisssors"
            };
        case "paper":
            if (computerSelection === "scissors"){
                computerScore += 1;
                return "You Lose! Scissors beats Paper"
            } else {
                playerScore += 1;
                return "You Win! Paper beats Rock"
            };
        case "scissors":
            if (computerSelection === "rock"){
                computerScore += 1;
                return "You Loose! Rock beats Scissors"
            } else {
                playerScore += 1;
                return "You Win! Scissors beats Paper"
            };
    }; 
};

const game = () =>  {
    for (let i = 0; i < 5; i++){
        playerInput = window.prompt('Enter paper, scissors, or rock.')
        console.log(playRound(playerInput));
    }
    return playerScore > computerScore ? console.log("You Won the Match!") : console.log("You lost the Match!")
}


game()