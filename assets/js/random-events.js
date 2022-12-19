function randomEventCat(plant) {
    plant.health = plant.health - 5;
    alert('Oh no! The cat has thrown the plant to the ground! :(');
};

function randomEventHappy(plant) {
    plant.health = plant.health + 2;
    alert('Your plant woke up very happy today! Nice!');
};

function randomEventMom(plant) {
    if (plant.water + 1 > 10) {
        plant.water = 10;
        plant.healt -= 1;
        alert('Your mother has watered the plant more than desirable! MOM!!! >:(');
      } else {
        plant.water += 1;
        alert('Your mother has remembered to water your plants, thank you mommy!');
      };
    
};

function randomEventPlague(plant) {
    plant.health = plant.health - 1;
    plant.illness = true;
    alert('The plant has been attacked by a fungal infection... :(');
};