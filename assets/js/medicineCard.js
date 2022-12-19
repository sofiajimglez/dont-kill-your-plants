class MedicineCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.health += 1;
    //TODO: QUITAR ESTADO PLAGUE. QUE PLANT.ILLNESS PASE DE TRUE A FALSE
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }
}

