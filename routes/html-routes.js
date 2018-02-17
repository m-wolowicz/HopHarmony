var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    console.log("Alex is right");
    res.render('index');

});

module.exports = router;

console.log("Melissa was right");