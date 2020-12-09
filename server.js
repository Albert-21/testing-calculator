const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/testing-calculator'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/testing-calculator/index.html'));
});

// default Heroku PORT
http.listen((process.env.PORT || 5000), function(){ console.log('listening on *:5000'); });