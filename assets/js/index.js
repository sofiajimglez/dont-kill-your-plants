const cards = [new Card('Water'), new Card('Water'), new Card('Water'), new Card('WaterPlus')];

const game = new Game(cards);

const startBtn = document.getElementById('start');

let round = document.getElementById('round-info').innerText;
let season = document.getElementById('season-info').innerText;





startBtn.onclick = () => {
    game.start();

};


document.querySelectorAll('.use-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.parentElement.id);
        if (e.target.parentElement.id === 'card-1-btns') {
            game.pickedCards[0].use(game.plant);
            //TODO: Cada vez que se usa que se quite del array de picked cards
            game.rounds += 1;
            console.log(game.rounds);
            console.log(game.plant.water);
        } else if (e.target.parentElement.id === 'card-2-btns') {
            game.pickedCards[1].use(game.plant);
            game.rounds += 1;
            console.log(game.rounds);
            console.log(game.plant.water);
        } else if (e.target.parentElement.id === 'card-3-btns') {
            game.pickedCards[2].use(game.plant);
            game.rounds += 1;
            console.log(game.rounds);
            console.log(game.plant.water);
        }
    })
});




/*  
let sunlightValue = document.querySelector('#sunlight span').innerText;
let waterValue = document.querySelector('#water span').innerText;
let spaceValue = document.querySelector('#space span').innerText;
let healthValue = document.querySelector('#health span').innerText; */
