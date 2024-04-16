const users = require("../data/users");

function addNewMenu(newMenu, userEmail) {
	let isMenuUpdated = false;

	users.map( (user) => {
		if (user.userRoles === "cr" || user.userRoles === "crd") {
			
			if (user.email === userEmail) {
				user.restaurant.menu = newMenu;
				isMenuUpdated = true;
			}

		}
	});

	return isMenuUpdated;
}

module.exports = addNewMenu;