// Your code goes here  /#[0-9a-f]{6}|#[0-9a-f]{3}/gi
const birthday22 = new Date(2000, 5, 26);
const birthday23 = new Date(2000, 5, 30);

function getAge(date) {
   let dateOfBirthday = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
   let nowDate = new Date();
   let today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
   let dobThisYear = new Date(today.getFullYear(), dateOfBirthday.getMonth(), dateOfBirthday.getDate());
   let age;

   age = today.getFullYear() - dateOfBirthday.getFullYear();
   if (today < dobThisYear) {
      age = age - 1;
   }
   return age;
}
getAge(birthday22);
getAge(birthday23);


function getWeekDay(timeStamp) {
   let day = new Date(timeStamp);
   let strDay = day.toLocaleString('en-ZA', { weekday: 'long' })
   return strDay;
}
getWeekDay(Date.now());
getWeekDay(new Date(2020, 9, 22));


function getAmountDaysToNewYear() {
   const novaDays = new Date();
   const newYeaerDate = new Date(new Date().getFullYear(), 11, 31);
   const days = newYeaerDate - novaDays;
   return Math.floor(days / 1000 / 60 / 60 / 24);
}
getAmountDaysToNewYear();


function getProgrammersDay(year) {
   let progDay = new Date();

   progDay.setFullYear(year, 8, 12);
   progDay.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
   const month = progDay.toLocaleString('en-ZA', { month: 'short' });


   if (year % 4 === 0) {
      const progDayStringFOrmat = progDay.getDate() + ' ' + month + ' ' + progDay.getFullYear();
      const dayName = getWeekDay(progDay);
      return `${progDayStringFOrmat} (${dayName})`;
   } else {
      const progDayStringFOrmat = progDay.getDate() + 1 + ' ' + month + ' ' + progDay.getFullYear();
      const dayName = getWeekDay(progDayStringFOrmat);
      return `${progDayStringFOrmat} (${dayName})`;
   }
}
getProgrammersDay(2020);
getProgrammersDay(2019);


function howFareIs(specifiedWeekday) {
   specifiedWeekday = specifiedWeekday.toLowerCase();
   const novaDays = new Date();
   const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
   const novaDayName = weekDays[novaDays.getDay()];

   const novaDaysNumber = novaDays.getDay();
   let number;

   if (specifiedWeekday === novaDayName) {
      let specWeekday = specifiedWeekday[0].toUpperCase() + specifiedWeekday.slice(1);
      return `Hey, today is ${specWeekday} =)`
   } else {
      for (let i = 0; i < weekDays.length; i++) {
         let weekItem = weekDays[i];
         if (weekItem === specifiedWeekday) {
            number = i - novaDaysNumber;
            if (number < 0) {
               number = 6 - novaDaysNumber + i;
            }
         }
      }
      let specWeekday = specifiedWeekday[0].toUpperCase() + specifiedWeekday.slice(1);
      return `It's ${number} day(s) left till ${specWeekday}`
   }
}
howFareIs('saturday');
howFareIs('Thursday');

function isValidIdentifier(id) {
   return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(id);
}
isValidIdentifier('myVar!');
isValidIdentifier('myVar$');
isValidIdentifier('myVar_1');
isValidIdentifier('1_myVar');

const testStr = 'My name is John Smith. I am 27.';
function capitalize(testStr) {
   const arrOfStr = testStr.split(/\s/);
   let newArrOfStr = [];
   for (let i = 0; i < arrOfStr.length; i++) {
      let itemStr = arrOfStr[i];
      let itemFirstUp = itemStr.replace(/./, itemStr => itemStr.toUpperCase() + itemStr.slice(1));
      newArrOfStr.push(itemFirstUp);
   }
   let newTestStr = newArrOfStr.join(' ');
   return newTestStr;
}
capitalize(testStr);

function isValidAudioFile(audioFile) {
   return /^[A-Zaa-z]*\.[a-z0-3]{0,4}$/.test(audioFile);
}
isValidAudioFile('file.mp4'); // false
isValidAudioFile('my_file.mp3'); // false
isValidAudioFile('file.mp3'); // true

const testString = 'color: #3f3; background-color: #AA00ef; and: #abcd';
function getHexadecimalColors(testString) {
   const arrOfStr = testString.split(/(?::\s|;\s)/g);
   let resultArray = [];
   for (let i = 0; i < arrOfStr.length; i++) {
      let itemStr = arrOfStr[i];
      if (/#(?:[0-9a-f]{3}){1,2}\b/ig.test(itemStr)) {
         resultArray.push(itemStr);
      }
   }
   return resultArray;
}
getHexadecimalColors(testString); // ["#3f3", "#AA00ef"]
getHexadecimalColors('red and #0000'); // [];

function isValidPassword(password) {
   return /(?=.*[0-9])(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(password);
}
isValidPassword('agent007'); // false (no uppercase letter)
isValidPassword('AGENT007'); // false (no lowercase letter)
isValidPassword('AgentOOO'); // false (no numbers)
isValidPassword('Age_007'); // false (too short)
isValidPassword('Agent007'); // true

function addThousandsSeparators(value) {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
addThousandsSeparators('1234567890');
addThousandsSeparators(1234567890);

const text1 = 'We use https://translate.google.com/ to translate some words and phrases from https://angular.io/';
const text2 = 'JavaScript is the best language for beginners!'
function getAllUrlsFromText(urlsTxt) {
   if (!urlsTxt) {
      return 'error'
   }
   const arrOfStr = urlsTxt.split(/\s/g);
   let resultArray = [];
   for (let i = 0; i < arrOfStr.length; i++) {
      let itemStr = arrOfStr[i];
      if (/(https:\/\/.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gm.test(itemStr)) {
         resultArray.push(itemStr);
      }
   }
   return resultArray;
}
getAllUrlsFromText(text1); // ["https://translate.google.com/", "https://angular.io/"]
getAllUrlsFromText(text2); // []
getAllUrlsFromText(); // (error)
