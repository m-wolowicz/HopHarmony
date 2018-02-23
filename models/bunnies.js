// Bunnies models

// The bunny has attributes of type DataTypes.String

module.exports = function(sequelize, DataTypes) {

	var Bunny = sequelize.define("Bunny", {
		name: DataTypes.STRING,
		age: DataTypes.STRING,
		gender: DataTypes.STRING,
		education: DataTypes.STRING,
		primaryLanguage: DataTypes.STRING,
		secondaryLanguage: DataTypes.STRING,
		fun: DataTypes.STRING,
		destination: DataTypes.STRING,
		bunnyPhoto: DataTypes.STRING
	});

	console.log("From /models/bunnies.js ")
	return Bunny;
	
};