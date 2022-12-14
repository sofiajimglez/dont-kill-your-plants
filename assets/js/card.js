class Card {
    constructor(type) {
        this.type = type;
        this.img = new Image ();
        this.img.src = '';
    };

    printCard();

    use(plant) {
        switch (this.type) {
            case 'Water':
                plant.water += 1;
        }
    };
}