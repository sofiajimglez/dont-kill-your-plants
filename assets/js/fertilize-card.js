class FertilizeCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    if (plant.health + 2 > 10) {
      plant.health = 10;
    } else {
      plant.health += 2;
    }
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('fertilize-bg');
  }
    
}

