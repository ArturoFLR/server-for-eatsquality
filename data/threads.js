const users = require("./users");

const threads = [
	{
		id: "1825594",
		author: users[0],
		content: "Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio.",
		publicationDate: "2024-01-25T16:18:55.405Z",
		comments: [
			{
				id: "876885",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T12:38:01.760Z"
			}
		]
	},
	{
		id: "5098860",
		author: users[3],
		content: "Cras imperdiet nunc et pretium pharetra.",
		publicationDate: "2024-01-25T16:27:50.753Z",
		comments: [
			{
				id: "1590162",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T12:38:01.760Z"
			}
		]
	},
	
];

module.exports = threads;