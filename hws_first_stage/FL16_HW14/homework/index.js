/* START TASK 1: Your code goes here */
const tableFull = document.getElementById('table');
const rowOneFull = document.getElementById('tr1');
const rowTwoFull = document.getElementById('tr2');
const rowThreeFull = document.getElementById('tr3');

const rowItems = document.querySelectorAll('td.row');
const cells = document.querySelectorAll('td.cell');

tableFull.addEventListener('click', function (event) {
   const targetId = event.target.id;
   if (targetId === 'row1' || targetId === 'row2' || targetId === 'row3') {
      switch (targetId) {
         case 'row1':
            rowOneFull.classList.add('blue');
            break;
         case 'row2':
            rowTwoFull.classList.add('blue');
            break;
         case 'row3':
            rowThreeFull.classList.add('blue');
            break;
         default:
            break;
      }
   } else if (targetId === 'Special') {
      tableFull.classList.add('green');
   } else {
      event.target.classList.remove('blue');
      event.target.classList.add('yellow');
   }
});
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const inputTell = document.getElementById('tel');
const message = document.getElementById('msg');
const telBtn = document.getElementById('tel-btn');


inputTell.oninput = function () {
   if (/\+380[0-9]{9}/.test(inputTell.value)) {
      inputTell.classList.remove('focus');
      message.style = 'display: none';
      telBtn.removeAttribute('disabled');
      telBtn.getAttribute('disabled');
   } else {
      message.style = 'display: block';
      message.classList.remove('valid');
      message.classList.add('invalid');
      inputTell.classList.add('focus');
      message.innerText = 'Type number does not follow format +380*********'
   }
}
telBtn.onclick = function () {
   message.style = 'display: block';
   message.classList.remove('invalid');
   message.classList.add('valid');
   message.innerText = 'Data was successfully sent'
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const court = document.getElementById('court');
const ball = document.getElementById('ball');
const basketL = document.getElementById('B');
const baskeR = document.getElementById('A');
const teamPoint = document.getElementById('point');
const scoreAElem = document.getElementById('sA');
const scoreBElem = document.getElementById('sB');
let scoreA = 0;
let scoreB = 0;
const pixels = 2;
const seconds = 3000;

court.onclick = function (event) {
   document.body.append(ball);

   ball.style.left = event.pageX - ball.offsetWidth / pixels + 'px';
   ball.style.top = event.pageY - ball.offsetHeight / pixels + 'px';
};

function hidePointer() {
   teamPoint.innerText = '';
}

function goal(id) {
   let event = new CustomEvent('click', {
      cancelable: true,
      detail: { team: id }
   })
   teamPoint.innerText = `Team ${event.detail.team} score!`;
   if (id === 'B') {
      scoreBElem.innerText = `Team B: ${scoreA += 1}`;
   } else {
      scoreAElem.innerText = `Team A: ${scoreB += 1}`;
   }

   setTimeout(hidePointer, seconds);

   basketL.addEventListener('click', function (event) {
      event.preventDefault();
   });
}
/* END TASK 3 */
