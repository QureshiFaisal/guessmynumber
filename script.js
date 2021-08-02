'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
//Displays the message if no number is entered or if the correct number is guessaed and accepts parameters from the respective control flow statements.
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // When there is no guess
    if(!guess){
        displayMessage('No number');
    } // When the player wins 
    else if (guess === secretNumber){
       displayMessage('You won the game!');
        //Will replace question mark by displaying secret number 
        document.querySelector('.number').textContent = secretNumber;
        // Will change the background color to green when the guess is correct
        document.querySelector('body').style.backgroundColor = '#60b347';
    //Will increase width of the message.
        document.querySelector('.message').style.width = '30rem';
    //Highscore code
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if(score>1){
            displayMessage(guess>secretNumber ? `Too high`: `Too low`);
                score--;
                document.querySelector('.score').textContent = score;
        } else {
            displayMessage(`You lost the game`);
            document.querySelector('.score').textContent = 0;
        } 

    } 
    document.querySelector('.again').addEventListener('click',function(){
        document.querySelector('.score').textContent = 20;
        document.querySelector('.message').style.width = '15rem';
        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        secretNumber = Math.trunc(Math.random()*20)+1;
    
    })})

    
    
    
    
    //When the guess is too high
   /* else if (guess > secretNumber){
if(score>1){
    document.querySelector('.message').textContent = `Too high`;
        score--;
        document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.score').textContent = `You lost the game`;
    document.querySelector('.score').textContent = score;
} }// When the guess is too low
    else if (guess < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = `Too low`;
                score--;
                document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = `You lost the game`;
            document.querySelector('.score').textContent = score;
        }
    }

});*/
// reverting back to the original state when the user clicks on again
  