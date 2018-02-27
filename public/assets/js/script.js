//This javascript file is loaded on all the pages from main.handlebars

// ===============================================
// THIS JS CODE IS FOR THE HOME PAGE SUBMIT BUTTON
// ===============================================

	//This waits until the doc is loaded
	$(document).ready(function() {	

		//Logging for Debugging and Testing
		console.log("The document " + document.location.pathname + " is loaded\n");

		// //This listens for when the FEED THE BUNNY button is clicked
		$(".bunnyForm").on("submit", function(event) {

			//This prevents the page from reloading
				// event.preventDefault();

			
			// =================================================
			// USER INPUT DATA IS STORED HERE IN THESE VARIABLES:
			// =================================================
				//Saving all the form data in a variable called data
				var data = $(".bunnyForm :input").serializeArray();

				//Each individual item:
				//---------------------
				var newBunnyName = data[0].value;
				var newBunnyLocation = data[1].value;
					//We need to edit this one so you only get the 'City'
				var newBunnyAge = data[2].value;
				var newBunnyGender = data[3].value;
				var newBunnyPrimLang = data[4].value;
				var newBunnySecLang = data[5].value;
				var newBunnyFun = data[6].value;

				// The whole new person as an object:
				var newBunnyFriend = {	
					bunnyName: newBunnyName.toString(),
					destination: newBunnyLocation.toString(),
					age: newBunnyAge.toString(),
					gender: newBunnyGender.toString(),
					primaryLanguage: newBunnyPrimLang.toString(),
					secondaryLanguage: newBunnySecLang.toString(),
					activities: newBunnyFun.toString(),
				};
					//Logging for Debugging and Testing
					console.log("\nYour new Bunny Friend -AS IS- from the user's input displayed as an object is: \n" + JSON.stringify(newBunnyFriend, null, " "));

		}); //End of submit function

	}); //End of document ready function.
