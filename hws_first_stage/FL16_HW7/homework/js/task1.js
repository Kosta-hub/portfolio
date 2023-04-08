'use strict';
let initialAmount = +prompt('initial amount of money (can’t be less than 1000)');
let years, percents, profit, amount;
let totalAmount = initialAmount;

let totalCalculations = function () {
   for (let i = 0; i < years; i++) {
      totalAmount += totalAmount / 100 * percents;
      profit = totalAmount - initialAmount;
   }

   return alert(`
      Initial amount: ${initialAmount}
      Number of years: ${years}
      Percentage of year: ${percents}
      
      Total profit: ${+profit.toFixed(2)} (${percents}% from initial amount)
      Total amount: ${+totalAmount.toFixed(2)} (initial amount + total profit)
   `)
}

if ((initialAmount >= 1000 && !!initialAmount) === true) {
   years = +prompt('number of years (can’t be less than 1)');

   if (years >= 1 && !!years && (years ^ 0) === years) {
      percents = +prompt('percentage of a year (can’t be bigger than 100)');

      if ((percents <= 100 && percents > 0 && !!percents) === true) {
         totalCalculations();
      } else {
         alert('Invalid input data');
      }
   } else {
      alert('Invalid input data');
   }
} else {
   alert('Invalid input data');
}