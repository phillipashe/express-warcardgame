const app = require('./app');

const server = app.listen(8080, () => {
  console.log(`War game server has started on port ${server.address().port}.`)
});