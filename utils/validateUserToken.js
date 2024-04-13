const bcrypt = require("bcrypt");

async function validateUserToken (password, token) {
	const isValid = await bcrypt.compare(password, token);
	return isValid;
}

module.exports = validateUserToken;