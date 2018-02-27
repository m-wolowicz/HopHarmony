// Our Bunnies controller
// =====================
// This file uses Sequelize to manage data manipulation for all apropos http requests.
// NOTE: This is the same file from last ORM burger homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();


//REQUIRED FOR FILE UPLOADS
	var multer  = require('multer');
	var upload = multer({ dest: 'public/assets/img/bunnies/' });

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

// ==================================================
// POST Route (Here we are grabbing the inputs' from the form on index.handlebars)
// ==================================================
	router.post("/results/new", upload.single('bunnyPhoto'), function (req, res, next) {

		var uploadedPhotoName = req.file.filename;
		console.log("The new file name uploaded is: " + uploadedPhotoName);

		//Creating a New Bunny In the Database:
		db.Bunny.create({
			bunnyName: req.body.bunnyName,
			destination: req.body.destination,
			age: req.body.age,
			gender: req.body.gender,
			primaryLanguage: req.body.primaryLanguage, 
			secondaryLanguage: req.body.secondaryLanguage,
			activities: req.body.activities,
			bunnyPhoto: uploadedPhotoName
		}) // Passing the whole object/results
		.then(function (bunniesDb) {
			res.redirect("/results")
		});

	});// End of post
// ==================================================



// Results page
router.get("/results", function(req, res) {
	db.Bunny.findAll()
  .then(function (bunnies) {
    var bunniesObject = {
      bunniesAll: bunnies
    };
    return res.render("results", bunniesObject);

  });

});


module.exports = router;
