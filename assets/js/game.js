class Game {
  constructor(cardsContainer) { 
    this.plant = new Plant();
    this.season = new Season();
    this.cards = [new Card(cardsContainer, this.onClickCard), new Card(cardsContainer, this.onClickCard), new Card(cardsContainer, this.onClickCard)];
    this.pickedCards = [];
    this.rounds = 0;
    this.randomEvents = ['Mom', 'Cat', 'Happy', 'Plague'];
  };

  start() {
    this.shuffleCards();
    this.pickCards();
  };

  shuffleCards() {
    if (this.cards) {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * this.cards.length);
        let aux = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = aux;
      }
    }
  }

  pickCards() {
    while (this.pickedCards.length < 3) { 
      let newCard = this.cards.pop();
      this.pickedCards.push(newCard);
      newCard.render();
    }
  }

  onClickCard(mode, card) {
    //TODO: QUE HAGA UNA COSA U OTRA DEPENDIENDO DEL MODE
    if (mode === 'use') {
      card.use(this.plant);
    }

    console.log(mode);
    console.log(card);
  }
  
}