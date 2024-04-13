const users = require("../data/users");
// const genUserToken = require("./genUserToken");
const generateId = require("./generateId");

function registerClient (userData) {
	const isEmailDuplicate = checkDuplicateEmail(userData.userEmail);

	if (!isEmailDuplicate) {
		const id = generateId();
	
		const newUser = {
			id,
			name: userData.userName,
			lastName: userData.userLastName,
			email: userData.userEmail,        
			address: userData.userAddress,
			zip: userData.userZipCode,
			phone: userData.userPhoneNumber,
			password: userData.userPassword,
			userRole: "c"
		};
	
		// const newUserToken = await genUserToken(userData.userPassword);
	
		users.push(newUser);

		// return newUserToken;
	} else {
		throw new Error("The email already exists!");
	}
}

function checkDuplicateEmail (email) {
	let isDuplicate = false;
	
	users.map( (element) => {
		if (element.email === email) {
			isDuplicate = true;
		}
	});
	return isDuplicate;
}


module.exports = registerClient;