(function () {
   const sendBtn = document.querySelector('#send');
   const messages = document.querySelector('#messages');
   const messageInput = document.querySelector('#messageInput');
   const userName = prompt('Enter your name');




   let wss;

   function showMessage(message, name) {
      wss.onmessage = ({ data }) => showMessage(data);

      const userDiv = document.createElement('div');
      userDiv.classList.add('userDiv');
      let newMessage = document.createElement('div');
      newMessage.classList.add('newMessage');
      console.log(newMessage);
      let today = new Date();
      let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      const timeDiv = document.createElement('div');
      timeDiv.classList.add('timeDiv');


      messages.scrollTop = messages.scrollHeight;
      messages.append(userDiv);
      userDiv.textContent = name;
      messages.append(newMessage);
      newMessage.textContent += `\n${message}`;
      newMessage.value = '';
      messages.append(timeDiv);
      timeDiv.textContent = time;
      messageInput.value = '';
   }

   function init() {
      if (wss) {
         wss.onerror = wss.onopen = wss.onclose = null;
         wss.close();
      }

      wss = new WebSocket('ws://localhost:8080');
      wss.onopen = () => {
         console.log('OPENED!!!')
      }


      wss.onclose = function () {
         wss = null;
      }
   }

   sendBtn.onclick = function () {
      if (!wss) {
         showMessage('NO CONNECTION!!!');
         return;
      }
      wss.send(messageInput.value, userName);
      showMessage(messageInput.value, userName);
   }

   init();
})();



// socket.onopen = function (e) {
//    alert('[open] Соединение установлено');
//    alert('Отправляем данные на сервер');
//    socket.send('Меня зовут Джон');
// };

// socket.onmessage = function (event) {
//    alert(`[message] Данные получены с сервера: ${event.data}`);
// };

// socket.onclose = function (event) {
//    if (event.wasClean) {
//       alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//    } else {
//       // например, сервер убил процесс или сеть недоступна
//       // обычно в этом случае event.code 1006
//       alert('[close] Соединение прервано');
//    }
// };

// socket.onerror = function (error) {
//    alert(`[error] ${error.message}`);
// };