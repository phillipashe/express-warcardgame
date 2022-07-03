const games = require('../data/games');
const Game = require('../classes/game');

const startGame = (req, res) => {
  const game = new Game();
  games.push(game);
  console.log(`Game started with ID: ${game.id}`);
  res.status(201).send({ id: game.id });
}

const getGame = (req, res) => {
  const game = games.find(g => g.id === req.params.id);
  if (game) {
    res.status(200).send({ playerOne: game.firstPlayerCards.length, playerTwo: game.secondPlayerCards.length });
  } else {
    res.status(404).send('Not found.')
  }
}

const playGame = (req, res) => {
  const game = games.find(g => g.id === req.params.id);
  if (game) {
    const result = game.battle();
    res.status(200).send(result);
  } else {
    res.status(404).send('Not found.');
  }
}

module.exports = { startGame, getGame, playGame };