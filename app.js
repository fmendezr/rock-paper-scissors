const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    return options[Math.floor(Math.random()*3)]
}


console.log(getComputerChoice())