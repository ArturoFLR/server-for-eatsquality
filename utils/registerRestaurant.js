const users = require("../data/users");

function registerRestaurant (newRestaurantData, restLogo, userEmail) {
	const restaurantData = {
		...newRestaurantData,
		logo: `http://localhost:3000/images/rest_logos/${restLogo}`,
		orders: [],
		menu: []
	};

	users.map( (user) => {
		if (user.email === userEmail) {
			user.restaurant = restaurantData;
		}
	});

}


module.exports = registerRestaurant;