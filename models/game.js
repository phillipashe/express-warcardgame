const uuid = require('uuid');
const Deck = require('./deck');

class Game {
  constructor() {
    this.id = uuid.v4();
    this.firstPlayerCards = [];
    this.secondPlayerCards = [];
    this.init();
  }

  init() {
    const deck = new Deck();
    [this.firstPlayerCards, this.secondPlayerCards] = deck.dealCards();
  }

  // play a round
}

module.exports = Game;