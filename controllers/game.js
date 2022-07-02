const games  = require('../data/games');
const Game = require('../models/game');

const startGame = (req, res) => {
  const game = new Game();
  games.push(game);
  console.log(`Game started with ID: ${game.id}`);
  res.status(201).send({id: game.id});
}

const getGame = () => {
  console.log('i got the game');
}

const playGame = () => {
  console.log('i played the game');
}

module.exports = { startGame, getGame, playGame };