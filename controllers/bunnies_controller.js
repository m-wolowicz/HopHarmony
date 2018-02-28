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

		//Trimming the Location Information:
		var locationRaw = req.body.destination;
		console.log("locationRaw= " + locationRaw);

		//splitting raw city information into an array of strings
		var locationArr = [];
		locationArr = locationRaw.split(',');
		console.log("locationArr= " + locationArr);

		var length = locationArr.length;
		console.log("length= " + length);

		//Generating new Location if Location is more than 3 strings
		switch(length) {

			case length = 1:
			console.log("The location array is: " + locationArr);
				var country1 = locationArr[0];
					console.log("The number of items in the locationArr.length is: " + locationArr.length);
					console.log("The only item entered for location was: " + country1);
				var editedLocation = country1;
				break;

			case length = 2:
			console.log("The location array is: " + locationArr);
				var country2 = locationArr[1];
				var city2 = locationArr[0];
					console.log("The number of items in the locationArr.length is: " + locationArr.length);
					console.log("The items entered for location were: " + city2 + " & " + country2);
					console.log(typeof country2);
					var editedLocation = city2 + ", " + country2;
				break;

			case length = 3:
			var countryIndex3 = locationArr.length -1;
			var cityIndex3 = locationArr.length - 3;
			var country3 = locationArr[countryIndex3];
			var city3 = locationArr[cityIndex3];
				console.log("The number of items in the locationArr.length is: " + locationArr.length);
				console.log("The items entered for location were: " + city3 + " & " + country3);
				var editedLocation = city3 + ", " + country3;
			break;

			case length = 4:
				console.log("The location array of more than 3 is: " + locationArr);

				var countryIndex4 = locationArr.length -1;
				var cityIndex4 = locationArr.length - 3;
				var country4 = locationArr[countryIndex4]
				var city4 = locationArr[cityIndex4];
					console.log("The number of items in the locationArr.length is: " + locationArr.length);
					console.log("The items entered for location were: " + city4 + " & " + country4);
				var editedLocation = city4 + ", " + country4;
				break;

			default:
			console.log("Enter a valid location");
		}
		
		//Getting the image uploaded:
		var uploadedPhotoName = req.file.filename;
		console.log("The new file name uploaded is: " + uploadedPhotoName);

		//Creating a New Bunny In the Database:
		db.Bunny.create({
			bunnyName: req.body.bunnyName,
			destination: editedLocation,
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
