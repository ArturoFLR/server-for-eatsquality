const express = require("express");
const app = express();
const cors = require("cors");


const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");


const SESSIONS = require("./data/sessions");
const loginUser = require("./utils/loginUser");
const registerClient = require("./utils/registerClient");
const registerRestaurant = require("./utils/registerRestaurant");
const generateId = require("./utils/generateId");




//MIDDLEWARES
app.use(express.urlencoded( {extended: false}) );
app.use(cors( {origin: ["http://localhost:5173", "http://localhost:4173"], credentials: true} ));
app.use(cookieParser());
app.use(fileUpload());

//PORTS
app.listen(3000,);



//REGISTRAR USUARIO

app.post("/register/client", (req, res) => {
	const newClientData = req.body;

	try{
		registerClient(newClientData);
		res.status(200).json("Ok");
	}
	catch (err) {
		res.status(409).json(err.message);
	}
});




//REGISTRAR RESTAURANTE

app.post("/register/restaurant", (req, res) => {
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);
	const { restaurantImg } = req.files;
	const newRestaurantData = req.body;

	if (session) {
		try{
			const newLogoName = `${generateId()}${restaurantImg.name}`;
			const newUserRoles = registerRestaurant(newRestaurantData, newLogoName, session.userMail);
			SESSIONS.set(userToken, {userName: session.userName, userRoles: newUserRoles, userMail: session.userMail});
			restaurantImg.mv(__dirname + "/public/images/rest_logos/" + newLogoName);			// Move the uploaded image to our images folder

			res.status(200).json("Ok");
		}
		catch (err) {
			res.status(409).json(err.message);
		}
	} else {
		res.status(401).send( JSON.stringify("No open session for this userId") );
	}
});



// CHECK USER SESSION

app.get("/userSession", (req, res) => {
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);

	if (session) {
		const response = {
			userName: session.userName,
			userRoles: session.userRoles
		};

		res.status(200).send( JSON.stringify(response) );
	} else {
		res.status(401).send( JSON.stringify("No open session for this userId") );
	}
});


//LOGIN

app.post("/login", (req, res) => {
	const userData = req.body;

	loginUser(userData)
		.then( (data) => {
			SESSIONS.set(data.userToken, {userName: data.userName, userRoles: data.userRoles, userMail: data.userMail});
			res.cookie("userId", data.userToken, {
				secure: true,								// Borrar esto si no funciona en cliente (no es https).
				httpOnly: true,
				sameSite: "none",
			})
				.status(200)
				.send( JSON.stringify({
					userName: data.userName,
					userRoles: data.userRoles
				}) );
		})
		.catch( (err) => {
			res.status(401).send(err.message);
		});
});


// LOGOUT

app.get("/logout", (req, res) => {
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);

	if (session) {
		SESSIONS.delete(userToken);

		res.cookie("userId", "", {
			secure: true,								
			httpOnly: true,
			sameSite: "none",
		})
			.status(200).json("Logout");
	}
});


// IMAGES -- GET

app.use(express.static("public"));



// GET BEST 3 PUBLICATIONS

// app.get("/publications/best", (req, res) => {
// 	const response = getBestPublications(6);

// 	res.json(response);
// });


// GET ALL PUBLICATIONS

// app.get("/publications/all", (req, res) => {
// 	const userToken = req.cookies.userId;
// 	const session = SESSIONS.get(userToken);

// 	if (session) {
// 		const response = getAllPublications();
// 		res.status(200).json(response);
// 	} else {
// 		res.status(400).send( JSON.stringify("You must be registered to access all publications") );
// 	}
// });


// UPLOAD A NEW PUBLICATION

// app.post("/publications/upload", (req, res) => {
// 	const { image } = req.files;
// 	const userToken = req.cookies.userId;
// 	const session = SESSIONS.get(userToken);

// 	if (session) {
// 		if (session.userRoles !== "producer" && session.userRoles !== "admin") {
// 			res.status(400).send( JSON.stringify("You need to be a producer or admin to publish publications") );
// 		} else {
// 			image.mv(__dirname + "/public/images/" + image.name);			// Move the uploaded image to our images folder
		
// 			createPublication(req.body, session.userMail, image);
			
// 			res.status(200).send("Publication created");
// 		}

// 	} else {
// 		res.status(400).send( JSON.stringify("No open session for this userId") );
// 	}
// });