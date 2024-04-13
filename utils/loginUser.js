const users = require("../data/users");
const genUserToken = require("./genUserToken");

async function loginUser (userData) {
	let userEmailExists = false;
	let userPassword = "";
	let userName = "";
	let userRole = "";
	let userMail = "";

	for (let i = 0; i < users.length; i++) {
		if ( users[i].email === userData.userEmail ) {
			userEmailExists = true;
			userPassword = users[i].password;
			userName = `${users[i].name} ${users[i].lastName}`;
			userRole = users[i].userType;
			userMail = users[i].email;
			break;
		}
	}

	if ( userEmailExists && userPassword === userData.userPassword ) {
		const userToken = await genUserToken(userPassword);

		return {
			userName,
			userRole,
			userMail, 
			userToken
		};
	} else {
		throw new Error("Email / Password incorrect");
	}
}


module.exports = loginUser;