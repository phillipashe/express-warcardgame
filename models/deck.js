class Deck {
  constructor() {
    this.cards = [];
    this.playerOneCards = [];
    this.playerTwoCards = [];
  }

  /* 
    Fill the deck with 52 cards. Note that suit is not required,
    nor do I need to show which card.  Therefore I can substitute
    face cards with integers.
  */
  #fillDeck() {
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(i);
      }
    }
  }

  // shuffled with the Fisher-Yates shuffle
  #shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealCards() {
    this.#fillDeck();
    this.#shuffleDeck();
    // spits the deck in half
    return [this.cards.slice(0,26), this.cards.slice(26,52)]
  }
}

module.exports = Deck;