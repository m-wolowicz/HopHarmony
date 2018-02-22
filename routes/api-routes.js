var bunnies = require("./data/match.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(bunnies);
    });
}