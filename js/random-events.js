function randomEventCat(plant) {
    plant.health = plant.health - 5;
    alert('Oh no! The cat has thrown the plant to the ground! :(');
    //Swal.fire('Any fool can use a computer');
};

function randomEventHappy(plant) {
    if (plant.health + 2 > 10) {
        plant.health = 10;
    } else {
        plant.health = plant.health + 2;
    }
    alert('Your plant woke up very happy today! Nice!');
    //Swal.fire('Any fool can use a computer')
};

function randomEventMom(plant) {
    if (plant.water + 1 > 10) {
        plant.water = 10;
        plant.health -= 1;
        //alert('Your mother has watered the plant more than desirable! MOM!!! >:(');
        Swal.fire('Any fool can use a computer')
      } else {
        plant.water += 1;
        alert('Your mother has remembered to water your plants, thank you mommy!');
        //Swal.fire('Any fool can use a computer')
      };
    
};

function randomEventPlague(plant) {
    plant.health = plant.health - 1;
    plant.illness = true;
    alert('The plant has been attacked by a fungal infection... :(');
    //Swal.fire('Any fool can use a computer')
};