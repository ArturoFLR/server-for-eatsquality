const publications = require("../data/publications");

function getAllPublications () {
	const response = [];

	publications.map( (element) => {
		const commentsWithoutUserData = [];

		element.comments.map( (comment) => {
			const newComment = {
				id: comment.id,
				author: comment.author.name,
				content: comment.content,
				publicationDate: comment.publicationDate
			};

			commentsWithoutUserData.push(newComment);
		});

		response.push(
			{
				id: element.id,
				title: element.title,
				author: element.author.name,
				publicationDate: element.publicationDate,
				mainImage: element.mainImage,
				comments: commentsWithoutUserData,
				score: element.score,
				mainText: element.mainText
			}
		);
	});

	return response;
}

module.exports = getAllPublications;