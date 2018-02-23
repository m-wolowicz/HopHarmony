// Our Bunnies controller
// =====================
// This file uses Sequelize to manage data manipulation for all apropos http requests.
// NOTE: This is the same file from last ORM burger homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();

// edit bunnies model to match sequelize
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
	// send us to the next get function instead.
	res.redirect("/index");
  });
  
  // get route, edited to match sequelize
  router.get("/index", function(req, res) {
			return res.render("index");
  });

   // Results page
   router.get("/results", function(req, res) {
	return res.render("results");
});


module.exports = router;
