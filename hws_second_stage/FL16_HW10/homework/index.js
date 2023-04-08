//write your code here
let articleCount = 0


class Magazine {
   constructor(name, nextStatus) {
      this.name = name
      this.NextStatus = nextStatus
   }

   setState() {
      return new this.NextStatus()
   }

}

class ReadyForPushNotification extends Magazine {
   constructor() {
      super('readyForPushNotification', ReadyForApprove)
   }
}

class ReadyForApprove extends Magazine {
   constructor() {
      super('readyForApprove', ReadyForPublish)
   }
}

class ReadyForPublish extends Magazine {
   constructor() {
      super('readyForPublish', PublishInProgress)
   }
}

class PublishInProgress extends Magazine {
   constructor() {
      super('publishInProgress', PublishInProgress)
   }
}


class MagazineEmployee {
   constructor(name, type, magazine) {
      this.name = name
      this.type = type
      this.magazine = magazine
      this.state = new ReadyForPushNotification()
      this.articles = []
   }

   approve() {
      if (this.type !== 'manager') {
         console.log('you do not have permissions to do it')
      } else if (articleCount < 5) {
         console.log(`Hello ${this.name}. You can't approve. We don't have enough of publications`)
      } else if (this.type === 'manager' && articleCount >= 5) {
         console.log(`Hello ${this.name}. You've approved the changes`)
         this.nextState()
         articleCount = 0
      }
   }

   addArticle(article) {
      this.articles.push(article)
      console.log(`${article}, ${this.name}`)
      ++articleCount
      if (articleCount === 5) {
         this.nextState()
      }
   }

   publish() {
      if (this.state.name !== 'readyForPublish') {
         console.log(`Hello ${this.name} You can't publish. We are creating publications now.`)
      } else {
         console.log(`Hello ${this.name}. You've recently published publications.`)
      }
   }

   nextState() {
      this.state = this.state.setState();
   }

}


class Follower {
   constructor(name) {
      this.name = name;
   }

   subscribeTo(m, department) {
      const magazineObserver = new EventObserver()

      magazineObserver.subscribe(() => {
         console.log(`Subscribed to ${department}`)
      })

      magazineObserver.broadcast({ someData: 'hello' })

      console.log;
   }
}

class EventObserver {
   constructor() {
      this.observers = []
   }

   subscribe(fn) {
      this.observers.push(fn)
   }

   unsubscribe(fn) {
      this.observers = this.observers.filter(subscriber => subscriber !== fn)
   }

   broadcast(data) {
      this.observers.forEach(subscriber => subscriber(data))
   }
}


const magazine = new Magazine();


const manager = new MagazineEmployee('Andrii', 'manager', magazine);
console.log(manager.state.name);


const sport = new MagazineEmployee('Serhii', 'sport', magazine);
const politics = new MagazineEmployee('Volodymyr', 'politics', magazine);
const general = new MagazineEmployee('Olha', 'general', magazine);

const iryna = new Follower('Iryna');
const maksym = new Follower('Maksym');
const mariya = new Follower('Mariya');

iryna.subscribeTo(magazine, 'sport');
maksym.subscribeTo(magazine, 'politics');
mariya.subscribeTo(magazine, 'politics');
mariya.subscribeTo(magazine, 'general');

sport.addArticle('something about sport');
politics.addArticle('something about politics');
general.addArticle('some general information');
politics.addArticle('something about politics again');
sport.approve() //you do not have permissions to do it
manager.approve();//Hello Andrii. You can't approve. We don't have enough of publications
politics.publish(); //Hello Volodymyr. You can't publish. We are creating publications now.
sport.addArticle('news about sport');
console.log(manager.state.name);
manager.approve(); //Hello Andrii. You've approved the changes
console.log(manager.state.name);

sport.publish(); //Hello Serhii. You've recently published publications.

// /*
// something about sport Iryna
// news about sport Iryna
// something about politics Maksym
// something about politics Mariya
// something about politics again Maksym
// something about politics again Mariya
// some general information Mariya
// */
// manager.approve('news about sport'); //Hello Andrii. While we are publishing we can't do any actions
