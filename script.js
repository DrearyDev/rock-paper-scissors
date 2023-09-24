'use strict';

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(playerSelection){
        case 'rock':
            if (computerSelection === 'rock'){
                return 'its a draw (both chose rock)';
            } else if (computerSelection === 'paper') {
                return 'you lose.. paper beats rock..';
            } else {
                return 'you win! rock beats scissors!';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock'){
                return 'you win! paper beats rock!';
            } else if (computerSelection === 'paper') {
                return 'its a draw (both chose paper)';
            } else {
                return 'you lose.. scissors beats paper..';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock'){
                return 'you lose.. rock beats scissors..';
            } else if (computerSelection === 'paper') {
                return 'you win! scissors beats paper!';
            } else {
                return 'its a draw (both chose scissors)';
            }
            break;
    };
};

let playerSelection = 'rock';
let choice = getComputerChoice();
console.log(playRound(playerSelection, choice));