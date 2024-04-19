const users = [
	{
		id: 24959614,
		name: "Antonio",
		lastName: "Pérez Rivera",
		email: "antonioper47@gmail.com",
		address: "C/ Víctor Hugo 74 3C, El Barraco, Ávila, España",
		zip: "2879",
		phone: "0126849521",
		password: "Az$56P_K",
		userRoles: "cr",
		restaurant: {
			restaurantName: "Comida y Sonrisas",
			restaurantAddress: "C/ Umbría 16, Soto del Real, Madrid, España",
			restaurantZipCode: "2984",
			restaurantPhoneNumber: "9368524610",
			logo: "http://localhost:3000/images/rest_logos/98650047comida-y-sonrisas.webp",
			orders: [],
			menu: {
				categories: [
					{
						name: "Para Picar",
						products: [
							{
								description: "Con queso fundido, guacamole y cochinita pibil",
								name: "Nachos",
								price: 10
							},
							{
								description: "Deliciosas patatas fritas con 4 salsas",
								name: "Patatas",
								price: 7
							},
							{
								description: "Acompañados de salsa barbacoa",
								name: "Fingers de Pollo",
								price: 8
							}
						]
					},
					{
						name: "Ensaladas",
						products: [
							{
								description: "Con atún, aceitunas, huevo, espárragos, lechuga y tomate",
								name: "Ensalada de la Casa",
								price: 8
							},
							{
								description: "Con lechuga, pollo empanado, queso de cabra y picatostes",
								name: "Ensalada de Pollo",
								price: 10
							}
						]
					},
					{
						name: "Carnes",
						products: [
							{
								description: "Acompañado de patatas panaderas y pimientos asados",
								name: "Chuletón",
								price: 14
							},
							{
								description: "Un costillar de cerdo asado, macerado en salsa barbacoa",
								name: "Costillar Asado",
								price: 13
							}
						]
					},
					{
						name: "Postres",
						products: [
							{
								description: "Tarta casera. ¡Buenísima!",
								name: "Tarta de Queso",
								price: 6
							},
							{
								description: "Con helado de vainilla",
								name: "Brownie de Chocolate",
								price: 7
							}
						]
					},
					{
						name: "Bebidas",
						products: [
							{
								description: "Lata de 33 cl",
								name: "Coca-Cola",
								price: 2.5
							},
							{
								description: "Cerveza Belga Premium",
								name: "Cerveza Judas",
								price: 3.5
							},
							{
								description: "Cerveza Belga Premium",
								name: "Cerveza Duvel",
								price: 3.5
							}
						]
					}
				]
			}
		}
	},
	{
		id: 73392253,
		name: "Marcos",
		lastName: "López Carrión",
		email: "carrionMarcos@gmail.com",
		address: "C/ Umbría 16, Soto del Real, Madrid, España",
		zip: "5759",
		phone: "9584316790",
		password: "KMZ45alo$",
		userRoles: "cr",
		restaurant: {
			restaurantName: "Cacarola",
			restaurantAddress: "C/ San Juan 26, Manzanares, Madrid, España",
			restaurantZipCode: "8854",
			restaurantPhoneNumber: "1386459215",
			logo: "http://localhost:3000/images/rest_logos/64444844cacarola.png",
			orders: [],
			menu: {
				categories: [
					{
						name: "Pizzas",
						products: [
							{
								description: "Con quesos mozzarella, gorgonzola, fontina y parmesano",
								name: "Pizza Cuatro Quesos",
								price: 12
							},
							{
								description: "Con carne a la brasa, queso y tomate",
								name: "Pizza Barbacoa",
								price: 12
							},
							{
								description: "Con pollo asado, queso, tomate y pimientos",
								name: "Pizza Pollo",
								price: 12
							},
							{
								description: "Con tomate, mozzarella y pepperoni",
								name: "Pizza Pepperoni",
								price: 12
							}
						]
					},
					{
						name: "Ensaladas",
						products: [
							{
								description: "Con ventresca, pimientos rojos asados y ajo",
								name: "Ensalada de pimientos",
								price: 8
							},
							{
								description: "Con lechuga, maíz, aceitunas negras y tomate",
								name: "Ensalada de la Huerta",
								price: 10
							}
						]
					},
					{
						name: "Postres",
						products: [
							{
								description: "Con nueces de macadamia",
								name: "Helado de vainilla",
								price: 6
							},
							{
								description: "Dulce de leche rebozado y frito",
								name: "Leche frita",
								price: 7
							}
						]
					},
					{
						name: "Bebidas",
						products: [
							{
								description: "Lata de 33 cl",
								name: "Fanta Naranja",
								price: 2.5
							},
							{
								description: "Cerveza blanca procedente de Múnich",
								name: "Cerveza Paulaner",
								price: 3.5
							},
							{
								description: "Cerveza Belga Premium",
								name: "Cerveza Grimbergen",
								price: 3.5
							}
						]
					}
				]
			}
		}
	},
	{
		id: 6920997,
		name: "Ana",
		lastName: "Sánchez Cruz",
		email: "ana.sanchez.cruzz@gmail.com",
		address: "C/ Marcelo Usera 25 2A, Somiedo, Asturias, España",
		zip: "3546",
		phone: "9164825757",
		password: "JS4as_dd$",
		userRoles: "cr",
		restaurant: {
			restaurantName: "Dinner Restaurant",
			restaurantAddress: "C/ Libertad 76, Cercedilla, Madrid, España",
			restaurantZipCode: "0168",
			restaurantPhoneNumber: "9965842563",
			logo: "http://localhost:3000/images/rest_logos/12658456dinner-restaurant.jpg",
			orders: [],
			menu: {
				categories: [
					{
						name: "Aperitivos",
						products: [
							{
								description: "Acompañados de salsa Jack Daniels",
								name: "Aros de Cebolla",
								price: 7
							},
							{
								description: "Con deliciosa salsa de ajo casera",
								name: "Patatas Ali-Oli",
								price: 5
							},
							{
								description: "Rellenos de queso cheddar",
								name: "Jalapeños",
								price: 6.5
							},
						]
					},
					{
						name: "Hamburguesas",
						products: [
							{
								description: "Hamburguesa Beyond Burguer, ¡mejor que la real!",
								name: "Hamburguesa Vegana",
								price: 12
							},
							{
								description: "300 gramos de carne de buey a la brasa",
								name: "Hamburguesa de Buey",
								price: 12
							},
							{
								description: "Con jugosa pechuga de pollo empanada",
								name: "Hamburguesa de Pollo",
								price: 12
							},
						]
					},
					{
						name: "Bebidas",
						products: [
							{
								description: "Lata de 33 cl",
								name: "Aquarius de Limón",
								price: 2.5
							},
							{
								description: "Cerveza Belga Premium",
								name: "Cerveza La Chouffe",
								price: 3.5
							},
							{
								description: "Cerveza Belga Premium",
								name: "Cerveza Trappistes Rochefort",
								price: 3.5
							}
						]
					}
				]
			}
		}
	},
	{
		id: 1809153,
		name: "Lorena",
		lastName: "Rosa Soto",
		email: "lorenita27soto@gmail.com",
		address: "C/ Amargura 15 5B, Oviedo, Asturias, España ",
		zip: "9985",
		phone: "4568549960",
		password: "Al€4m6_$",
		userRoles: "cr",
		restaurant: {
			restaurantName: "Cítrico",
			restaurantAddress: "C/ de la Paloma, 33, Alcobendas, Madrid",
			restaurantZipCode: "1225",
			restaurantPhoneNumber: "3569584750",
			logo: "http://localhost:3000/images/rest_logos/82267779citrico.png",
			orders: [],
			menu: {
				categories: [
					{
						name: "Pastas",
						products: [
							{
								description: "Con tomate, carne y verduras",
								name: "Espaguetis Boloñesa",
								price: 7
							},
							{
								description: "Con deliciosa mezcla de quesos italianos",
								name: "Raviolli 4 Quesos",
								price: 5
							},
							{
								description: "Con deliciosa salsa de nata y champiñón",
								name: "Ñoquis de la Casa",
								price: 6.5
							},
						]
					},
					{
						name: "Pizzas",
						products: [
							{
								description: "Con jamón, aceitunas, tomate y queso",
								name: "Pizza Florencia",
								price: 12
							},
							{
								description: "Carne de cerdo a la brasa y queso de cabra",
								name: "Pizza Cítrico",
								price: 12
							},
							{
								description: "Con verduras de la huerta y pollo",
								name: "Pizza Taglionne",
								price: 12
							},
						]
					},
					{
						name: "Bebidas",
						products: [
							{
								description: "Lata de 33 cl",
								name: "Coca-Cola",
								price: 2.5
							},
							{
								description: "Cerveza suave",
								name: "Cerveza Estrella de Galicia",
								price: 2.5
							},
							{
								description: "Cerveza rubia",
								name: "Cerveza 1906",
								price: 2.4
							}
						]
					}
				]
			}
		}
	},
	{
		id: 9855470,
		name: "Santiago",
		lastName: "Camacho Hidalgo",
		email: "santiagoCamacho40@gmail.com",
		address: "C/ Medina 25 2B, Somiedo, Asturias, España ",
		zip: "8854",
		phone: "9365845500",
		password: "Aj$ime00",
		userRoles: "cr",
		restaurant: {
			restaurantName: "El Bigotudo",
			restaurantAddress: "C/ Olvido, 133, Las Rozas, Madrid",
			restaurantZipCode: "5567",
			restaurantPhoneNumber: "9544526855",
			logo: "http://localhost:3000/images/rest_logos/58645557el-bigotes.jpg",
			orders: [],
			menu: {
				categories: [
					{
						name: "Primeros",
						products: [
							{
								description: "De carne y verduras con salsa de tomate",
								name: "Berenjenas Rellenas",
								price: 11
							},
							{
								description: "Acompañados de patatas",
								name: "Escalopes de Ternera",
								price: 8
							},
							{
								description: "Con jamón serrano y huevos fritos",
								name: "Sartenada de Patatas",
								price: 9.5
							},
						]
					},
					{
						name: "Segundos",
						products: [
							{
								description: "Con patatas y verduras",
								name: "Pollo Asado",
								price: 12
							},
							{
								description: "Judiones con chorizo y morcilla",
								name: "Fabada",
								price: 12
							},
							{
								description: "De garbanzos con bacalao y espinacas",
								name: "Potaje",
								price: 12
							},
						]
					},
					{
						name: "Postres",
						products: [
							{
								description: "Surtido de 5 bombones helados de sabores",
								name: "Bombones Helados",
								price: 2.5
							},
							{
								description: "Flan de huevo casero con caramelo",
								name: "Flan de Huevo",
								price: 2.5
							},
							{
								description: "Tarta casera recién hecha",
								name: "Tarta de Zanahoria",
								price: 2.4
							}
						]
					}
				]
			}
		}
	},
	{
		id: 33500759,
		name: "Arturo",
		lastName: "López Rosa",
		email: "artimagoLopez@gmail.com",
		address: "C/ Medán 34 4A, Navalafuente, Madrid, España",
		zip: "8778",
		phone: "3699633580",
		password: "Az%87P_K",
		userRoles: "cr",
		restaurant: {
			restaurantName: "Two Brothers",
			restaurantAddress: "C/ Umbría 16, Soto del Real, Madrid, España",
			restaurantZipCode: "8855",
			restaurantPhoneNumber: "9368524610",
			logo: "http://localhost:3000/images/rest_logos/15855001two-brothers.png",
			orders: [],
			menu: {
				categories: [
					{
						name: "Para Compartir",
						products: [
							{
								description: "Con salsa barbacoa",
								name: "Alitas de Pollo",
								price: 8
							},
							{
								description: "Patatas Gajo con salsa de la casa",
								name: "Patatas",
								price: 7
							},
							{
								description: "Croquetas de sabores variados. 8 uds.",
								name: "Croquetas",
								price: 10
							}
						]
					},
					{
						name: "Hamburguesas",
						products: [
							{
								description: "Con carne, cebolla caramelizada y piña",
								name: "Hamburguesa Cajuna",
								price: 8
							},
							{
								description: "La más famosa. Carne de ternera mezclada con bacon",
								name: "Hamburguesa Kevin Bacon",
								price: 10
							},
							{
								description: "¡500 gramos de grasienta carne de cerdo!",
								name: "Hamburguesa Infarto Seguro",
								price: 15
							}
						]
					},
					{
						name: "Carnes A La Brasa",
						products: [
							{
								description: "Acompañado de patatas panaderas y pimientos asados",
								name: "Costillar",
								price: 14
							},
							{
								description: "Alitas, chorizos criollos, morcillas y medio costillar",
								name: "Combo Tapa-Arterias",
								price: 23
							}
						]
					},
				]
			}
		}
	},
];

module.exports = users;