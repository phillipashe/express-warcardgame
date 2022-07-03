const express = require('express');
const router = express.Router();
const { startGame, getGame, playGame } = require('../controllers/game');

// start a game of war
router.put('/', startGame);

// Get the status of a game of war
router.get('/:id', getGame);

// play a round of war in a created game
router.post('/:id/play', playGame);

module.exports = router;