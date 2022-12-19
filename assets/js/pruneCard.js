class PruneCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.space += 1;
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

