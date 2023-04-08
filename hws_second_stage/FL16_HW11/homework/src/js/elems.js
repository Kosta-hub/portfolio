
const root = document.getElementById('root');

let way = location.origin + location.pathname;

const alertElem = document.getElementById('alertMessage');
const tweetItemsElem = document.getElementById('tweetItems');
const tweetsListElem = document.getElementById('list');
const navButtonsElem = document.getElementById('navigationButtons');

const alertMessageTextElem = document.getElementById('alertMessageText');

// MODIFY ITEM BLOCK
const modifyItemElem = document.getElementById('modifyItem');
const modifyItemHeader = document.getElementById('modifyItemHeader');
const modifyItemInput = document.getElementById('modifyItemInput');

// BUTTONS
const addTweetButton = document.querySelector('#addTweet');
const cancelModificationButton = document.getElementById('cancelModification');
const saveModifyedItemButton = document.getElementById('saveModifiedItem');

export {
   root,
   way,
   alertElem,
   tweetItemsElem,
   tweetsListElem,
   navButtonsElem,
   alertMessageTextElem,
   modifyItemElem,
   modifyItemHeader,
   modifyItemInput,
   addTweetButton,
   cancelModificationButton,
   saveModifyedItemButton
}