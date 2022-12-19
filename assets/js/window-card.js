class WindowCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    if (plant.sunlight + 2 > 10) {
      plant.sunlight = 10;
      plant.health -= 1;
    } else {
      plant.sunlight += 2;
    }
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

