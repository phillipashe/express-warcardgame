const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// initialize or connect to sqlite db
const createDB = () => {
  const db_name = path.join(__dirname, "../data", "game.db");
  const db = new sqlite3.Database(db_name, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful connection to the database 'game.db'");
  });
}

const clearTables = () => {

}

const setupDB = () => {
  createDB();
}

module.exports = setupDB;