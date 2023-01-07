
const game = new Game('cards-container');

const startBtn = document.getElementById('start');

startBtn.onclick = () => {
  game.start();
  game.updateUI();
  console.log(game.cards);
  console.log(game.pickedCards);
};

