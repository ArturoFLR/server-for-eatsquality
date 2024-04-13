const bcrypt = require("bcrypt");

async function genUserToken (password) {
	const userToken = await bcrypt.hash(password, 10);
	return userToken;
}

module.exports = genUserToken;