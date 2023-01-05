class MedicineCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    plant.illness = false;
    if (plant.health + 1 > 10) {
      plant.health = 10;
    } else {
      plant.health += 1;
    }
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('medicine-bg');
  }
  
}

