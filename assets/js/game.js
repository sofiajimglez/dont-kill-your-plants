class Game {
    constructor(cards) {
        this.plant = new Plant();
        this.season = new Season();
        this.cards = cards;
        this.pickedCards = [];
        this.rounds = 0;
        this.randomEvents = ['Mom', 'Cat', 'Happy', 'Plague'];
    };


    start() {
        console.log('hola hola');
    };
}