var app = require('express')();
var http = require('http').Server(app);

const hostname = '127.0.0.1';
const port = 3000;

app.set('port', (process.env.PORT || port));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(app.get('port'), function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});