const Card = require('../classes/card.js');

describe('Card', function () {
  test('should have name Jack if value 11', () => {
    const card = new Card(11, 'Hearts');
    expect(card.name).toEqual('Jack');
  });

  test('should have name Queen if value 12', () => {
    const card = new Card(12, 'Hearts');
    expect(card.name).toEqual('Queen');
  });

  test('should have name King if value 13', () => {
    const card = new Card(13, 'Hearts');
    expect(card.name).toEqual('King');
  });

  test('should have name Ace if value 14', () => {
    const card = new Card(14, 'Hearts');
    expect(card.name).toEqual('Ace');
  });
});
