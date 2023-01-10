class Game {
  constructor(cardsContainer) {
    this.plant = new Plant();
    this.season = new Season();
    this.cards = createDeck(cardsContainer,this.onClickCard.bind(this));
    this.pickedCards = [];
    this.rounds = 0;
    this.maxRounds = 20;
    this.randomEvents = ['Mom','Cat', 'Happy', 'Plague'];
  };

  start() {
    this.shuffleCards();
    this.pickCards();
  };

  shuffleCards() {
    if (this.cards) {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * this.cards.length);
        let aux = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = aux;
      }
    }
  }

  pickCards() {
    while (this.pickedCards.length < 3) {
      let newCard = this.cards.pop();
      this.pickedCards.push(newCard);
      newCard.render();
    }
  }

  onClickCard(mode, card) {
    const buttonAudio = new Audio('../audio/clic-btn.mp3');
    if (mode === 'use') {
      card.use(this.plant);
      buttonAudio.play();
      card.discard(card, this.pickedCards);
      this.nextRound();
    } else if (mode === 'discard') {
      card.discard(card, this.pickedCards);
      buttonAudio.play();
      this.nextRound();
    }
  }

  updateUI() {
    const round = document.getElementById('round-info');
    round.innerText = this.rounds;

    const sunlightStat = document.getElementById('sunlight');
    sunlightStat.innerText = this.plant.sunlight;
    const sunlightBar = document.getElementById('progress-bar-sunlight');
    sunlightBar.style.width = `${this.plant.sunlight * 10}%`;
    if (this.plant.sunlight <= 0) {
      Swal.fire({
        title: 'Game Over', 
        text: 'Oh, no! The plant is dead! 😭',
        showConfirmButton: false,
        customClass: {container: 'alert-container'}
      });
      setTimeout(() => {
        window.location.reload(); 
      }, 8000);
    } 

    const waterStat = document.getElementById('water');
    waterStat.innerText = this.plant.water;
    const waterBar = document.getElementById('progress-bar-water');
    waterBar.style.width = `${this.plant.water * 10}%`;
    if (this.plant.water <= 0) {
      Swal.fire({
        title: 'Game Over', 
        text: 'Oh, no! The plant is dead! 😭',
        showConfirmButton: false,
        customClass: {container: 'alert-container'}
      });
      setTimeout(() => {
        window.location.reload(); 
      }, 8000);
    } 

    const spaceStat = document.getElementById('space');
    spaceStat.innerText = this.plant.space;
    const spaceBar = document.getElementById('progress-bar-space');
    spaceBar.style.width = `${this.plant.space * 10}%`;
    if (this.plant.space <= 0) {
      Swal.fire({
        title: 'Game Over', 
        text: 'Oh, no! The plant is dead! 😭',
        showConfirmButton: false,
        customClass: {container: 'alert-container'}
      });
      setTimeout(() => {
        window.location.reload(); 
      }, 8000);
    } 

    const healthStat = document.getElementById('health');
    healthStat.innerText = this.plant.health;
    const healthBar = document.getElementById('progress-bar-health');
    healthBar.style.width = `${this.plant.health * 10}%`;
    if (this.plant.health <= 0) {
      Swal.fire({
        title: 'Game Over', 
        text: 'Oh, no! The plant is dead! 😭',
        showConfirmButton: false,
        customClass: {container: 'alert-container'}
      });
      setTimeout(() => {
        window.location.reload(); 
      }, 8000);
    } 

    const seasonName = document.getElementById('season-info');
    seasonName.innerText = this.season.getSeasonName(this.rounds);
  }

  nextRound() {
    if (!this.isGameOver()) {
      this.rounds += 1;
      if (this.plant.illness) {
        this.plant.health -= 1
      };
      this.updateUI();
      this.pickCards();
      setTimeout(() => {
        this.season.checkSeason(this.rounds, this.plant);
        this.updateUI();
        this.isGameOver();
      }, 1000);
      setTimeout(() => {
        this.randomEvent(0.16); //0.15
        this.updateUI();
      }, 3000);
    };
  }

  isGameOver() {
    if (this.rounds < this.maxRounds && this.plant.isAlive()) {
      return false;
    } else if (this.rounds === this.maxRounds && this.plant.isAlive()) {
      Swal.fire({
        title: 'You win', 
        text: 'Well done! You are indeed a plant lover 💚',
        customClass: {container: 'alert-container'}
      });
      window.location.reload();
      return true;
    } 
  }

  randomEvent(prob = 0.15) {
    let event = '';
    if (Math.random() < prob) {
      event = this.randomEvents[Math.floor(Math.random() * this.randomEvents.length)]
      switch (event) {
        case 'Cat':
          randomEventCat(this.plant);
          break;
        case 'Happy':
          randomEventHappy(this.plant);
          break;
        case 'Mom':
          randomEventMom(this.plant);
          break;
        case 'Plague':
          randomEventPlague(this.plant);
          break;
      }
    }
  }
}


