class WaterCard extends Card {
    constructor() {
        super();
    }

    use(plant) {
        super.use(plant);
        plant.water += 1;
        console.log(hola);
    }
}

