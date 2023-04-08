// Your code goes here
function getBigestNumber(...args) {
   if (args.length > 10) {
      return 'Too many arguments';
   } else if (args.length < 2) {
      return 'Not enough arguments';
   }
   const arr = [...args];
   for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (typeof value !== 'number') {
         return 'Wrong argument type';
      }
   }

   console.log(Math.max.apply(null, arr));
   return Math.max.apply(null, arr);
}

module.exports = getBigestNumber;