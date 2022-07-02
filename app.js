const express = require('express');
const routes = require('./routes/game');

const app = express();
app.use('/game', routes);

module.exports = app;