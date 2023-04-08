const resetGame = () => {
   const logs = document.querySelectorAll('div.log');
   logs.forEach((item) => {
      item.remove();

   });
}

export default resetGame;