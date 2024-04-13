const publications = require("../data/publications");
const users = require("../data/users");
const generateId = require("./generateId");

function createPublication (publicationData, userMail, image) {
	let user = {};

	for (let i = 0; i < users.length; i++) {
		if (users[i].email === userMail) {
			user = users[i];
			break;
		}
	}

	const newPublication = {
		id: generateId(),
		title: publicationData.title,
		author: user,
		publicationDate: new Date(),
		visibility: true,
		mainImage: `http://localhost:3000/images/${image.name}`,
		comments: [
		],
		score: 0,
		authorizationStatus: {
			id: generateId(),
			state: "approved"
		},
		mainText: publicationData.mainText
	};

	publications.push(newPublication);
}

module.exports = createPublication;