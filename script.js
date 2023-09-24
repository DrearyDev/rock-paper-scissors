'use strict';

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case 'rock':
            if (computerSelection === 'rock'){
                return 'its a draw (both chose rock)';
            } else if (computerSelection === 'paper') {
                return 'you lose.. paper beats rock..';
            } else {
                return 'you win! rock beats scissors!';
            }
        case 'paper':
            if (computerSelection === 'rock'){
                return 'you win! paper beats rock!';
            } else if (computerSelection === 'paper') {
                return 'its a draw (both chose paper)';
            } else {
                return 'you lose.. scissors beats paper..';
            }
        case 'scissors':
            if (computerSelection === 'rock'){
                return 'you lose.. rock beats scissors..';
            } else if (computerSelection === 'paper') {
                return 'you win! scissors beats paper!';
            } else {
                return 'its a draw (both chose scissors)';
            }
        default:
            return 'You Misspelled Your Choice..';
    };
};

function game() {
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = prompt('Choose: Rock, Paper, or Scissors..');
        console.log(playRound(playerChoice, computerChoice));
    };
}

game();