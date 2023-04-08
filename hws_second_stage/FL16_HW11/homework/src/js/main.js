import '../scss/hidden.scss';
import '../scss/main.scss';
import '../index.html';
import * as CONSTANTS from './elems';
console.log(CONSTANTS);

// const root = document.getElementById('root');

// let way = location.origin + location.pathname;

// const alertElem = document.getElementById('alertMessage');
// const tweetItemsElem = document.getElementById('tweetItems');
// const tweetsListElem = document.getElementById('list');
// const navButtonsElem = document.getElementById('navigationButtons');

// const alertMessageTextElem = document.getElementById('alertMessageText');

// // MODIFY ITEM BLOCK
// const modifyItemElem = document.getElementById('modifyItem');
// const modifyItemHeader = document.getElementById('modifyItemHeader');
// const modifyItemInput = document.getElementById('modifyItemInput');

// // BUTTONS
// const addTweetButton = document.querySelector('#addTweet');
// const cancelModificationButton = document.getElementById('cancelModification');
// const saveMdifiedItemButton = document.getElementById('saveModifiedItem');

CONSTANTS.addTweetButton.addEventListener('click', function () {
   location = CONSTANTS.way + '#add_tweet';
   CONSTANTS.modifyItemInput.value = '';
   CONSTANTS.modifyItemElem.classList.remove('hidden');
   CONSTANTS.modifyItemHeader.innerText = 'Add tweet';
   CONSTANTS.tweetItemsElem.classList.add('hidden');
});



let idForLi = 0;
let previousTweet = '';

function removeAlert() {
   CONSTANTS.alertElem.classList.add('hidden');
}
function setLiElem(tweet) {
   const listLi = document.createElement('li');
   const buttonWrapper = document.createElement('div');
   const buttonRemove = document.createElement('button');
   const buttonLike = document.createElement('button');
   CONSTANTS.tweetsListElem.append(listLi);
   listLi.id = idForLi++;
   localStorage.setItem(listLi.id, tweet);
   listLi.innerText = localStorage[listLi.id];
   previousTweet = localStorage[listLi.id].toString();
   listLi.append(buttonWrapper);
   buttonWrapper.append(buttonRemove);
   buttonWrapper.append(buttonLike);
   buttonRemove.innerText = 'remove';
   buttonLike.innerText = 'like';
   buttonLike.id = listLi.id;

   const likedTweetsButton = document.createElement('button');
   buttonLike.addEventListener('click', function () {

      likedTweetsButton.innerText = 'Go to liked';
      CONSTANTS.navButtonsElem.append(likedTweetsButton);
   })
}

CONSTANTS.saveModifyedItemButton.addEventListener('click', function () {
   CONSTANTS.tweetItemsElem.classList.remove('hidden');
   CONSTANTS.modifyItemElem.classList.add('hidden');
   const tweet = CONSTANTS.modifyItemInput.value;


   if (tweet === '') {
      CONSTANTS.alertElem.classList.remove('hidden');
      CONSTANTS.alertMessageTextElem.innerText = `Error! Tweet is empty`;
      setTimeout(removeAlert, 2000);
   } else if (tweet === previousTweet) {
      CONSTANTS.alertElem.classList.remove('hidden');
      CONSTANTS.alertMessageTextElem.innerText = `Error! You can't tweet about that`;
      setTimeout(removeAlert, 2000);
   } else {
      setLiElem(tweet);
      console.log(localStorage);
   }
});

const canselATButton = document.getElementById('cancelModification');

canselATButton.addEventListener('click', function () {
   location = CONSTANTS.way + '#/main_page';
   CONSTANTS.tweetItemsElem.classList.remove('hidden');
   CONSTANTS.modifyItemElem.classList.add('hidden');
});


