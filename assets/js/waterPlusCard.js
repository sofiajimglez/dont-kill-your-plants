class WaterPlusCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.water += 3;
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

