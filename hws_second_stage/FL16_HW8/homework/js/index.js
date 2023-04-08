// Write your code here
$(document).ready(function () {
   var result = 0;
   var prevEntry = 0;
   var operation = null;
   var currentEntry = '0';
   updateScreen(result);

   $('.button-item').on('click', function (evt) {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);

      if (buttonPressed === "C") {
         result = 0;
         currentEntry = '0';
      } else if (isNumber(buttonPressed)) {
         if (currentEntry === '0') currentEntry = buttonPressed;
         else currentEntry = currentEntry + buttonPressed;
      } else if (isOperator(buttonPressed)) {
         prevEntry = parseFloat(currentEntry);
         operation = buttonPressed;
         currentEntry = '';
      } else if (buttonPressed === '=') {

         let summary = operate(prevEntry, currentEntry, operation);
         if (summary == 'Infinity') {
            let er = 'ERROR';
            console.log(updateScreen(er));
            return false;
         } else {
            updateScreen(summary);
            updateLog(prevEntry, currentEntry, operation);
            operation = null;

         }
      }

      updateScreen(currentEntry);

      $('.circle').on('click', function (evt) {
         let Item = $(evt.currentTarget);
         console.log(Item);
         Item.toggleClass('red');
      });

      $('.close').on('click', function (evt) {
         let closeItem = $(evt.currentTarget);
         let parent = closeItem.parent();
         console.log(closeItem);
         removeItem(parent);
      });

      // $('.circle').click(function () {
      //    $('.circle').toggleClass('red');
      // });
   });
});

updateScreen = function (displayValue) {
   var displayValue = displayValue.toString();
   $('.screen').html(displayValue.substring(0, 10));
};

updateLog = function (prevEntry, currentEntry, operation) {
   // $('<div class="alert-message">Новый текст сообщения.</div>')
   $('.right').prepend(`<div class="new-log"><div class="circle">
   </div><div class="log-content">${prevEntry} ${operation} ${currentEntry} = ${operate(prevEntry, currentEntry, operation)}</div> <span class="close"></span>
   </div>`);
}

isNumber = function (value) {
   return !isNaN(value);
}

isOperator = function (value) {
   return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function (a, b, operation) {
   a = parseFloat(a);
   b = parseFloat(b);
   console.log(a, b, operation);
   if (operation === '+') return a + b;
   if (operation === '-') return a - b;
   if (operation === '*') return a * b;
   if (operation === '/') return a / b;
}

removeItem = function (target) {
   target.remove();
}