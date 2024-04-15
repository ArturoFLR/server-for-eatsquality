const users = require("../data/users");

function registerRestaurant (newRestaurantData, restLogo, userEmail) {
	const userHasRestaurant = checkUserAlreadyHasRestaurant(userEmail);
	let newUserRoles = "";

	if (!userHasRestaurant) {
		const restaurantData = {
			...newRestaurantData,
			logo: `http://localhost:3000/images/rest_logos/${restLogo}`,
			orders: [],
			menu: []
		};
	
		users.map( (user) => {
			if (user.email === userEmail) {
				newUserRoles = user.userRoles === "c" ? "cr" : "crd";

				user.userRoles = newUserRoles;
				user.restaurant = restaurantData;
			}
		});

		return newUserRoles;
	} else {
		throw new Error("The user already has a restaurant");
	}

}

function checkUserAlreadyHasRestaurant (email) {
	let hasRestaurant = false;
	
	users.map( (element) => {
		if (element.email === email) {
			if (element.restaurant) {
				hasRestaurant = true;
			}
		}
	});
	return hasRestaurant;
}


module.exports = registerRestaurant;