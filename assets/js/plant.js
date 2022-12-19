class Plant {
  constructor() {
    this.sunlight = 5;
    this.water = 5;
    this.space = 8;
    this.health = 8;
    this.illness = false;
  };

  grow() {
    //TODO: que cambie la ilustración de la planta
  };

  isAlive() {
    const plantStats = [this.sunlight, this.water, this.space, this.health];
    return plantStats.every((stat) => stat > 0);
  };
}