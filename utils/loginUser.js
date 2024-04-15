const users = require("../data/users");
const genUserToken = require("./genUserToken");

async function loginUser (userData) {
	let userEmailExists = false;
	let userPassword = "";
	let userName = "";
	let userRoles = "";
	let userMail = "";

	for (let i = 0; i < users.length; i++) {
		if ( users[i].email === userData.userEmail ) {
			userEmailExists = true;
			userPassword = users[i].password;
			userName = `${users[i].name} ${users[i].lastName}`;
			userRoles = users[i].userRoles;
			userMail = users[i].email;
			break;
		}
	}

	if ( userEmailExists && userPassword === userData.userPassword ) {
		const userToken = await genUserToken(userPassword);

		return {
			userName,
			userRoles,
			userMail, 
			userToken
		};
	} else {
		throw new Error("Email / Contraseña incorrectos");
	}
}


module.exports = loginUser;