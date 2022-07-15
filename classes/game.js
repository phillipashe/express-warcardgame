const uuid = require('uuid');
const Deck = require('./deck');

class Game {
  constructor() {
    this.id = uuid.v4();
    this.firstPlayerCards = [];
    this.secondPlayerCards = [];
    this.playedCards = [];
    this.init();
  }

  init() {
    const deck = new Deck();
    [this.firstPlayerCards, this.secondPlayerCards] = deck.dealCards();
  }

  // shuffled with the Fisher-Yates shuffle
  #shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  // draw one card from each respective player's deck
  #drawCards(battleResult) {
    const firstPlayerCard = this.firstPlayerCards.shift();
    battleResult.playerOne.cards.push(firstPlayerCard);
    const secondPlayerCard = this.secondPlayerCards.shift();
    battleResult.playerTwo.cards.push(secondPlayerCard);
    return [firstPlayerCard, secondPlayerCard];
  }

  // add all cards in play to the first player's deck
  #addToFirstPlayer(battleResult) {
    // shuffling played cards reduces the number of turns on average
    this.firstPlayerCards = [...this.firstPlayerCards, ...this.#shuffle([...battleResult.playerOne.cards, ...battleResult.playerTwo.cards])];
    battleResult.playerOne.deck = this.firstPlayerCards.length;
    battleResult.playerTwo.deck = this.secondPlayerCards.length;
    battleResult.winner = "Player One";
    return battleResult;
  }

  // add all cards in play to the second player's deck
  #addToSecondPlayer(battleResult) {
    // shuffling played cards reduces the number of turns on average
    this.secondPlayerCards = [...this.secondPlayerCards, ...this.#shuffle([...battleResult.playerOne.cards, ...battleResult.playerTwo.cards])];
    battleResult.playerOne.deck = this.firstPlayerCards.length;
    battleResult.playerTwo.deck = this.secondPlayerCards.length;
    battleResult.winner = "Player Two";
  }

  // play a round of War
  battle() {
    // result object - will be populated before returning
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

    // while both players have cards
    while (this.firstPlayerCards.length && this.secondPlayerCards.length) {

      const [firstPlayerCard, secondPlayerCard] = this.#drawCards(battleResult);
      if (firstPlayerCard.value > secondPlayerCard.value) {
        this.#addToFirstPlayer(battleResult);
        return battleResult;
      }

      // case where player two wins
      if (secondPlayerCard.value > firstPlayerCard.value) {
        this.#addToSecondPlayer(battleResult);
        return battleResult;
      }

      // case where both values are equal
      if (firstPlayerCard.value === secondPlayerCard.value) {
        // draw an extra set of cards, but do not use them
        this.#drawCards(battleResult);
      }
    }

    // if one player ran out of cards, the other player won
    if (!this.secondPlayerCards.length) {
      battleResult.winner = "Player One";
      this.firstPlayerCards = [...this.firstPlayerCards, ...battleResult.playerOne.cards, ...battleResult.playerTwo.cards];
      this.firstPlayerCards = this.firstPlayerCards.filter(c => c!==undefined);
      battleResult.playerOne.deck = this.firstPlayerCards.length;
    }
    if (!this.firstPlayerCards.length) {
      battleResult.winner = "Player Two";
      this.secondPlayerCards = [...this.secondPlayerCards, ...battleResult.playerOne.cards, ...battleResult.playerTwo.cards];
      this.secondPlayerCards = this.secondPlayerCards.filter(c => c!==undefined);
      battleResult.playerTwo.deck = this.secondPlayerCards.length;
    }

    return battleResult;
  }
}

module.exports = Game;