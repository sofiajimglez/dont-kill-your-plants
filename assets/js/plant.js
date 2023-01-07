class Plant {
  constructor() {
    this.sunlight = 5;
    this.water = 5;
    this.space = 8;
    this.health = 8;
    this.illness = false;
  };

  grow() {
    const plantImg = document.getElementById('plant-img');
    console.log('holi');

    if (plantImg.classList.contains('plant-img-01')) {
      plantImg.classList.remove('plant-img-01');
      plantImg.classList.add('plant-img-02');
    } else if (plantImg.classList.contains('plant-img-02')) {
      plantImg.classList.remove('plant-img-02');
      plantImg.classList.add('plant-img-03');
    } else if (plantImg.classList.contains('plant-img-03')) {
      plantImg.classList.remove('plant-img-03');
      plantImg.classList.add('plant-img-04');
    }
  };

  isAlive() {
    const plantStats = [this.sunlight, this.water, this.space, this.health];
    return plantStats.every((stat) => stat > 0);
  };
}