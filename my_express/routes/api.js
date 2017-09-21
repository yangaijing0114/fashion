var express = require('express');
var router = express.Router();
var shopM = require("./model/Shop");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api这是');
});
router.get('/getdata', function(req, res, next) {
	  shopM.find(function(err, result){
	  	if(err) {
	  		res.send("出错了");
	  		return;
	  	}

	  	res.send(JSON.stringify(result));
	  })
});
module.exports = router;