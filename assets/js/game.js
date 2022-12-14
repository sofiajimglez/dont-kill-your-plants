class Game {
    constructor() {
        this.plant = new Plant();
        this.season = new Season();
        this.deckOfCards = [];
        this.pickedCards = [];
        this.rounds = 0;
        this.randomEvents = ['Mom', 'Cat', 'Happy', 'Plague'];
    }


    start() {
        console.log('hola hola');
    }
}