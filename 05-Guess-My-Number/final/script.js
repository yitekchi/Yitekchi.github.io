'use strict';

  // secretNumber  is Rondom number
let secretNumber = Math.trunc(Math.random()*20)+1; 
//  console.log(secretNumber);
let score  = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input

   if(!guess){
   displayMessage('⛔ No number !')

    }else if (guess === secretNumber ){
      displayMessage('🎉 Correct Number !');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#1cd306';
      document.querySelector('.number').style.width = '30rem';
    }
    console.log(score,'score')
    console.log(highscore,'highscore')
    if (score > highscore) {
    
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      // when geuss is wrong 
    }else if (guess !== secretNumber){
      if(score > 1){
        displayMessage(guess > secretNumber ? '📈 Too high!':'📈 Too low !');
        document.querySelector('.score').textContent = score;
      }else{
        displayMessage('💥 You lost the game !');
        document.querySelector('.score').textContent = 0;
      }
    }



});

    // When guess is too high

    document.querySelector('.again').addEventListener('click',function(){
       score  = 20;
       secretNumber = Math.trunc(Math.random()*20)+1; 

       displayMessage('Start guessing.....');
       document.querySelector('.score').textContent = score;
       document.querySelector('.number').textContent = '?';
       document.querySelector('.guess').value = '';
       /////
       document.querySelector('body').style.backgroundColor = '#222';
       document.querySelector('.number').style.width = '15rem';


    });
