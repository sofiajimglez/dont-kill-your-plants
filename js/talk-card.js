class TalkCard extends Card {
  constructor(cardsContainer, onClickCard) {
    super(cardsContainer, onClickCard);
  }

  use(plant) {
    super.use(plant);
  }

  discard(card, pickedCards) {
    super.discard(card, pickedCards);
  }

  render() {
    super.render();
    this.cardNode.classList.add('talk-bg');
  }
}

