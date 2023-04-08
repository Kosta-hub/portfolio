// write your code here

const arrr = ['1', '3', '4', '2', '5'];
const getMaxEvenElement = arrr => arrr.reduce((acc, value) => +value % 2 ? Math.max(+acc, +value) : acc);
// console.log(getMaxEvenElement(arrr));

let a = 3;
let b = 5;

[a, b] = [b, a];
// console.log(a);
// console.log(b);

function getValue(value) {
   return value ?? '-';
}
// console.log(getValue(0));
// console.log(getValue(4));
// console.log(getValue('someText'));
// console.log(getValue(null));
// console.log(getValue(undefined));

const arrayOfArrays = [
   ['name', 'dan'],
   ['age', '21'],
   ['city', 'Kharkov']
];

const getObjFromArray = function (arrayOfArrays) {
   const obj = Object.fromEntries(arrayOfArrays);
   return obj;
}
// console.log(getObjFromArray(arrayOfArrays));

const obj1 = { name: 'nick' };

function addUniqueId(obj1) {
   let id = Symbol('_' + Math.random().toString(36).substr(2, 9));
   let obj2 = { ...obj1 };
   obj2.id = id;
   return obj2;
}
// console.log(addUniqueId(obj1));
// console.log(addUniqueId({ name: 'buffy' }));

const oldObj = {
   name: 'willow',
   details: { id: 1, age: 47, university: 'LNU' }
};

function getRegroupedObject(oldObj) {
   let { details: user, details: { university }, name } = oldObj;
   const newObj = {};
   newObj.university = university;
   newObj.user = user;
   newObj.user.name = name;
   return newObj;
}
// console.log(getRegroupedObject(oldObj));


const arr = [2, 3, 4, 2, 'a', 'c', 'a'];
const getArrayWithUniqueElements = arr => [...new Set(arr)];
// console.log(getArrayWithUniqueElements(arr));

const phoneNumber = '0123456789';

function hideNumber(phoneNumber) {
   let hiden = phoneNumber.substr(-4, 4).padStart(10, '*');
   // let hiden = phoneNumber.replace(/\d(?=\d{4})/g, '*');
   return hiden;
}

// console.log(hideNumber(phoneNumber));

function add(a = 2, b) {
   if (arguments.length < 2) {
      throw new Error('b is required');
   } else {
      return a + b;
   }
}

// console.log(add(2, 3));
// console.log(add(2));

let str = 'i love epam';
function* generatorIterableSequence(str) {
   let array = str.split(' ');
   for (let i = 0; i < array.length; i++) {
      yield array[i];
   }
}

const generatorObject = generatorIterableSequence(str);
for (let value of generatorObject) {
   console.log(value);
}

