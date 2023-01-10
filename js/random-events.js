function randomEventCat(plant) {
    plant.health = plant.health - 5;
    Swal.fire({
        title: 'Random Event', 
        text: 'Oh no! The cat has thrown the plant to the ground! 😨',
        confirmButtonColor: '#e7aa47',
        customClass: {container: 'alert-container'}
    });
};

function randomEventHappy(plant) {
    if (plant.health + 2 > 10) {
        plant.health = 10;
    } else {
        plant.health = plant.health + 2;
    }
    Swal.fire({
        title: 'Random Event', 
        text: 'Your plant woke up very happy today! Nice! 🥰',
        confirmButtonColor: '#e7aa47',
        customClass: {container: 'alert-container'}
    });
};

function randomEventMom(plant) {
    if (plant.water + 1 > 10) {
        plant.water = 10;
        plant.health -= 1;
        Swal.fire({
            title: 'Random Event', 
            text: 'Your mother has watered the plant more than desirable! MOM!!! 😠',
            confirmButtonColor: '#e7aa47',
            customClass: {container: 'alert-container'}
        });
      } else {
        plant.water += 1;
        Swal.fire({
            title: 'Random Event', 
            text: 'Your mother has remembered to water your plants, thank you mommy! 😊',
            confirmButtonColor: '#e7aa47',
            customClass: {container: 'alert-container'}
        });
      };
    
};

function randomEventPlague(plant) {
    plant.health = plant.health - 1;
    plant.illness = true;
    Swal.fire({
        title: 'Random Event', 
        text: 'The plant has been attacked by a fungal infection...! 😢',
        confirmButtonColor: '#e7aa47',
        customClass: {container: 'alert-container'}
    });
};