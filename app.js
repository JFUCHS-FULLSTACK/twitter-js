const express = require('express');
const app = express();
const PORT = 3000;
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const socketio = require('socket.io');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

const server = app.listen(PORT);
const io = socketio.listen(server);

app.use('/', volleyball);

app.use(express.static('public'));
app.use('/', routes(io));

// app.use('/:page', function(req, res, next){
//   if (req.params.page === 'special'){
//     res.send("You've reached the special area.");
//   } else {
//     res.send("That page doesn't exist yet!")
//   }
// });
//
// app.get('/', function(req, res){
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render('index', { title: 'An Example', people: people });
// });
