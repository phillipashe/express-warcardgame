const uuid = require('uuid');
const Deck = require('./deck');

class Game {
  constructor() {
    this.id = uuid.v4();
    this.firstPlayerCards = [];
    this.secondPlayerCards = [];
    this.playedCards = [];
    // this.battleResult = {};
    this.init();
  }

  init() {
    const deck = new Deck();
    [this.firstPlayerCards, this.secondPlayerCards] = deck.dealCards();
  }

  // takeCards(winner, loser) {
  //   this.firstPlayerCards.concat(battleResult.playerOne.cards);
  //   this.firstPlayerCards.concat(battleResult.playerTwo.cards);
  //   battleResult.playerOne.deck = this.firstPlayerCards.length;
  //   battleResult.playerTwo.deck = this.firstPlayerCards.length;
  //   battleResult.winner = "Player One";
  // }

  battle() {
    // reset result object
    const battleResult = {
      winner: "",
      playerOne: {
        deck: 0,
        cards: []
      },
      playerTwo: {
        deck: 0,
        cards: []
      }
    }

    let fight = true;

    // need to draw more than this
    while (this.firstPlayerCards.length && this.secondPlayerCards.length) {
      const firstPlayerCard = this.firstPlayerCards.shift();
      battleResult.playerOne.cards.push(firstPlayerCard);
      const secondPlayerCard = this.secondPlayerCards.shift();
      battleResult.playerTwo.cards.push(secondPlayerCard);

      if (!fight) {
        fight = true;
      } else {
        // case where player one wins
        if (firstPlayerCard.value > secondPlayerCard.value) {
          this.firstPlayerCards = [...this.firstPlayerCards, ...battleResult.playerOne.cards, ...battleResult.playerTwo.cards];
          battleResult.playerOne.deck = this.firstPlayerCards.length;
          battleResult.playerTwo.deck = this.secondPlayerCards.length;
          battleResult.winner = "Player One";
          return battleResult;
        }

        // case where player two wins
        if (secondPlayerCard.value > firstPlayerCard.value) {
          this.secondPlayerCards = [...this.secondPlayerCards, ...battleResult.playerOne.cards];
          this.secondPlayerCards = [...this.secondPlayerCards, ...battleResult.playerTwo.cards];
          battleResult.playerOne.deck = this.firstPlayerCards.length;
          battleResult.playerTwo.deck = this.secondPlayerCards.length;
          battleResult.winner = "Player Two";
          return battleResult;
        }

        // case where both values are equal
        if (firstPlayerCard.value === secondPlayerCard.value) {
          fight = false;
        }
      }
    }

    if (!this.secondPlayerCards.length) {
      battleResult.winner = "Player One";
      battleResult.playerOne.deck = this.firstPlayerCards.length;
    }
    if (!this.firstPlayerCards.length) {
      battleResult.winner = "Player Two";
      battleResult.playerTwo.deck = this.secondPlayerCards.length;
    }

    return battleResult;
  }
}

module.exports = Game;