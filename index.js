var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

app.use(morgan('combined'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
  console.log('Listening on port 80');
});
