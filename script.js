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
                return 'its a draw';
            } else if (computerSelection === 'paper') {
                return 'you lose..';
            } else {
                return 'you win!';
            };
        case 'paper':
            if (computerSelection === 'rock'){
                return 'you win!';
            } else if (computerSelection === 'paper') {
                return 'its a draw';
            } else {
                return 'you lose..';
            };
        case 'scissors':
            if (computerSelection === 'rock'){
                return 'you lose..';
            } else if (computerSelection === 'paper') {
                return 'you win!';
            } else {
                return 'its a draw';
            };
        default:
            return 'You Misspelled Your Choice..';
    };
};

function game() {
    let wins = 0;
    let losses = 0;

    while (wins !== 5 && losses !== 5){
        let computerChoice = getComputerChoice();
        let playerChoice = prompt('Choose: Rock, Paper, or Scissors..');

        console.log('Player: ' + playerChoice + '\n' + 'Computer: ' + computerChoice);
        let round = playRound(playerChoice, computerChoice);
        if (round === 'you win!') {
            console.log('you win!');
            ++wins;
        } else if (round === 'you lose..') {
            console.log('you lose..');
            losses++;
        } else if (round === 'its a draw') {
            console.log('its a draw');
        } else {
            console.log('You Mispelled Your Choice..');
        };
    };

    if (wins === 5){
        console.log('You Beat The Computer!!');
    } else {
        console.log('You Lost To The Computer!!');
    };
};

game();