const express = require('express');
const app = express();
const PORT = 3000;
const volleyball = require('volleyball');

app.use('/', volleyball);

// app.use('/', function(req, res, next){
//   console.log(req.method, req.url, res.statusCode);
//   next();
// });

app.use('/:page', function(req, res, next){
  if (req.params.page === 'special')
    res.send("You've reached the special area.");
  else {
    res.send("That page doesn't exist yet!")
  }
});

app.get('/', function(req, res){
  res.send('Welcome!');
});

app.listen(PORT, function(){
  console.log('server listening');
});
