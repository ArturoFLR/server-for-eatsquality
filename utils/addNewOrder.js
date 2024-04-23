const users = require("../data/users");
const generateId = require("./generateId");

function addNewOrder (newOrders, clientEmail) {
	addOrderToClient(newOrders, clientEmail);
	addOrderToRestaurant(newOrders, clientEmail);

	return true;
}

//Devuelve un array con los diferentes restaurantes que hay en el pedido, metidos dentro de un objeto que servirá como contenedor de los pedidos. Format indica si hay que generarlos con el formato que necesita un cliente o el que necesita un restaurante.
function getRestaurants (newOrders, format, user) {
	const restaurants = [];
	const date = new Date();
	const simpleDate = date.toLocaleString("es-AR");

	newOrders.map( (order) => {
		const isRestaurantAdded = restaurants.findIndex( (element) => {
			return element.restaurantName === order.nameRestaurant;
		});

		if (isRestaurantAdded < 0 && format === "c") {
			const newRestaurant = {
				id: generateId(),
				restaurantName: order.nameRestaurant,
				state: "En preparación",
				date: simpleDate,
				products: []
			};

			restaurants.push(newRestaurant);
		} else if (isRestaurantAdded < 0 && format === "r"){
			const newRestaurant = {
				id: generateId(),
				clientName: user.name + " " + user.lastName,
				clientPhone: user.phone,
				clientAddress: user.address,
				clientZip: user.zip,
				state: "En preparación",
				date: simpleDate,
				products: []
			};

			restaurants.push(newRestaurant);
		}
	});

	return restaurants;
}


//Añade al cliente un nuevo pedido por cada restaurante
function addOrderToClient (newOrders, clientEmail) {
	const restaurants = getRestaurants(newOrders, "c"); 

	restaurants.map( (restaurant) => {
		newOrders.map( (order) => {
			if (restaurant.restaurantName === order.nameRestaurant) {
				const newProduct = {
					productId: order.idProduct,
					name: order.nameProduct,
					price: order.price,
					quantity: order.quantity,
				};

				restaurant.products.push(newProduct);
			}
		});
	});

	users.map( (user) => {
		if (user.email === clientEmail) {
			for (let index = 0; index < restaurants.length; index++) {
				user.orders.push(restaurants[index]); 
			}
		}
	});
}


//Añade a cada restaurante su pedido
function addOrderToRestaurant (newOrders, clientEmail) {
	let user = {};
	users.map( (element) => {
		if (element.email === clientEmail) {
			user = element;
		}
	});

	const restaurants = getRestaurants(newOrders, "r", user);

	restaurants.map( (restaurant) => {
		newOrders.map( (order) => {
			if (restaurant.restaurantName === order.nameRestaurant) {
				const newProduct = {
					productId: order.idProduct,
					name: order.nameProduct,
					price: order.price,
					quantity: order.quantity,
				};

				restaurant.products.push(newProduct);
			}
		});
	});

	restaurants.map( (restaurant) => {
		users.map( (user) => {
			if (user.restaurant) {
				if (user.restaurant.restaurantName === restaurant.restaurantName) {
					user.restaurant.orders.push(restaurant);
				}
			}
		});
	});
}

module.exports = addNewOrder;