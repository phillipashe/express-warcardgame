const express = require('express');
const routes = require('./routes/game');
const setupDB = require('./services/db_setup');

setupDB();

const app = express();
app.use('/game', routes);

module.exports = app;