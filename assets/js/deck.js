function createDeck(cardsContainer, onClickCard) {
  return [
    Array.from({ length: 1 }, () => new CaressCard(cardsContainer, onClickCard)),
    Array.from({ length: 3 }, () => new FertilizeCard(cardsContainer, onClickCard)),
    Array.from({ length: 2 }, () => new MedicineCard(cardsContainer, onClickCard)),
    Array.from({ length: 1 }, () => new PlayCard(cardsContainer, onClickCard)),
    Array.from({ length: 3 }, () => new PruneCard(cardsContainer, onClickCard)),
    Array.from({ length: 3 }, () => new TalkCard(cardsContainer, onClickCard)),
    Array.from({ length: 3 }, () => new TransplantCard(cardsContainer, onClickCard)),
    Array.from({ length: 4 }, () => new WaterCard(cardsContainer, onClickCard)),
    Array.from({ length: 2 }, () => new WaterPlusCard(cardsContainer, onClickCard)),
    Array.from({ length: 3 }, () => new WindowCard(cardsContainer, onClickCard))
  ].flat();
}