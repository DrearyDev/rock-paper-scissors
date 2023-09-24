'use strict';

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
let choice = getComputerChoice()
console.log(choice);