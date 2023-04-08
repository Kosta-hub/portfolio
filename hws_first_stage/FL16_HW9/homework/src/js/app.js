// Your code goes here
let meetingName = prompt('Please enter event name', 'meeting');


function popupHandler() {
   let popup = document.getElementById('myPopup');
   console.log(popup);
   popup.classList.toggle('show');
}

if (meetingName) {
   popupHandler()
}

function validateForm() {
   const name = document.getElementById('name').value;
   const time = document.getElementById('time').value;
   const place = document.getElementById('place').value;

   if (!!(name && time && place) === false) {
      alert('Please input all data');

   } else if (!/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/.test(time)) {
      alert('Enter time in format hh:mm');
   } else {
      console.log(`${name} has ${meetingName} today at ${time} somewhere in ${place}`);
   }
   meetingName = false;
}

function convert() {
   const euroAmount = +prompt('Pleas inut amount of euro');
   const usdAmount = +prompt('Pleas inut amount of dollar');
   const convertedEuro = euroAmount * 33.52;
   const convertedUsd = usdAmount * 27.76;
   const a = `${euroAmount} euros are equal ${convertedEuro.toFixed(2)}hrns,`;
   const b = `${usdAmount} dollars are equal ${convertedUsd.toFixed(2)}hrns`
   alert(a + ' ' + b);
}