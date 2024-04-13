const express = require("express");
const app = express();
const cors = require("cors");


const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const registerUser = require("./utils/registerUser");
const SESSIONS = require("./data/sessions");
const loginUser = require("./utils/loginUser");
const getBestPublications = require("./utils/getBestPublications");
const createPublication = require("./utils/createPublication");
const getAllPublications = require("./utils/getAllPublications");
const mockDataForCharts = require("./data/mockDataForCharts");




//MIDDLEWARES
app.use(express.urlencoded( {extended: false}) );
app.use(cors( {origin: ["http://localhost:5173", "http://localhost:4173"], credentials: true} ));
app.use(cookieParser());
app.use(fileUpload());

//PORTS
app.listen(3000,);



//REGISTER

app.post("/register", (req, res) => {
	const newUserData = req.body;

	registerUser(newUserData)
		.then( (token) => {
			SESSIONS.set(token, {userName: `${newUserData.userName} ${newUserData.userLastName}`, userRole: "user", userMail: newUserData.userEmail});

			const response = {
				userName: `${newUserData.userName} ${newUserData.userLastName}`,
				userRole: "user"
			};

			res.cookie("userId", token, {
				secure: true,								
				httpOnly: true,
				sameSite: "none",
			})
				.status(200)
				.send( JSON.stringify(response) );
		})
		.catch( (err) => {
			res.status(400).send(err.message);
		});
});

// CHECK USER SESSION

app.get("/userSession", (req, res) => {
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);

	if (session) {
		const response = {
			userName: session.userName,
			userRole: session.userRole
		};

		res.status(200).send( JSON.stringify(response) );
	} else {
		res.status(400).send( JSON.stringify("No open session for this userId") );
	}
});


//LOGIN

app.post("/login", (req, res) => {
	const userData = req.body;

	loginUser(userData)
		.then( (data) => {
			SESSIONS.set(data.userToken, {userName: data.userName, userRole: data.userRole, userMail: data.userMail});
			res.cookie("userId", data.userToken, {
				secure: true,								// Borrar esto si no funciona en cliente (no es https).
				httpOnly: true,
				sameSite: "none",
			})
				.status(200)
				.send( JSON.stringify({
					userName: data.userName,
					userRole: data.userRole
				}) );
		})
		.catch( (err) => {
			res.status(400).send(err.message);
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

app.get("/publications/best", (req, res) => {
	const response = getBestPublications(6);

	res.json(response);
});


// GET ALL PUBLICATIONS

app.get("/publications/all", (req, res) => {
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);

	if (session) {
		const response = getAllPublications();
		res.status(200).json(response);
	} else {
		res.status(400).send( JSON.stringify("You must be registered to access all publications") );
	}
});


// UPLOAD A NEW PUBLICATION

app.post("/publications/upload", (req, res) => {
	const { image } = req.files;
	const userToken = req.cookies.userId;
	const session = SESSIONS.get(userToken);

	if (session) {
		if (session.userRole !== "producer" && session.userRole !== "admin") {
			res.status(400).send( JSON.stringify("You need to be a producer or admin to publish publications") );
		} else {
			image.mv(__dirname + "/public/images/" + image.name);			// Move the uploaded image to our images folder
		
			createPublication(req.body, session.userMail, image);
			
			res.status(200).send("Publication created");
		}

	} else {
		res.status(400).send( JSON.stringify("No open session for this userId") );
	}
});


// GET CHARTS DATA

app.get("/charts/all", (req, res) => {
	const response = mockDataForCharts;

	res.json(response);
});