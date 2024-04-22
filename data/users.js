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
		orders: [],
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
								id: "lv6lynen9lgh3e263q",
								description: "Con queso fundido, guacamole y cochinita pibil",
								name: "Nachos",
								price: 10
							},
							{
								id: "lv6lzagvmwf3elm76i",
								description: "Deliciosas patatas fritas con 4 salsas",
								name: "Patatas",
								price: 7
							},
							{
								id: "lv6lzagwtfi2w6cl1vg",
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
								id: "lv6lzqotrzycualdjde",
								description: "Con atún, aceitunas, huevo, espárragos, lechuga y tomate",
								name: "Ensalada de la Casa",
								price: 8
							},
							{
								id: "lv6lzqouse43oghstif",
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
								id: "lv6m043ov3a67b57m2",
								description: "Acompañado de patatas panaderas y pimientos asados",
								name: "Chuletón",
								price: 14
							},
							{
								id: "lv6m043ov4tgy9wo2id",
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
								id: "lv6m0gmgy23e8n43vgp",
								description: "Tarta casera. ¡Buenísima!",
								name: "Tarta de Queso",
								price: 6
							},
							{
								id: "lv6m0gmh2euih5v5dj1",
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
								id: "lv6m0soizksmdha0kg",
								description: "Lata de 33 cl",
								name: "Coca-Cola",
								price: 2.5
							},
							{
								id: "lv6m0sojxcxbdob8fmc",
								description: "Cerveza Belga Premium",
								name: "Cerveza Judas",
								price: 3.5
							},
							{
								id: "lv6m127wrdgg3cm1e0q",
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
		orders: [],
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
								id: "lv6m127xenyezcc2tdl",
								description: "Con quesos mozzarella, gorgonzola, fontina y parmesano",
								name: "Pizza Cuatro Quesos",
								price: 12
							},
							{
								id: "lv6m1eyoenfkmqa7lq4",
								description: "Con carne a la brasa, queso y tomate",
								name: "Pizza Barbacoa",
								price: 12
							},
							{
								id: "lv6m1eyool2wvnlwrgh",
								description: "Con pollo asado, queso, tomate y pimientos",
								name: "Pizza Pollo",
								price: 12
							},
							{
								id: "lv6m1rfbsaztcc6azh",
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
								id: "lv6m1rfc9tn3az2jkll",
								description: "Con ventresca, pimientos rojos asados y ajo",
								name: "Ensalada de pimientos",
								price: 8
							},
							{
								id: "lv6m257lvb0kxjhsxaj",
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
								id: "lv6m257mjxa0lb8o8n",
								description: "Con nueces de macadamia",
								name: "Helado de vainilla",
								price: 6
							},
							{
								id: "lv6m2589zsgj42kbj",
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
								id: "lv6m258a36d81x9eb3v",
								description: "Lata de 33 cl",
								name: "Fanta Naranja",
								price: 2.5
							},
							{
								id: "lv6m2vty4xcc5tsrktp",
								description: "Cerveza blanca procedente de Múnich",
								name: "Cerveza Paulaner",
								price: 3.5
							},
							{
								id: "lv6m2vtzwdt4nm1wlaq",
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
		orders: [],
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
								id: "lv6m2vurz44a8v7sifl",
								description: "Acompañados de salsa Jack Daniels",
								name: "Aros de Cebolla",
								price: 7
							},
							{
								id: "lv6m2vus7fr30j8r8p6",
								description: "Con deliciosa salsa de ajo casera",
								name: "Patatas Ali-Oli",
								price: 5
							},
							{
								id: "lv6m3oup2oixkew8tqg",
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
								id: "lv6m3oupoitgq5asas",
								description: "Hamburguesa Beyond Burguer, ¡mejor que la real!",
								name: "Hamburguesa Vegana",
								price: 12
							},
							{
								id: "lv6m3ovux6vtuy7phh9",
								description: "300 gramos de carne de buey a la brasa",
								name: "Hamburguesa de Buey",
								price: 12
							},
							{
								id: "lv6m3ovudh0ks97vsf7",
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
								id: "lv6m4exqjtqa8z6pd1g",
								description: "Lata de 33 cl",
								name: "Aquarius de Limón",
								price: 2.5
							},
							{
								id: "lv6m4exqamcj96aglgt",
								description: "Cerveza Belga Premium",
								name: "Cerveza La Chouffe",
								price: 3.5
							},
							{
								id: "lv6m4eyau66npyzcemi",
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
		orders: [],
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
								id: "lv6m4eyby5gf0nj7f79",
								description: "Con tomate, carne y verduras",
								name: "Espaguetis Boloñesa",
								price: 7
							},
							{
								id: "lv6m56th3ecmw2sl8ck",
								description: "Con deliciosa mezcla de quesos italianos",
								name: "Raviolli 4 Quesos",
								price: 5
							},
							{
								id: "lv6m56ti9g2l6vfe7rr",
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
								id: "lv6m56u32ps8sh48p5u",
								description: "Con jamón, aceitunas, tomate y queso",
								name: "Pizza Florencia",
								price: 12
							},
							{
								id: "lv6m56u4pu9ze6dkkd",
								description: "Carne de cerdo a la brasa y queso de cabra",
								name: "Pizza Cítrico",
								price: 12
							},
							{
								id: "lv6m5sbh6myw7l5xyp5",
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
								id: "lv6m5sbhax2gs670ioc",
								description: "Lata de 33 cl",
								name: "Coca-Cola",
								price: 2.5
							},
							{
								id: "lv6m5sc6uo99gv3ujz",
								description: "Cerveza suave",
								name: "Cerveza Estrella de Galicia",
								price: 2.5
							},
							{
								id: "lv6m5sc6zz7hq2e6k",
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
		orders: [],
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
								id: "lv6m6fu2jb4108v25k",
								description: "De carne y verduras con salsa de tomate",
								name: "Berenjenas Rellenas",
								price: 11
							},
							{
								id: "lv6m6fu2348h1dhaldm",
								description: "Acompañados de patatas",
								name: "Escalopes de Ternera",
								price: 8
							},
							{
								id: "lv6m6futprfmhknhza",
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
								id: "lv6m6fuuicgjn1qrrwq",
								description: "Con patatas y verduras",
								name: "Pollo Asado",
								price: 12
							},
							{
								id: "lv6m70puyye5vzwe7wa",
								description: "Judiones con chorizo y morcilla",
								name: "Fabada",
								price: 12
							},
							{
								id: "lv6m70pvoavc86dj9j",
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
								id: "lv6m70qfesd8tpkmxtl",
								description: "Surtido de 5 bombones helados de sabores",
								name: "Bombones Helados",
								price: 2.5
							},
							{
								id: "lv6m70qg5xl1znjz2jq",
								description: "Flan de huevo casero con caramelo",
								name: "Flan de Huevo",
								price: 2.5
							},
							{
								id: "lv6m7lwhhdbiwx92h1h",
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
		orders: [],
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
								id: "lv6m7lwior6xcvyahb",
								description: "Con salsa barbacoa",
								name: "Alitas de Pollo",
								price: 8
							},
							{
								id: "lv6m7lx1rqg69u0nh9n",
								description: "Patatas Gajo con salsa de la casa",
								name: "Patatas",
								price: 7
							},
							{
								id: "lv6m7lx2f6yfbkamj86",
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
								id: "lv6m8d35nwbifgzjt3q",
								description: "Con carne, cebolla caramelizada y piña",
								name: "Hamburguesa Cajuna",
								price: 8
							},
							{
								id: "lv6m8d36easfyxghn3",
								description: "La más famosa. Carne de ternera mezclada con bacon",
								name: "Hamburguesa Kevin Bacon",
								price: 10
							},
							{
								id: "lv6m8d3pgf7njb9a7x",
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
								id: "lv6m8d3pcxs4i7z4a3n",
								description: "Acompañado de patatas panaderas y pimientos asados",
								name: "Costillar",
								price: 14
							},
							{
								id: "lv6m8ywiq35hylhst5l",
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
	{
		id: 33500759,
		name: "Marcos",
		lastName: "Buendía Sanz",
		email: "buendiaSmarcos@gmail.com",
		address: "C/ Medán 34 4A, Navalafuente, Madrid, España",
		zip: "8778",
		phone: "3699633580",
		password: "Mz%80P_K",
		userRoles: "cr",
		orders: [],
		restaurant: {
			restaurantName: "Mama Victoria",
			restaurantAddress: "C/ Umbría 16, Soto del Real, Madrid, España",
			restaurantZipCode: "8855",
			restaurantPhoneNumber: "9368524610",
			logo: "http://localhost:3000/images/rest_logos/95523801mama-victoria.png",
			orders: [],
			menu: {
				categories: [
					{
						name: "Pizzas",
						products: [
							{
								id: "lv6posvlsuh50i7wrs",
								name: "Pizza Margarita",
								description: "Deliciosa pizza con salsa de tomate, mozzarella y albahaca fresca.",
								price: 9.99
							},
							{
								id: "lv6posvlmuc8hqdq2tl",
								name: "Pizza Pepperoni",
								description: "Pizza clásica con salsa de tomate, mozzarella y rodajas de pepperoni.",
								price: 10.99
							},
							{
								id: "lv6posw7tnq9og0rxzp",
								name: "Pizza Vegetariana",
								description: "Pizza repleta de verduras frescas, como champiñones, pimientos y cebollas.",
								price: 11.99
							},
						]
					},
					{
						name: "Hamburguesas",
						products: [
							{
								id: "lv6posw85lf9w90aj5m",
								name: "Hamburguesa Clásica",
								description: "Hamburguesa con carne de res, lechuga, tomate, cebolla y salsa especial.",
								price: 8.99
							},
							{
								id: "lv6ppkb31kgh307odc6",
								name: "Hamburguesa BBQ",
								description: "Hamburguesa con carne de res, queso cheddar, cebolla caramelizada y salsa barbacoa.",
								price: 9.99
							},
							{
								id: "lv6ppkb40r5ldvw3ghf",
								name: "Hamburguesa Vegetariana",
								description: "Hamburguesa de falafel con lechuga, tomate, pepino y salsa de yogur.",
								price: 10.99
							},
						]
					},
					{
						name: "Bocadillos",
						products: [
							{
								id: "lv6ppkbpdap0duvzh3v",
								name: "Bocadillo de Jamón y Queso",
								description: "Bocadillo con jamón serrano, queso manchego y tomate.",
								price: 5.99
							},
							{
								id: "lv6ppkbprterpoibvm",
								name: "Bocadillo de Tortilla Española",
								description: "Bocadillo con tortilla española, cebolla y pimiento.",
								price: 6.99
							},
							{
								id: "lv6pqbn7yadkihyvqg",
								name: "Bocadillo Vegetal",
								description: "Bocadillo con lechuga, tomate, pepino, pimiento y mayonesa.",
								price: 4.99
							},
							// Puedes agregar más bocadillos aquí según sea necesario
						]
					},
				]
			}
		}
	},
	{
		id: 33500759,
		name: "Sebastían",
		lastName: "Gómez Cortés",
		email: "SebasGom25@gmail.com",
		address: "C/ Alaitán 24 2B, Colmenar, Madrid, España",
		zip: "8778",
		phone: "3699633580",
		password: "Mz%8$67&",
		userRoles: "cr",
		orders: [],
		restaurant: {
			restaurantName: "Dope Sandwich",
			restaurantAddress: "C/ Umbría 16, Soto del Real, Madrid, España",
			restaurantZipCode: "8855",
			restaurantPhoneNumber: "9368524610",
			logo: "http://localhost:3000/images/rest_logos/58675138dope-sandwich.webp",
			orders: [],
			menu: {
				categories: [
					{
						name: "Bocadillos",
						products: [
							{
								id: "lv6q6rwu4yz2h57fm7k",
								name: "Bocadillo de Pollo BBQ",
								description: "Bocadillo con pechuga de pollo a la parrilla, salsa BBQ y cebolla caramelizada.",
								price: 7.99
							},
							{
								id: "lv6q6rwv6ics7gncdo3",
								name: "Bocadillo Vegetales Asados",
								description: "Bocadillo con berenjena, calabacín, pimiento rojo, cebolla y alioli.",
								price: 6.49
							},
							{
								id: "lv6q6rxu3f21aid8v55",
								name: "Bocadillo de Jamón y Queso",
								description: "Bocadillo con jamón serrano, queso brie y rúcula.",
								price: 8.49
							},
						]
					},
					{
						name: "Sándwiches",
						products: [
							{
								id: "lv6qayer05cgfwnj0pdo",
								name: "Sándwich de Pollo y Aguacate",
								description: "Sándwich con pechuga de pollo, aguacate, lechuga y mayonesa.",
								price: 8.99
							},
							{
								id: "lv6qayesjq50n38tdf",
								name: "Sándwich Roast Beef y Queso",
								description: "Sándwich con roast beef, queso cheddar, tomate y mostaza.",
								price: 9.49
							},
							{
								id: "lv6qayfk21ba2eecxzl",
								name: "Sándwich Vegetariano",
								description: "Sándwich con pimientos asados, berenjena, calabacín, lechuga y hummus.",
								price: 7.99
							},
						]
					},
					{
						name: "Bebidas",
						products: [
							{
								id: "lv6qayflknrhsknvod",
								name: "Cerveza Artesanal IPA",
								description: "Cerveza artesanal estilo IPA, amarga y con notas cítricas.",
								price: 5.99
							},
							{
								id: "lv6qbuivfnzri2g0qk",
								name: "Cóctel Mojito",
								description: "Cóctel refrescante a base de ron, lima, menta, azúcar y soda.",
								price: 7.49
							},
							{
								id: "lv6qbuivielca9ui15",
								name: "Vino Tinto Reserva",
								description: "Vino tinto reserva con cuerpo, aromas a frutas maduras y notas especiadas.",
								price: 8.99
							},
						]
					},
				]
			}
		}
	},
	{
		id: 33500759,
		name: "Víctor",
		lastName: "Sánchez Galgo",
		email: "elgalgosanchez@gmail.com",
		address: "C/ Alaitán 24 2B, Colmenar, Madrid, España",
		zip: "8778",
		phone: "3699633580",
		password: "rZ$8$67&",
		userRoles: "cr",
		orders: [],
		restaurant: {
			restaurantName: "Steak House",
			restaurantAddress: "C/ Umbría 16, Soto del Real, Madrid, España",
			restaurantZipCode: "8855",
			restaurantPhoneNumber: "9368524610",
			logo: "http://localhost:3000/images/rest_logos/66855470steak-house.jpg",
			orders: [],
			menu: {
				categories: [
					{
						name: "Asados",
						products: [
							{
								id: "lv6qhnbrnkrnxdsm2n",
								name: "Churrasco Argentino",
								description: "Carne de res asada a la parrilla, tierna y jugosa, acompañada de chimichurri.",
								price: 15.99
							},
							{
								id: "lv6qhnbr7hx9yh2cwwo",
								name: "Parrillada Mixta",
								description: "Selección de carnes asadas, incluyendo pollo, chorizo, morcilla y entraña.",
								price: 18.49
							},
							{
								id: "lv6qhnc7qcf0re8z8e",
								name: "Costillas BBQ",
								description: "Costillas de cerdo marinadas en salsa BBQ, asadas lentamente hasta quedar caramelizadas.",
								price: 14.99
							},
						]
					},
					{
						name: "Entrantes",
						products: [
							{
								id: "lv6reylnbu8kxxnwr2k",
								name: "Nachos Supreme",
								description: "Nachos de maíz cubiertos con queso cheddar, jalapeños, guacamole y crema agria.",
								price: 10.99
							},
							{
								id: "lv6reylo3cr4y8r0ans",
								name: "Aros de Cebolla",
								description: "Aros de cebolla empanizados y crujientes, acompañados de salsa de queso.",
								price: 8.49
							},
							{
								id: "lv6reymqkllbdbhwzh",
								name: "Tiras de Pollo Crujientes",
								description: "Tiras de pollo crujientes y doradas, acompañadas de salsa barbacoa.",
								price: 11.99
							},
						]
					},
					{
						name: "Postres",
						products: [
							{
								id: "lv6reymqfnknkplht87",
								name: "Tarta de Chocolate",
								description: "Deliciosa tarta de chocolate negro con cobertura de ganache.",
								price: 12.99
							},
							{
								id: "lv6rfomp8lfo1xacm5f",
								name: "Helado de Vainilla",
								description: "Helado cremoso de vainilla servido con sirope de caramelo.",
								price: 6.49
							},
							{
								id: "lv6rfomqq3qajzjc4u",
								name: "Pastel de Manzana",
								description: "Pastel de manzana casero con una capa crujiente de hojaldre.",
								price: 9.99
							},
						]
					},
				]
			}
		}
	},
	{
		id: 33997709,
		name: "Ramón",
		lastName: "Salazar Díez",
		email: "killLeonKennedy@gmail.com",
		address: "C/ Alaitán 24 2B, Colmenar, Madrid, España",
		zip: "8778",
		phone: "3699633580",
		password: "rZ$8$67&",
		userRoles: "c",
		orders: [
			{
				id: 45588141,
				restaurantName: "Steak House",
				state: "En preparación",
				date: "22-04-2024",
				products: [
					{
						productId: 3232348,
						name: "Churrasco Argentino",
						price: 15.99,
						quantity: 1,
					},
					{
						productId: 1123670,
						name: "Aros de Cebolla",
						price: 8.49,
						quantity: 1,
					},
					{
						productId: 1123670,
						name: "Tarta de Chocolate",
						price: 12.99,
						quantity: 2,
					},
				]
			},
		],
	},

];


module.exports = users;