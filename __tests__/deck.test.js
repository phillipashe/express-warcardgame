const Deck = require("../classes/deck");

describe('Deck', () => {
  test('should give two sets of 26 cards', () => {
    const deck = new Deck();
    const [firstDeck, secondDeck] = deck.dealCards();
    expect(firstDeck.length).toEqual(26);
    expect(secondDeck.length).toEqual(26);
  });

  test('should have four of each value', () => {
    const deck = new Deck();
    const [firstDeck, secondDeck] = deck.dealCards();
    const fullDeck = [...firstDeck, ...secondDeck]; 
    for (let i = 2; i < 15; i++) {
      const type = fullDeck.filter(c => c.value === i);
      expect(type.length).toEqual(4);
    }
  })
})