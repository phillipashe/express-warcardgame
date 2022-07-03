const Game = require('../classes/game.js');

describe('Game', function () {

  test('initializes with uuid', () => {
    const game = new Game();
    expect(game.id).toBeTruthy();
  });

  test('battle() should return a result', () => {
    const game = new Game();
    const res = game.battle();
    // console.log(JSON.stringify(res, null, 4))
    expect(res.winner).toBeTruthy();
  });

  test('second player should win if they have a higher card', () => {
    const game = new Game();
    game.secondPlayerCards[0] = { value: 14, name: 'Ace', suit: 'Hearts' };
    game.firstPlayerCards[0] = { value: 2, name: "2", suit: "Clubs" };
    const res = game.battle();
    expect(res.winner).toEqual('Player Two');
  });

  test('first player should win if they have a higher card', () => {
    const game = new Game();
    game.secondPlayerCards[0] = { value: 2, name: "2", suit: "Clubs" };
    game.firstPlayerCards[0] = { value: 14, name: 'Ace', suit: 'Hearts' };
    const res = game.battle();
    expect(res.winner).toEqual('Player One');
  });

  test('in the event of a tie, each player should draw an extra card', () => {
    const game = new Game();
    game.secondPlayerCards[0] = { value: 2, name: "2", suit: "Clubs" };
    game.secondPlayerCards[2] = { value: 4, name: "4", suit: "Spades" };
    game.firstPlayerCards[0] = { value: 2, name: "2", suit: "Hearts" };
    game.firstPlayerCards[2] = { value: 7, name: "7", suit: "Spades" };
    const res = game.battle();
    expect(res.playerOne.cards.length).toEqual(3);
    expect(res.playerTwo.cards.length).toEqual(3);
  });


  test('if player one runs out of cards, they should lose', () => {
    const game = new Game();
    game.secondPlayerCards = [];
    const res = game.battle();
    expect(res.winner).toEqual('Player One');
  });

  test('if player two runs out of cards, they should lose', () => {
    const game = new Game();
    game.firstPlayerCards = [];
    const res = game.battle();
    expect(res.winner).toEqual('Player Two');
  });

  // test('both players cards should equal 52', () => {
  //   const game = new Game();
  //   const res = game.battle;
  //   const total = res.playerOne.cards.length + res.playerTwo.cards.length;
  //   expect(total).toEqual(52);
  // });
});