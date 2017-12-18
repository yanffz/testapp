var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'nodetest3',
  port:'3303'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

  connection.query('CREATE TABLE COMMITTEE(ID int NOT NULL AUTO_INCREMENT, NAME varchar(50), DESCRIPTION varchar(50), PRIMARY KEY(ID))', function(err, result) {
    if (err) throw err
    // connection.query('INSERT INTO USER (F_NAME, M_NAME, L_NAME) VALUES ('Larry', 'M', 'Bruce')', function(err, result) {
    //   if (err) throw err
      // connection.query('SELECT * FROM USER', function(err, results) {
      //   if (err) throw err
      //   console.log(results[0].ID)
      //   console.log(results[0].F_NAME)
      //   console.log(results[0].M_NAME)
      //   console.log(results[0].L_NAME)
      // })
    //})
  })
})
