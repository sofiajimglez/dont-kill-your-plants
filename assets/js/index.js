const cards = [new Card('Water'), new Card('Water'), new Card('Water')];
const game = new Game(cards);

const startBtn = document.getElementById('start');
const useBtn = document.getElementById('use-btn');

const sunlightValue = document.querySelector('#sunlight span').innerText;
const waterValue = document.querySelector('#water span').innerText;
const spaceValue = document.querySelector('#space span').innerText;
const healthValue = document.querySelector('#health span').innerText;

startBtn.onclick = () => {
    game.start();
};
