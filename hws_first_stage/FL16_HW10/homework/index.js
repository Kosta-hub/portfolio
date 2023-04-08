'use strict'

function isEquals(a, b) {
   return a === b;
}

function isBigger(a, b) {
   return a > b;
}

function storeNames() {
   const names = [];
   for (let i = 0; i < arguments.length; i++) {
      names.push(arguments[i]);
   }
   return names;
}

function getDifference(a, b) {
   if (a > b) {
      return a - b;
   } else if (a < b) {
      return b - a;
   }
}

function negativeCount(arr) {
   let negCount = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
         negCount++;
      }
   }
   return negCount;
}

function letterCount(str, letter) {
   let lettersArr = str.split('');
   let subStrCount = 0;
   for (let i = 0; i < lettersArr.length; i++) {
      if (lettersArr[i] === letter) {
         subStrCount++;
      }
   }
   return subStrCount;
}

function countPoints(arr) {
   let totalPoints = 0;
   for (let i = 0; i < arr.length; i++) {
      let arrPoints = arr[i].split(':');
      let x = +arrPoints[0];
      let y = +arrPoints[1];
      if (x > y) {
         totalPoints += 3;
      } else if (x === y) {
         totalPoints += 1;
      }
   }
   return totalPoints;
}

