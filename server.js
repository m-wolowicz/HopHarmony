// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");


// Bring in the sequelize models (database)
var db = require("./models");


// Creating express app and configuring middleware needed for authentication
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
// Sets up the Express app to handle data parsing
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Serve static content for the app from the "public" directory in the application directory
// THIS SHOULD BE BEFORE THE APP.ENGINE
app.use(express.static("public"));

app.use(routes);
// Server Routing Map 
// apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
// htmlRoutes(app); // HTML route 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// listen on port 8080
var PORT = process.env.PORT || 8080;

	// Syncing our database and logging a message to the user upon success
	db.sequelize.sync().then(function() {
		app.listen(PORT, function() {
			console.log("\n==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
		});
	});


console.log("\nFrom server.js file: module.exports=\n" + module.exports);
