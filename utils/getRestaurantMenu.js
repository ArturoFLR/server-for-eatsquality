const users = require("../data/users");

function getRestaurantMenu(userEmail) {
	let menu = null;

	users.map( (user) => {
		if (user.userRoles === "cr" || user.userRoles === "crd") {
			if (user.email === userEmail) {
				menu = user.restaurant.menu;
			}
		}
	});

	return menu;
}

module.exports = getRestaurantMenu;