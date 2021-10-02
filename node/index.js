const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql')
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
}
const connection = mysql.createConnection(config)
const sqlCreateDatabase = `CREATE DATABASE IF NOT EXISTS fullcycle;`
const sqlUse = `use fullcycle;`
const sqlCreate = `CREATE TABLE IF NOT EXISTS people(name VARCHAR(255) NOT NULL)ENGINE=INNODB;`
const sqlInsertNewPeople = `INSERT INTO people(name) values('Lucas')`
const sqlSelectPeople = `select name from people`;

connection.query(sqlCreateDatabase)
connection.query(sqlUse)
connection.query(sqlCreate)
connection.query(sqlInsertNewPeople)
connection.query(sqlSelectPeople, (err, result, fields) => {
  if (err) {
    throw err;
  }
  resultPeople = result.map(row => '<li>' + row.name + '</li>')
});
connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>' + '<h2>Name:</h2><ul>' + resultPeople + '</ul>')
})


app.listen(port, () => {
  console.log('API na porta' + port);
})