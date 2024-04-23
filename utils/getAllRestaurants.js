const users = require("../data/users");

function getAllRestaurants () {
	const results = [];

	users.map( (user) => {
		if (user.restaurant) {
			results.push(user.restaurant);
		}
	});

	return results;
}

module.exports = getAllRestaurants;