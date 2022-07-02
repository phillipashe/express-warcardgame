class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.name = this.assignName(value);
  }

  // converts value of a card in a battle to it's name
  // ex: A Jack has a value of 11; assignName(11) === 'Jack'
  // ex: 10 card; assignName(10) === '10'
  assignName(value) {
    if (value === 11) return 'Jack';
    if (value === 12) return 'Queen';
    if (value === 13) return 'King';
    if (value === 14) return 'Ace';
    return `${value}`;
  }
}

module.exports = Card;