const router = require('express').Router();
const tweetBank = require('../tweetBank');
const fs = require('fs');

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

router.get('/users/:name', function(req, res, next){
  const name = req.params.name;
  let userTweets = tweetBank.find( {name: name} );
  res.render('index', {tweets: userTweets});
});

router.get('/tweets/:id', function(req, res, next){
  const id = +req.params.id;
  console.log(id);
  let idTweets = tweetBank.find( {id: id} );
  res.render('index', {tweets: idTweets});
});

router.get('/', function(req, res){
  let tweets = tweetBank.list();
  res.render('index', {showForm: true, tweets: tweets});
});

module.exports = router;
