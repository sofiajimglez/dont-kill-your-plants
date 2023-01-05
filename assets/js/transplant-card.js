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
    //TODO: EJECUTAR MÉTODO GROW DE LA PLANTA
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('transplant-bg');
  }
}

