'use strict'

// 1. Write a JavaScript function that reverse an integer number.
// let num = -56789;
// let num = 12345;
function reverseNumber(num) {
   const str = Math.abs(num).toString();
   let res = '';
   const isNegative = num < 0;

   for (let i = 0; i < str.length; i++) {
      const char = str[i];
      console.log(char);

      if (char !== '0') {
         res = char + res;
      } else if (str[i + 1] && str[i + 1] !== '0' && char === '0') {
         res = char + res;
      }
   }

   console.log(Number(isNegative ? res * -1 : res));
   return Number(isNegative ? res * -1 : res);
}


// 2. Write function, which iterates over array and executes function on each element.
// let arr = [2, 5, 8,];
// let func = (el) => console.log(el);
function forEach(arr, func) {

   for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      func(el);
   }
}


// 3. Write function, which returns transformed array based on function, which is passed as a parameter. Reuse function from task 2.
// let arr = [2, 5, 8];
// let func = (el) => {
//    return el + 3;
// }

// let arr = [1, 2, 3, 4, 5];
// let func = (el) => {
//    return el * 2;
// }
function map(arr, func) {
   let transformedArray = [];
   forEach(arr, el => transformedArray.push(func(el)));

   console.log(transformedArray);
   return transformedArray;
}
// map(arr, func);


// 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
// let arr = [2, 5, 1, 3, 8, 6];
// let func = (el) => {
//    return el > 3;
// }

// let arr = [1, 4, 6, 7, 8, 10];
// let func = (el) => {
//    return el % 2 === 0;
// }

function filter(arr, func) {
   let filteredArr = [];

   for (let i = 0; i < arr.length; i++) {
      forEach(arr, (el) => {
         if (func(el)) {
            filteredArr.push(el);
         }
      })
      return filteredArr;
   }
}


// 5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 3 and 4.
const data = [
   {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'age': 39,
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
   },
   {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
   },
   {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'age': 2,
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
   },
   {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'age': 17,
      'eyeColor': 'green',
      'name': 'Weiss',
      'favoriteFruit': 'banana'
   }
];

function getAdultAppleLovers(data) {
   let filteredData = filter(data, (el) => {
      if (el.favoriteFruit === 'apple' && el.age > 18) {
         return true;
      }
   })
   let newData = map(filteredData, (el) => {
      return el.name;
   })
   console.log(filteredData);
   console.log(newData);

}
// getAdultAppleLovers(data);


// 6. Write function, which returns array of keys of an object.
// returns [“keyOne”, “keyTwo”, “keyThree”]
function getKeys(obj) {
   let keysArr = [];

   for (let key in obj) {
      keysArr.push(key);
   }
   return keysArr;
}
getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 });


// 7. Write function, which returns array of values of an object.
// returns [1, 2, 3]
function getValues(obj) {
   let propArr = [];

   for (let key in obj) {
      propArr.push(obj[key]);
   }
   return propArr;
}
// getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 });


// 8. Write function, which returns formatted date.
// returns ‘It is 27 of Aug, 2018’
// // every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
function showFormattedDate(dateObj) {
   const splitedDate = dateObj.toString().split(' ');

   return `it is ${splitedDate[2]} of ${splitedDate[1]}, ${splitedDate[3]}`;
}
// showFormattedDate(new Date('2018-08-27T01:10:00'));