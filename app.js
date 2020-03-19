
var express = require('express');
var path = require('path');


var app = express();

app.use(express.static('frontEnd/personalPageFE/dist'));

app.get('/api', (req, res) => res.json({ application: 'Reibo collection'}));

app.get('/', (req,res) => {
  res.sendFile(path.resolve('frontEnd/personalPageFE/dist/index.html'));
});

app.get('*', (req, res) => { 
  res.sendFile(path.resolve('dist/index.html')); 
});

app.listen(8080,() => console.log('App Initialized'))



module.exports = app;
