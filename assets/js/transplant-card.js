class TransplantCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    if (plant.space + 5 > 10) {
      plant.space = 10;
    } else {
      plant.space += 5;
    }
    
    plant.grow();
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('transplant-bg');
  }
}

