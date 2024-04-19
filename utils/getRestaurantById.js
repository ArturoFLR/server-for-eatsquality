const users = require("../data/users");

function getRestaurantById(id) {
	let restaurantExists = false;
	let restaurantData = {};
	
	users.map( (user) => {
		if (user.id === id) {
			restaurantExists = true;
			restaurantData.restaurantName = user.restaurant.restaurantName;
			restaurantData.logo = user.restaurant.logo;
			restaurantData.menu = user.restaurant.menu;
		}
	});

	if (restaurantExists) {
		return restaurantData;
	} else {
		return restaurantExists;
	}
}

module.exports = getRestaurantById;