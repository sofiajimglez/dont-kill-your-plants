class WaterPlusCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
    if (plant.water + 3 > 10) {
      plant.water = 10;
      plant.healt -= 1;
    } else {
      plant.water += 3;
    }
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('water-plus-bg');
  }
}

