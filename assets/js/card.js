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

    use() {
        console.log('hola');
    };

    // use(plant) {
    //     // 
    //     switch (this.type) {
    //         case 'Water':
    //             plant.water += 1;
    //             break;
    //         case 'WaterPlus':
    //             plant.water += 3;
    //             break;
    //         case 'Transplant':
    //             plant.space += 5;
    //             //TODO: ejecutar método grow de la planta
    //             break;
    //         case 'Fertilize':
    //             plant.health += 2;
    //             break;
    //         case 'Medicine':
    //             plant.health += 1;
    //             //TODO: quitar estado de Plague
    //             break;
    //         case 'CloseToWindow':
    //             plant.sunlight += 2;
    //             break;
    //         case 'Prune':
    //             plant.space += 1;
    //     }
    // };

    // remove() {
    //     //TODO: quitar la carta del array de pickedCards
    // };
}