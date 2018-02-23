// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 9000;
// var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
// Sets up the Express app to handle data parsing
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Requiring our routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var routes = require("./routes/html-routes.js");

app.use(routes);
// Server Routing Map 
// apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
// htmlRoutes(app); // HTML route 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
// });


