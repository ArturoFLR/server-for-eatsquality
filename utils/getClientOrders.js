const users = require("../data/users");

function getClientOrders(userEmail) {
	let response = [];

	users.map( (user) => {
		if (user.email === userEmail) {
			response = user.orders;
		}
	});

	return response;
}

module.exports = getClientOrders;