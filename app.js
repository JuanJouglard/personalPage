
var express = require('express');
var path = require('path');


var app = express();

app.use(express.static('frontEnd/dist'));

app.get('/api', (req, res) => res.json({ application: 'Reibo collection'}));

app.get('/', (req,res) => {
  res.sendFile(path.resolve('frontEnd/dist/index.html'));
});


app.listen(8080,() => console.log('App Initialized'))



module.exports = app;
