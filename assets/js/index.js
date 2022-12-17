
const game = new Game('cards-container');

const startBtn = document.getElementById('start');

const round = document.getElementById('round-info');


startBtn.onclick = () => {
    game.start();
    console.log(game.cards);
    console.log(game.pickedCards);
};


// document.querySelectorAll('.use-btn').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target.parentElement.id);
//         if (e.target.parentElement.id === 'card-1-btns') {
//             game.pickedCards[0].use(game.plant);
//             game.pickedCards.splice(0, 1);
//             game.pickCards();
//             game.rounds += 1;
//             round.innerText = game.rounds;

//             // console.log(game.cards);
//             // console.log(game.pickedCards);
//             console.log(game.rounds);
//             console.log(game.plant.water);

//         } else if (e.target.parentElement.id === 'card-2-btns') {
//             game.pickedCards[1].use(game.plant);
//             game.pickedCards.splice(1, 1);
//             game.pickCards();
//             game.rounds += 1;

//             //console.log(game.cards);
//             //console.log(game.pickedCards);
//             console.log(game.rounds);
//             console.log(game.plant.water);

//         } else if (e.target.parentElement.id === 'card-3-btns') {
//             game.pickedCards[2].use(game.plant);
//             game.pickedCards.splice(2, 1);
//             game.pickCards();
//             game.rounds += 1;

//             // console.log(game.cards);
//             // console.log(game.pickedCards);
//             console.log(game.rounds);
//             console.log(game.plant.water);
//         }
//     })
// });

// document.querySelectorAll('.remove-btn').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target.parentElement.id);
//         if (e.target.parentElement.id === 'card-1-btns') {
//             game.pickedCards.splice(0, 1);
//             game.pickCards();
//             game.rounds += 1;

//         } else if (e.target.parentElement.id === 'card-2-btns') {
//             game.pickedCards.splice(1, 1);
//             game.pickCards();
//             game.rounds += 1;

//         } else if (e.target.parentElement.id === 'card-3-btns') {
//             game.pickedCards.splice(2, 1);
//             game.pickCards();
//             game.rounds += 1;
//         }
//     })
// });




/*  
let sunlightValue = document.querySelector('#sunlight span').innerText;
let season = document.getElementById('season-info').innerText;
let spaceValue = document.querySelector('#space span').innerText;
let healthValue = document.querySelector('#health span').innerText; */
