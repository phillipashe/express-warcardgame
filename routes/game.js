const express = require('express');
const router = express.Router();
const { startGame, getGame, playGame } = require('../controllers/game');

// start a game of War
// router.put('/', (req, res) => {
//   startGame();
//   res.send('Game start route is working.');
// });
router.put('/', startGame);

// Get the status of a game of war
router.get('/:id', (req, res) => {
  getGame();
  res.send('Game status route is working.')
});

// Play a round of an existing game
router.post('/:id/play', (req, res) => {
  playGame();
  res.send('Play route is working.');
});

module.exports = router;