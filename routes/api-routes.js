var bunnies = require("../data/match.js");

module.exports = function (app) {

    app.get("/api/bunnies", function(req, res) {
        res.json(bunnies);
    });

    app.post("/api/bunnies", function (req, res) {
       
        var match = {
            name: "",
            age: "",
            matchDifference: 1000,  
        };

        console.log(req.body);

        // Here we take the the user entry POST and parse it.
        var userData = req.body;
         



    });

}