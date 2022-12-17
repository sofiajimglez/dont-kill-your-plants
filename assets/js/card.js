class Card {
  constructor(cardsContainer, onClickCard) {
    this.cardsContainer = document.getElementById(cardsContainer);
    this.cardNode = document.createElement('div');
    this.useBtn = document.createElement('button');
    this.useBtn.addEventListener('click', () => this.onClickCard('use', this));
    this.discardBtn = document.createElement('button');
    this.discardBtn.addEventListener('click', () => this.onClickCard('discard', this));
    this.cardNode.appendChild(this.useBtn);
    this.cardNode.appendChild(this.discardBtn);
    this.onClickCard = onClickCard;
  };

  render() {
    this.cardNode.classList.add('card');
    this.cardsContainer.appendChild(this.cardNode);
    this.useBtn.innerText = 'Use';
    this.useBtn.classList.add('card-btns');
    this.discardBtn.innerText = 'Discard';
    this.discardBtn.classList.add('card-btns');
  }

  use() {};

  discard(card, arr) {
    console.log(card);
    console.log(arr);
    
    //let i = pickedCards.indexOf(card);
    //pickedCards.splice(i, 1);
  };
}