const options = ['rock', 'paper', 'scissors'];

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
                return "You Lose! Paper beats Rock"
            } else {
                return "You Win! Rock beats Scisssors"
            };
        case "paper":
            if (computerSelection === "scissors"){
                return "You Lose! Scissors beats Paper"
            } else {
                return "You Win! Paper beats Rock"
            };
        case "scissors":
            if (computerSelection === "rock"){
                return "You Loose! Rock beats Scissors"
            } else {
                return "You Win! Scissors beats Paper"
            };
    }; 
};

const game = () =>  {
    for (let i = 0; i < 5; i++){
        console.log(playRound("rock"));
    }
}
