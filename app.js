const express = require('express');
const app = express();
const PORT = 3000;

app.use('/:page', function(req, res, next){
  if (req.params.page)
    res.send("that page doesn't exist yet!");
});
app.get('/', function(req, res){
  res.send('Welcome!');
});

app.listen(PORT, function(){
  console.log('server listening');
});
