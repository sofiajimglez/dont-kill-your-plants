class FertilizeCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.health += 2;
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
    
}

