var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
// router.get('/', function(req, res) {
// 	res.render('index');
// });

/* GET RESULTS PAGE */
// router.get('/results', function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/results.html"));
// });

// module.exports = router;
module.exports = function (app) {
	app.get('/results', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/results.html"));
	});

	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

}
