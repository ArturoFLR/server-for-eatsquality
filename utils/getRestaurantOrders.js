const users = require("../data/users");

function getRestaurantOrders(userEmail) {
	let response = [];

	users.map( (user) => {
		if (user.email === userEmail) {
			if (user.restaurant) {
				response = user.restaurant.orders;
			}
		}
	});

	return response;
}

module.exports = getRestaurantOrders;