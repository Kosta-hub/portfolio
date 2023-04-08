// Your code goes here
fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
      returnList(json)
      console.log(json);
   })

const listWrap = document.getElementById('list-wrap');

function returnList(json) {
   console.log(json);

   for (let prop in json) {
      let liElem = document.createElement('li');
      liElem.innerText = json[prop].name;
      listWrap.append(liElem);
      console.log(json[prop]);
   }
}