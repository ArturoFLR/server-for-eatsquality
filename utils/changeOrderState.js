const users = require("../data/users");

function changeOrderState (newOrderState, userEmail) {
	const {orderId, state} = newOrderState;

	let isRestaurant = checkIsRestaurant(userEmail);																//Comprueba que tenga el rol de restaurante
	let isOwner = checkIsOwner(userEmail, orderId);																		//Comprueba que el restaurante que intenta cambiar el estado es el propietario del pedido

	if (isRestaurant && isOwner) {
		users.map( (user) => {
			user.orders.map( (order) => {
				if (order.id === orderId) {
					order.state = state;
				}
			});


			if (user.restaurant) {
				user.restaurant.orders.map( (order) => {
					if (order.id === orderId) {
						order.state === state;
					}
				});
			}
		});
	}

	if (!isRestaurant || !isOwner) {
		return false;
	} else {
		return true;
	}
}

function checkIsRestaurant (userEmail) {
	let results = false;

	users.map( (user) => {
		if (user.email === userEmail) {
			if (user.userRoles === "cr" || user.userRoles === "crd") {
				results = true;
			}
		}
	});

	return results;
}

function checkIsOwner (userEmail, orderId) {
	let results = false;

	users.map( (user) => {
		if (user.email === userEmail) {
			if (user.restaurant) {
				user.restaurant.orders.map( (order) => {
					if (order.id === orderId) {
						results = true;
					}
				});
			}
		}
	});

	return results;
}

module.exports = changeOrderState;