// Bunnies models

// The bunny has attributes of type DataTypes.String

module.exports = function(sequelize, DataTypes) {

	var Bunny = sequelize.define("Bunny", {
		bunnyName: DataTypes.STRING,
		bunnyPhoto: DataTypes.BLOB,
		age: DataTypes.STRING,
		gender: DataTypes.STRING,
		primaryLanguage: DataTypes.STRING,
		secondaryLanguage: DataTypes.STRING,
		activities: DataTypes.STRING,
		destination: DataTypes.STRING,
	});

	console.log("From /models/bunnies.js ")
	return Bunny;
	
};