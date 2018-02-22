var bunnies = require("../data/match.js");

module.exports = function (app) {

    app.get("/api/bunnies", function(req, res) {
        res.json(bunnies);
    });
}