//keep score 
var playerScore = 0;
var computerScore = 0;

// set up place to display scores and the final message in html
const scoreBoard = document.getElementById("scoreboard");
const finalMessage = document.getElementById("final-message");

//fuction that generates computer's choice
const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)]
};

//determines the winner of each round changes score 
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

//determies who won the game 
const game = (playerInput) =>  {
    console.log(playRound(playerInput));
    scoreBoard.textContent = playerScore + "-" + computerScore;
    if (computerScore >=5 || playerScore >= 5){
        return playerScore > computerScore ? scoreBoard.textContent="You Won the Match!" : scoreBoard.textContent="You lost the Match!"
    }
}

// alow player to make his choice through buttons 
const btns = document.querySelectorAll(".player-choice-btn");
btns.forEach(btn => btn.addEventListener('click', () => {
    game(btn.textContent)
}))
