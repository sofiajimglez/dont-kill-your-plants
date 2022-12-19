class WaterCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.water += 1;
    console.log('hola');
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

