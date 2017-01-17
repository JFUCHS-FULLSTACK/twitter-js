const router = require('express').Router();
const tweetBank = require('../tweetBank');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });

module.exports = function(io){
  // router.get('/:name/:nom', function(req, res, next){
  //
  //   var options = {
  //     root: 'public/',
  //     dotfiles: 'deny',
  //     headers: {
  //         'x-timestamp': Date.now(),
  //         'x-sent': true
  //     }
  //   };
  //
  //   let fileName = req.params.name + '/' + req.params.nom;
  //
  //   res.sendFile(fileName, options, function(err){
  //     if (err){
  //       console.log(err);
  //       res.status(err.status).end();
  //     } else {
  //       console.log('Sent:', fileName);
  //     }
  //   });
  // });

  router.get('/', function(req, res){
    let tweets = tweetBank.list();
    res.render('index', {showForm: true, name: 'Enter name', tweets: tweets});
  });

  router.get('/users/:name', function(req, res, next){
    const name = req.params.name;
    let userTweets = tweetBank.find( {name: name} );
    res.render('index', {showForm: true, name: name, tweets: userTweets});
  });

  router.get('/tweets/:id', function(req, res, next){
    const id = +req.params.id;
    console.log(id);
    let idTweets = tweetBank.find( {id: id} );
    res.render('index', {showForm: false, tweets: idTweets});
  });

  router.post('/tweets', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400);
    let name = req.body.name;
    let text = req.body.text;
    let tweet = tweetBank.add(name, text);
    io.sockets.emit('newTweet', tweet);
    res.redirect('/');
  })

   return router;
}
