// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");


// Bring in the sequelize models (database)
var db = require("./models");


// Creating express app and configuring middleware needed for authentication
var app = express();

	/* We're setting up our express server to handle two types of requests
	URL Encoded: this is the standard request created when you fill out a form 
	parameters are in the URL sample Name=John+Smith&Age=23
	extended: he "extended" syntax allows for rich 
	objects and arrays to be encoded into the urlencoded format, 
	https://stackoverflow.com/questions/6323338/jquery-ajax-posting-json-to-webservice
	JSONL { Name : 'John Smith', Age: 23}
	*/

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));
	// parse application/json
	app.use(bodyParser.json());


// Serve static content for the app from the "public" directory in the application directory
// THIS SHOULD BE BEFORE THE APP.ENGINE
app.use(express.static("public"));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Requiring our routes and give the server access to them.
var routes = require("./controllers/bunnies_controller.js");
app.use("/", routes);
app.use("/create", routes);


// listen on port 8080
var PORT = process.env.PORT || 8080;

	// Syncing our database and logging a message to the user upon success
	db.sequelize.sync().then(function() {
		app.listen(PORT, function() {
			console.log("\n==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
		});
	});


console.log("\nFrom server.js file: module.exports=\n" + module.exports);
