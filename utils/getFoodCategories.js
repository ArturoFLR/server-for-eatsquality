const users = require("../data/users");

function getFoodCategories() {
	const categoriesArray = ["Para Picar", "Ensaladas", "Carnes", "Pizzas", "Hamburguesas", "Pastas", "Bocadillos", "Sándwiches",
		"Platos principales", "Guisos", "Postres", "Bebidas"];
	const results = [];

	categoriesArray.map( (category) => {
		const categoryToAdd = {
			name : category,
			products: []
		};
		
		users.map( (user) => {
			if (user.restaurant) {
				const restaurantResults = getFoodCategory(user.restaurant.id, category);
				if (restaurantResults.length > 0) {
					categoryToAdd.products.push(restaurantResults);
				}
			}
		});

		results.push(categoryToAdd);
	});

	return results;
}


function getFoodCategory(restaurantId, categoryToSearch) {
	const results = [];
	users.map( (user) => {
		if (user.restaurant) {
			if (user.restaurant.id === restaurantId) {
				user.restaurant.menu.categories.map( (category) => {

					if (category.name === categoryToSearch ) {
						category.products.map( (product) => {

							const newProduct = {
								idProduct: product.id,
								idRestaurant: user.restaurant.id,
								nameRestaurant: user.restaurant.restaurantName,
								nameProduct: product.name,
								imgRestaurant: user.restaurant.logo,
								price: product.price,
							};

							results.push(newProduct);
						});
					}
				});
			}
		}
	});

	return results;
}

module.exports = getFoodCategories;