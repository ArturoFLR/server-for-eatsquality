const users = require("../data/users");
const generateId = require("./generateId");

function addNewOrder (newProducts, clientEmail) {
	let user = {};

	users.map( (element) => {
		if (element.email === clientEmail) {
			user = element;
		}
	});

	const ordersStructure = getOrdersStructure(newProducts, user);

	addOrderToClient(newProducts, clientEmail, ordersStructure.ordersForClient);
	addOrderToRestaurant(newProducts, ordersStructure.ordersForRestaurants);

	return true;
}

//Devuelve un objeto que contiene la estructura del pedido o pedidos para el cliente (a falta de meter los productos) y para el o los restaurantes (a falta de meter los productos)
function getOrdersStructure (newProducts, user) {
	const ordersForClient = [];
	const ordersForRestaurants = [];
	const date = new Date();
	const simpleDate = date.toLocaleString("es-AR");

	newProducts.map( (product) => {
		const orderId = generateId();
		const isRestaurantInOrdersForClient = ordersForClient.findIndex( (element) => {
			return element.restaurantName === product.nameRestaurant;
		});
		const isRestaurantInOrdersForRestaurants = ordersForRestaurants.findIndex( (element) => {
			return element.restaurantName === product.nameRestaurant;
		});

		if (isRestaurantInOrdersForClient < 0) {
			const newOrder = {
				id: orderId,
				restaurantName: product.nameRestaurant,
				state: "En preparación",
				date: simpleDate,
				products: []
			};

			ordersForClient.push(newOrder);
		}

		if (isRestaurantInOrdersForRestaurants < 0){
			const newOrder = {
				id: orderId,
				clientName: user.name + " " + user.lastName,
				clientPhone: user.phone,
				clientAddress: user.address,
				clientZip: user.zip,
				state: "En preparación",
				date: simpleDate,
				products: []
			};

			ordersForRestaurants.push(newOrder);
		}
	});

	return {
		ordersForClient: ordersForClient,
		ordersForRestaurants: ordersForRestaurants
	};
}


//Añade al cliente un nuevo pedido por cada pedido creado por getOrdersStructure para el cliente.
function addOrderToClient (newProducts, clientEmail, ordersStructure) {

	ordersStructure.map( (order) => {
		newProducts.map( (product) => {
			if (product.nameRestaurant === order.restaurantName) {
				const newProduct = {
					productId: product.idProduct,
					name: product.nameProduct,
					price: product.price,
					quantity: product.quantity,
				};

				order.products.push(newProduct);
			}
		});
	});

	users.map( (user) => {
		if (user.email === clientEmail) {
			for (let index = 0; index < ordersStructure.length; index++) {
				user.orders.push(ordersStructure[index]); 
			}
		}
	});
}


//Añade a cada restaurante su pedido creado por getOrdersStructure
function addOrderToRestaurant (newProducts, ordersStructure) {

	ordersStructure.map( (order) => {
		newProducts.map( (product) => {
			if (order.restaurantName === product.nameRestaurant) {
				const newProduct = {
					productId: product.idProduct,
					name: product.nameProduct,
					price: product.price,
					quantity: product.quantity,
				};

				order.products.push(newProduct);
			}
		});
	});

	ordersStructure.map( (order) => {
		users.map( (user) => {
			if (user.restaurant) {
				if (user.restaurant.restaurantName === order.restaurantName) {
					user.restaurant.orders.push(order);
				}
			}
		});
	});
}

module.exports = addNewOrder;