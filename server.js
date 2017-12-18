const express = require ('express');
const bodyParser = require ('body-parser')
const app = express();
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function(req, res) {
  // res.sendFile('/Users/yanfen/testapp' + '/login.html')
  res.sendFile(path.join(__dirname, 'login.html'));
})

app.post('/quotes',(req,res) => {
  console.log(req.body)
})
