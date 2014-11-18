var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

module.exports = router;
