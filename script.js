'use strict';

const playerOptions = document.querySelectorAll('.playerOption');
const wins = document.getElementById('wins');
const draws = document.getElementById('draws');
const losses = document.getElementById('losses');
const resetBtn = document.querySelector('.reset');
const computerMove = document.querySelector('.computer-move');
const gameState = document.querySelector('.game-state');

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};

playerOptions.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let playerChoice = e.target.id;
        playRound(playerChoice, getComputerChoice());
    });
});

function playRound(playerSelection, computerSelection) {

    switch(playerSelection){
        case 'rock':
            if (computerSelection === 'rock'){
                displayState('Drew', 'Rock');
            } else if (computerSelection === 'paper') {
                displayState('Lost', 'Paper');
            } else {
                displayState('Won', 'Scissors');
            };
            break;
        case 'paper':
            if (computerSelection === 'rock'){
                displayState('Won', 'Rock');
            } else if (computerSelection === 'paper') {
                displayState('Drew', 'Paper');
            } else {
                displayState('Lost', 'Scissors');
            };
            break;
        case 'scissors':
            if (computerSelection === 'rock'){
                displayState('Lost', 'Rock');
            } else if (computerSelection === 'paper') {
                displayState('Won', 'Paper');
            } else {
                displayState('Drew', 'Scissors');
            };
            break;
    };
};

function displayState(state, move) {
    computerMove.textContent = `Computer chose ${move}!`;
    gameState.textContent = `You ${state}!`;

    if (state === 'Lost') {
        losses.textContent = Number(losses.textContent) + 1;
    } else if (state === 'Won') {
        wins.textContent = Number(wins.textContent) + 1;
    } else {
        draws.textContent = Number(draws.textContent) + 1;
    };

    if (losses.textContent === '5'){
        endGame('Lost!');
    } else if (wins.textContent === '5'){
        endGame('Win!');
    };
};

function endGame(condition) {
    gameState.textContent = `Game over you ${condition}`;
    playerOptions.forEach(btn => {
        btn.style.display = 'none';
    });
    resetBtn.style.display = 'block';
};

function resetGame() {
    resetBtn.style.display = 'none';

    playerOptions.forEach(btn => {
        btn.style.display = 'block';
    });

    wins.textContent = 0;
    losses.textContent = 0;
    draws.textContent = 0;

    computerMove.textContent = '';
    gameState.textContent = '';
};
resetBtn.addEventListener('click', resetGame);



