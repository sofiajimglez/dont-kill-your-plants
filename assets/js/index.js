
const game = new Game('cards-container');

const startBtn = document.getElementById('start');
const homePage = document.getElementById('home-page');

startBtn.onclick = () => {
  game.start();
  game.updateUI();
  homePage.classList.add('hidden');
};

