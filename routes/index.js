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


router.get('/', function(req, res){
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
});

module.exports = router;
