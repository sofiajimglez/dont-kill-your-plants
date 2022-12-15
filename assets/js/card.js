class Card {
    constructor(type) {
        this.type = type;
        /* this.img = new Image();
        this.img.src = 'https://media.architecturaldigest.com/photos/5efb7da66d18ec1650bd30a7/master/w_1000,h_1250,c_limit/Corn-Plant-LArge-2.jpg';
        */
    };

    printCard() {
        //TODO: poner una imagen u otra dependiento del type
    };

    use(plant) {
        // 
        switch (this.type) {
            case 'Water':
                plant.water += 1;
                break;
            case 'WaterPlus':
                plant.water += 3;
                break;
            case 'Transplant':
                plant.space += 5;
                //TODO: ejecutar método grow de la planta
                break;
            case 'Fertilize':
                plant.health += 2;
                break;
            case 'Medicine':
                plant.health += 1;
                //TODO: quitar estado de Plague
                break;
            case 'CloseToWindow':
                plant.sunlight += 2;
                break;
            case 'Prune':
                plant.space += 1;
        }
    };

    remove() {
        //TODO: quitar la carta del array de pickedCards
    };
}