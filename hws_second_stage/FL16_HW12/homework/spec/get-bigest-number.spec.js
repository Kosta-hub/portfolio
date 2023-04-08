// Your code goes here
class BirthdayService {
   constructor(date) {
      this.date = date;
   }

   howLongToMyBirthday(date) {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
         return `Wrong argument!`
      }
      let myBirthday, today, bday, diff, daysLeft;
      myBirthday = [date.getDate(), date.getMonth()]; // 6th of February
      today = new Date();
      bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
      if (today.getTime() > bday.getTime()) {
         bday.setFullYear(bday.getFullYear() + 1);
      }
      diff = bday.getTime() - today.getTime();
      daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (daysLeft === 364) {
         const birth = this.congratulateWithBirthday();
         return birth;
      }
      return daysLeft;
   }

   congratulateWithBirthday() {
      console.log(`Hooray!!! It is today!`);
   }

   notifyWaitingTime(waitingTime) {
      console.log(`Soon...Please, wait just ${waitingTime} day/days`);
   }

}

const date = new Date(2016, 7, 26)

let servBirthday = new BirthdayService();
const result = servBirthday.howLongToMyBirthday(date);
console.log(result)
