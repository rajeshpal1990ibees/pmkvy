express = require('express');// make it global to access in all file
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/database');
var db;
mongoose.connect(config.database).then(() => {
   db = mongoose.connection.db;
   //console.log(db);
});

db = mongoose.connection;
console.log(db);

var users = require('./routes/users');
var app = express();
var server = require('http').createServer(app);
app.set('port', 3001);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use('/api/users', users);

app.get('/', function(req, res) {

  
  res.json({ message: 'welcome to PMKVY APi' });
});

server.listen(app.get('port'));


