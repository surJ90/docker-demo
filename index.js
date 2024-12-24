var generateName = require('sillyname');
var sillyName = generateName();
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`Hi, ${sillyName}`);
});

app.listen(3000, function() {
    console.log("Listening on port 3000.");
});