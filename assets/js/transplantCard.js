class TransplantCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.space += 5;
    //TODO: EJECUTAR MÉTODO GROW DE LA PLANTA
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

