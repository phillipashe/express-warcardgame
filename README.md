# War Server

## Overview
`node-warcard-game` is a simple express backend developed to simulate two players playing through a game of War.  This was written with Node v16.15.1, using Express v4.18.1, though it will likely work with other versions.  Tests are written using Jest.

## Notes
`node-warcardgame-codechallenge` isn't perfect.  This app represents a few hours of work over the weekend, and should not be considered indicative of the full potential of this project.

## Pre-requisites
- npm 
- Node.js

## Recommended
- Postman (for testing endpoints)
- nvm (in case of a Node version related issue)

## Install
**Note that this app was delivered as a zip file.  It should work "out of the box".**
- in the root of the repo, run `npm install`
- if you are using Visual Studio Code and would like to use the debugger with `nodemon`, install it globally with `npm install -g nodemon`.

## How To Run:
### The server
In the root of the repo, execute `npm run server`

### The server while watching for changes
In the root of the repo, execute `npm run watch`

### The unit tests
In the root of the repo, execute `npm test`

## Endpoints

- `PUT /game` -> `{"id": <string>}`

  Starts a new game of war and returns the game's id.

- `GET /game/:id` -> `{"playerOne": <number>, "playerTwo": <number>}`

  Gets the status of the identified game, returning the number of cards each
  player has in their deck.

- `POST /game/:id/play` -> `{"winner": <string>, "playerOne": {"deck": <number>, "cards": <array>}, "playerTwo": ...}`

  Runs one battle, including resolving any ties. The response should identify
  the winner, and show the cards each player played as well as their new deck
  sizes.

## Clarifying the rules used
The exact rules of war are debated.  The rules I followed were from [this link](https://www.pagat.com/war/war.html).  For the case where a player runs out of cards, I used case 1 (you lose!), and shuffled the discard pile to reduce the average number of turns required for a player to win.

## Known Issues
I have found that too many api calls in a very short time can cause the express server to hang.  For instance, running multiple of `validate.js` at once.