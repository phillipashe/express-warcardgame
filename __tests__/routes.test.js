const request = require('supertest');
const express = require('express');
const router = require('../routes/game');

const app = new express();
app.use('/', router);


describe('Router', function () {

  let gameId = "";

  test('responds to /game', async () => {
    const res = await request(app).put('/');
    expect(res.statusCode).toBe(201);
    expect(JSON.parse(res.text)).toHaveProperty('id');
    const result = JSON.parse(res.text);
    gameId = result.id;
  });

  test('retrieves game from /game when ID exists', async () => {
    const res = await request(app).get(`/${gameId}`);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toHaveProperty('playerOne');
    expect(JSON.parse(res.text)).toHaveProperty('playerTwo');
  });


  test('returns 404 from /game when ID does not exist', async () => {
    const res = await request(app).get('/not-a-real-id');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Not found.');
  });

  test('should return a round when /game/:id/play is called with valid id', async () => {
    const res = await request(app).post(`/${gameId}/play`);
    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.text);
    expect(body).toHaveProperty('winner');
    expect(body).toHaveProperty('playerOne');
    expect(body).toHaveProperty('playerTwo');
    expect(body.playerOne).toHaveProperty('cards');
    expect(body.playerOne).toHaveProperty('deck');
    expect(body.playerTwo).toHaveProperty('cards');
    expect(body.playerTwo).toHaveProperty('deck');
  });

  test('should return 404 when trying to play game that doesn\'t exist', async () => {
    const res = await request(app).post('/not-a-real-id/play');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Not found.');
  });

});