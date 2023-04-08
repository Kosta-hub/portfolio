'use strict';

let start = confirm('Do you want to play a game?');
let random, effort, attempts = 3, totalPrize = 0, possiblePrize = 100, range = 9;

let tryAgain = () => {
   effort = prompt(`
      Choose a roulette pocket number from 0 to ${range - 1}
      Attempts left: ${attempts}
      Total prize: ${totalPrize}$
      Possible prize on current attempt: ${possiblePrize}$
   `);
}

let resetGame = () => {
   attempts = 3;
   possiblePrize = 100;
   range = 9;
   totalPrize = 0;
}

let rise = () => {
   possiblePrize *= 2;
   range += 4;
   attempts = 3;
}

let startGame = () => {
   random = Math.floor(Math.random() * range);

   while (attempts > 0) {
      tryAgain();
      attempts--;

      if (+effort === random) {
         start = alert(`
            Congratulation, you won!
            Your prize is: ${totalPrize += possiblePrize}$.
         `);
         start = confirm('Do you want to continue?');

         if (start) {
            rise();
         } else {
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
         }
         break;

      } else if (typeof effort === 'object') {
         alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
         start = false;
         break;
      }

      possiblePrize /= 2;
   }

   if (attempts === 0) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
      start = confirm('Do you want to continue?');
      resetGame();
   }
}

while (start) {
   startGame();
}

alert('You did not become a billionaire, but can.');
