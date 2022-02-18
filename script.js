'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if(guess == 0){
document.querySelector('.message').textContent = 'NO NUMBER';
}

else if(guess === secretNumber){
document.querySelector('.message').textContent = 'you guess correct number';
document.querySelector('.number').textContent = secretNumber; 
document.querySelector('body').style.backgroundColor ='blue';

if(score > highscore){
highscore= score;
document.querySelector('.highscore').textContent = score;
}
}

// when numer is heigh 

else if(guess > secretNumber){
if(score > 1){
document.querySelector('.message').textContent = 'Too Heigh !!';
score--;
document.querySelector('.score').textContent = score;
}
else{
document.querySelector('.message').textContent = 'You lost the game';
document.querySelector('.score').textContent = '0';
}
}

// when number is low

else if(guess < secretNumber){
if(score > 1){
document.querySelector('.message').textContent = 'Too Low !!';
score--;
document.querySelector('.score').textContent = score;
}
else{
document.querySelector('.message').textContent = 'You lost the game';
document.querySelector('.score').textContent = '0';
}
}
});

document.querySelector('.btn-again').addEventListener('click' , function(){
document.querySelector('.number').textContent = '?';
document.querySelector('.message').textContent = 'Start guessing....';
document.querySelector('body').style.backgroundColor = 'white';
document.querySelector('.score').textContent = '20';
document.querySelector('.guess').value = '';
//document.querySelector('.highscore').textContent = '0';
});
