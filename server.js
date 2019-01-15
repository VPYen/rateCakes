var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/rate-cakes/public'));
mongoose.connect('mongodb://localhost/Cakes', {useNewUrlParser: true });

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

require('./server/config/routes.js')(app)

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
