const homeSong = document.getElementById("home-song");
const buttonAudio = new Audio('../audio/clic-btn.mp3');
const gameSong = new Audio('../audio/game.mp3');
gameSong.load();
gameSong.currentTime = 1;

const game = new Game('cards-container');

const startBtn = document.getElementById('start');
const homePage = document.getElementById('home-page');

startBtn.onclick = () => {
  buttonAudio.play();
  homeSong.pause();
  gameSong.play();
  game.start();
  game.updateUI();
  homePage.classList.add('hidden');
};

