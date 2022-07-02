const express = require('express');
const router = express.Router();
const { startGame, getGame, playGame } = require('../controllers/game');

// start a game of war
router.put('/', startGame);

// Get the status of a game of war
router.get('/:id', getGame);

// Play a round of an existing game
router.post('/:id/play', (req, res) => {
  playGame();
  res.send('Play route is working.');
});

module.exports = router;