var express = require('express');
var router = express.Router();
var github = require('octonode');
var client = github.client();


var ghsearch = client.search();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gitfo-2.0' });
});

router.get('/result', function(req, res, next) {
  res.render('result');
});

router.post('/', function(req, res, next) {
	var userid = req.param('ghusername');
	client.get('/users/'+userid, {}, function (err, status, body, headers) {
      if(err)
      	throw err;
      console.log(body);
      res.render('result', { title: 'Gitfo-2.0',body: body });
    });
 
});

module.exports = router;
