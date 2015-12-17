var express = require('express');
// var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  console.log('/');
  res.sendFile('public/index.html');
});

app.listen(app.get('port'), function(){
  console.log("Slangin on", app.get('port'));
});
