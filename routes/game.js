const express = require('express');
const router = express.Router();

// start a game of War
router.put('/', (req, res) => {
  res.send('Game start route is working.');
});

// Get the status of a game of war
router.get('/:id', (req, res) => {
  res.send('Game status route is working.')
});

// Play a round of an existing game
router.post('/:id/play', (req, res) => {
  res.send('Play route is working.');
});

module.exports = router;