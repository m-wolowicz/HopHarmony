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

   // Post route, edited to match sequelize (Here we are grabbing the inputs from the foorm on index.handlebars )
router.post("/results/new", function (req, res) {
  console.log('/results/new RUNNING')
  db.Bunny.create({
    bunnyName: req.body.bunnyName,
    age: req.body.age,
    gender: req.body.gender,
    primaryLanguage: req.body.primaryLanguage, 
    secondaryLanguage: req.body.secondaryLanguage,
    activities: req.body.activities,
    destination: req.body.destination,
  })
// Passing the whole object/results an
    .then(function (bunniesDb) {
      console.log("Bunnies Database is Running" + bunniesDb);
      res.redirect("/results")
    });
    
});// End of post

   // Display results on the Result page
// router.put("/bunnies/update/:id", function (req, res) {
//   // update one of the bunnies
//   db.Bunny.update({
//     // devoured: true
//   },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   ).then(function (bunniesDb) {
//     res.json("/results");
//   });

   // Results page
router.get("/results", function(req, res) {
  res.render("results");
});


module.exports = router;
