class Season {

  spring(plant) {
    if (plant.health + 1 > 10) {
      plant.health = 10;
    } else {
      plant.health += 1;
    }
    plant.space -= randomNumber();
  };

  summer(plant) {
    if (plant.sunlight + 1 > 10) {
      plant.sunlight = 10;
    } else {
      plant.sunlight += 1;
    }
    plant.water -= randomNumber();
  };

  fall(plant) {
    if (plant.water + 1 > 10) {
      plant.water = 10;
    } else {
      plant.water += 1;
    }
    plant.sunlight -= randomNumber();
  };

  winter(plant) {
    if (plant.space + 1 > 10) {
      plant.space = 10;
    } else {
      plant.space += 1;
    }
    plant.health -= randomNumber();
  };

  checkSeason(round, plant) {
    if (round >= 0 && round <= 5) {
      this.spring(plant);
    } else if (round > 5 && round <= 10) {
      this.summer(plant);
    } else if (round > 10 && round <= 15) {
      this.fall(plant);
    } else if (round > 15 && round <= 20) {
      this.winter(plant);
    }
  }

  getSeasonName(round) {
    if (round >= 0 && round <= 5) {
      return '🌸Spring🌸';
    } else if (round > 5 && round <= 10) {
      return '🌞Summer🌞';
    } else if (round > 10 && round <= 15) {
      return '🍂Fall🍂';
    } else if (round > 15 && round <= 20) {
      return '⛄Winter⛄';
    }
  }

}

function randomNumber(prob = 0.8) {
  let randomNum = Math.random(); 
  if (randomNum < prob) {
    return 1;
  } else {
    return 2;
  }
}