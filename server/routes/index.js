var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submit', function(req, res, next) {
  //on submit route
  // var email = req.body.email;
  // console.log(email);
  // res.send('You submitted email address: ' + email);


  //redirect to success route on success
  res.redirect('/success');

});

//success route, print success on browswer for user
router.get('/success', function(req, res) {
  res.send('You submitted the form successfully.');
});

module.exports = router;
