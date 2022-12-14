class Season {

    spring(plant) {
        plant.health += 1;
        plant.space -= 1;
    }

    summer(plant) {
        plant.sunlight += 1;
        plant.water -= 1;
    }

    fall(plant) {
        plant.water += 1;
        plant.sunlight -= 1;
    }

    winter(plant) {
        plant.space += 1;
        plant.health -= 1;
    }
}