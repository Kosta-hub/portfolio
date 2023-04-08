import '../scss/main.scss';
import '../scss/button-section.scss';
import '../index.html';
import choices from './variables';
import resetGame from './functions';


const logBlock = document.querySelector('div.log-block');
let wins = 1;
let losts = 1;
let round = 1;

const resButton = document.getElementById('res');
resButton.onclick = () => {
   resetGame();
}

document.querySelector('div.buttons-container').addEventListener('click', event => {
   const item = choices[Math.floor(Math.random() * choices.length)];
   const log = document.createElement('div');
   const createLog = () => {
      logBlock.appendChild(log);
      log.classList.add('log');
   };

   const id = event.target.getAttribute('id');
   if (!id) {
      return
   };

   function mod(a, b) {
      let c = a % b;
      return c < 0 ? c + b : c;
   }

   function determineWinners(id, item) {
      let x = choices.indexOf(id);
      let y = choices.indexOf(item);

      if (id === item) {
         createLog();
         log.innerText = `${id} vs ${item}, DRAW!`;
      } else if (mod(x - y, choices.length) < choices.length / 2) {
         createLog();
         log.innerText = `Round ${round}, ${id} vs ${item}, You’ve LOST!`;
         ++losts;
         ++round;
      } else {
         createLog();
         log.innerText = `Round ${round}, ${id} vs ${item}, You’ve WON!`;
         ++wins;
         ++round;
      }
   }
   if (wins === 3) {
      createLog();
      log.innerText = `You’ve WON!`;
      setTimeout(resetGame, 2000);
      losts = 1;
      round = 1;
      wins = 1;
   } else if (losts === 3) {
      createLog();
      log.innerText = `You’ve LOST!`;
      setTimeout(resetGame, 2000);
      losts = 1;
      round = 1;
      wins = 1;
   } else {
      determineWinners(id, item);
   }

});
