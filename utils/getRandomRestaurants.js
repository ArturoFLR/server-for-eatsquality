const users = require("../data/users");
const generateRandomNumber = require("./generateRandomNumber");

function getRandomRestaurants(amount) {								//Amount es la cantidad de restaurantes a recuperar
	let restaurants = [];
	let selectedRestaurants = [];
	let results = [];

	users.map( (user) => {
		if (user.restaurant.restaurantName) {
			restaurants.push(user);
		}
	});
	
	for (let index = 1; index <= amount; index++) {
		const indexToRetrieve = generateRandomNumber(0, restaurants.length - 1);
		selectedRestaurants.push(restaurants[indexToRetrieve]);
		restaurants.splice(indexToRetrieve, 1);
	}

	selectedRestaurants.map( (restaurant) => {
		const data = {
			id: restaurant.id,
			name: restaurant.restaurant.restaurantName,
			logo: restaurant.restaurant.logo,
			menu: restaurant.restaurant.menu
		};

		results.push(data);
	});

	return results;
}

module.exports = getRandomRestaurants;