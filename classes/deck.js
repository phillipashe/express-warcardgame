const Card = require('./card');

class Deck {
  constructor() {
    this.cards = [];
    this.playerOneCards = [];
    this.playerTwoCards = [];
  }

  /* 
    Fill the deck with 52 cards. 
  */
  #fillDeck() {
    const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
    for (let i = 2; i < 15; i++) {
      for (const suit of suits) {
        const card = new Card(i, suit);
        this.cards.push(card);
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

  // deal the deck out to the two players
  dealCards() {
    this.#fillDeck();
    this.#shuffleDeck();
    // spits the deck in half
    return [this.cards.slice(0, 26), this.cards.slice(26, 52)]
  }
}

module.exports = Deck;