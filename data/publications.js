const users = require("./users");

const publications = [
	{
		id: "4811578",
		title: "Quisque finibus ex pulvinar",
		author: users[1],
		publicationDate: "2024-01-25T12:15:06.654Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/tomates.jpg",
		comments: [
			{
				id: "7555880",
				author: users[0],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T12:38:01.760Z"
			}
		],
		score: 5,
		authorizationStatus: {
			id: "3272199",
			state: "approved"
		},
		mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et odio at orci tincidunt porttitor. Donec consequat lacus vel malesuada ullamcorper. Nulla interdum mattis augue at imperdiet. Donec tincidunt facilisis mollis. Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula. Curabitur mollis arcu rutrum sapien sodales semper. Etiam eget varius sapien. Mauris aliquet sem ac felis dignissim hendrerit. Aenean fermentum sem a turpis pulvinar eleifend. Sed accumsan tellus vitae enim finibus, in accumsan ipsum luctus. Morbi placerat risus eu dapibus pellentesque. Proin lectus tellus, dapibus ac scelerisque id, luctus ut risus. Duis sed nulla eget lectus suscipit blandit vel ut nibh."
	},
	{
		id: "4447992",
		title: "Mauris tincidunt ut velit",
		author: users[3],
		publicationDate: "2024-01-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/riego.jpg",
		comments: [
			{
				id: "2983693",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T16:27:50.753Z"
			},
			{
				id: "322917",
				author: users[0],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T16:36:12.162Z"
			}
		],
		score: 7,
		authorizationStatus: {
			id: "228181",
			state: "approved"
		},
		mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et odio at orci tincidunt porttitor. Donec consequat lacus vel malesuada ullamcorper. Nulla interdum mattis augue at imperdiet. Donec tincidunt facilisis mollis. Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula."
	},
	{
		id: "10020495",
		title: "Aenean tristique ipsum eros",
		author: users[1],
		publicationDate: "2022-01-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/pepinos.jpg",
		comments: [
			{
				id: "11563693",
				author: users[2],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-01-25T16:27:50.753Z"
			},
			{
				id: "35572917",
				author: users[3],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-01-25T16:36:12.162Z"
			}
		],
		score: 2,
		authorizationStatus: {
			id: "7281531",
			state: "approved"
		},
		mainText: "Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula. Curabitur mollis arcu rutrum sapien sodales semper. Etiam eget varius sapien. Mauris aliquet sem ac felis dignissim hendrerit. Aenean fermentum sem a turpis pulvinar eleifend. Sed accumsan tellus vitae enim finibus, in accumsan ipsum luctus. Morbi placerat risus eu dapibus pellentesque. Proin lectus tellus, dapibus ac scelerisque id, luctus ut risus. Duis sed nulla eget lectus suscipit blandit vel ut nibh."
	},
	{
		id: "24020495",
		title: "Pellentesque quis malesad.",
		author: users[1],
		publicationDate: "2022-03-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/manzanas.jpg",
		comments: [
			{
				id: "91205693",
				author: users[2],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2022-05-25T16:27:50.753Z"
			},
			{
				id: "75572258",
				author: users[3],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-08-25T16:36:12.162Z"
			}
		],
		score: 6,
		authorizationStatus: {
			id: "7001531",
			state: "approved"
		},
		mainText: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempor libero quis nulla fermentum, vitae tincidunt velit tempor. Aenean dolor ligula, elementum nec volutpat eget, ullamcorper ut nulla. In non viverra arcu. Integer non erat porta, aliquet ex at, porta massa. Aenean et aliquam justo, id eleifend neque. Sed quis porttitor lorem. Nunc gravida, nibh eget tincidunt dapibus, elit nisi dapibus nisl, vel convallis orci lectus quis turpis.	Integer pulvinar in urna vel dictum. Aliquam auctor cursus magna. Integer tincidunt arcu vel hendrerit efficitur. Morbi viverra mattis lacus ut aliquet. Suspendisse vitae facilisis augue. Proin commodo sagittis augue vitae ultricies. In a purus eget nisi rhoncus molestie vel in nisi. Nullam elementum magna eu molestie porta. Integer purus nibh, viverra ac purus ut, ultrices feugiat nisi. Aenean placerat diam eu dolor iaculis, et ornare lectus euismod. Nunc tristique condimentum metus, sit amet tristique turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In turpis leo, varius sit amet euismod nec, vestibulum a est. Fusce consequat eget dui eget vestibulum. Suspendisse posuere, nunc a sollicitudin ornare, erat massa tempor mauris, vel vehicula metus sem eu nisi. Nam eget tristique nisi. In id turpis dapibus, condimentum ipsum a, ultricies tellus. Vivamus semper ut elit at gravida. Pellentesque turpis enim, varius nec tristique vel, vestibulum a enim. Sed luctus non dui at tempor. Vivamus fringilla id urna at ullamcorper. Etiam suscipit, mauris sit amet porttitor rhoncus, felis libero dapibus augue, ut aliquam ligula erat quis diam. Nullam vulputate libero velit, pretium pellentesque orci tempor ut. Morbi rutrum sapien a varius venenatis. Nunc mollis sollicitudin mi a sagittis. Donec porttitor sagittis neque nec faucibus. Maecenas varius hendrerit eleifend. Pellentesque pretium viverra felis, id dignissim ligula imperdiet sit amet. Nam in lacus turpis. Etiam aliquam ac purus non semper. Mauris condimentum tempus sagittis. Nam scelerisque sodales eros ac euismod. Aliquam pulvinar nulla nec pharetra blandit. Suspendisse vitae eleifend nibh. Etiam luctus dictum ligula in ullamcorper. Aliquam ullamcorper nisl velit, vitae tempus elit dapibus non. Phasellus ornare aliquam sapien et consequat. Donec a feugiat tellus, ac auctor tellus."
	},
	{
		id: "34099895",
		title: "Quisque tempor libero quis.",
		author: users[3],
		publicationDate: "2023-10-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/melones.jpg",
		comments: [
			{
				id: "61207823",
				author: users[2],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-12-25T16:27:50.753Z"
			},
			{
				id: "45294258",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T16:36:12.162Z"
			}
		],
		score: 4,
		authorizationStatus: {
			id: "7998151",
			state: "approved"
		},
		mainText: "Phasellus lobortis aliquet nibh, sed vehicula libero fringilla nec. Sed vulputate vitae erat at maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac dui porttitor, tristique quam ac, tincidunt nibh. Sed vitae nunc tempus, commodo nulla sed, euismod dolor. Aliquam pellentesque tristique imperdiet. In finibus quis magna et eleifend. Donec in scelerisque sapien, cursus ultricies lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisi vitae sapien finibus auctor. Aliquam in vulputate mauris, in vestibulum quam. Mauris sollicitudin in risus ac luctus. Nunc ultricies tellus pellentesque est tempor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer pulvinar in urna vel dictum. Aliquam auctor cursus magna. Integer tincidunt arcu vel hendrerit efficitur. Morbi viverra mattis lacus ut aliquet. Suspendisse vitae facilisis augue. Proin commodo sagittis augue vitae ultricies. In a purus eget nisi rhoncus molestie vel in nisi. Nullam elementum magna eu molestie porta. Integer purus nibh, viverra ac purus ut, ultrices feugiat nisi. Aenean placerat diam eu dolor iaculis, et ornare lectus euismod. Nunc tristique condimentum metus, sit amet tristique turpis. Morbi rutrum sapien a varius venenatis. Nunc mollis sollicitudin mi a sagittis. Donec porttitor sagittis neque nec faucibus. Maecenas varius hendrerit eleifend. Pellentesque pretium viverra felis, id dignissim ligula imperdiet sit amet. Nam in lacus turpis. Etiam aliquam ac purus non semper. Mauris condimentum tempus sagittis. Nam scelerisque sodales eros ac euismod. Aliquam pulvinar nulla nec pharetra blandit. Suspendisse vitae eleifend nibh. Etiam luctus dictum ligula in ullamcorper. Aliquam ullamcorper nisl velit, vitae tempus elit dapibus non. Phasellus ornare aliquam sapien et consequat. Donec a feugiat tellus, ac auctor tellus. Cras scelerisque lorem ac justo molestie, tincidunt eleifend lacus convallis. Phasellus lacinia nisi id egestas dapibus. Phasellus ipsum odio, maximus et tempus eget, feugiat ut nunc. Mauris nec blandit lectus. Nunc vulputate eros in scelerisque hendrerit. Nulla ipsum augue, mollis et elit nec, rutrum maximus nisl. Fusce molestie, augue non dapibus vehicula, elit metus luctus urna, vel interdum ligula odio non justo. Praesent finibus id dui quis aliquet."
	},
	{
		id: "84929015",
		title: "Sed vulputate vitae erat at.",
		author: users[2],
		publicationDate: "2023-06-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/sandias.jpeg",
		comments: [
			{
				id: "10973423",
				author: users[3],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-07-25T16:27:50.753Z"
			},
			{
				id: "40981238",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-11-25T16:36:12.162Z"
			}
		],
		score: 11,
		authorizationStatus: {
			id: "75572041",
			state: "approved"
		},
		mainText: "Cras scelerisque lorem ac justo molestie, tincidunt eleifend lacus convallis. Phasellus lacinia nisi id egestas dapibus. Phasellus ipsum odio, maximus et tempus eget, feugiat ut nunc. Mauris nec blandit lectus. Nunc vulputate eros in scelerisque hendrerit. Nulla ipsum augue, mollis et elit nec, rutrum maximus nisl. Fusce molestie, augue non dapibus vehicula, elit metus luctus urna, vel interdum ligula odio non justo. Praesent finibus id dui quis aliquet. Aenean vestibulum, tortor eu convallis pretium, ipsum neque pulvinar felis, at mollis ligula ex vitae eros. Vestibulum non placerat diam. Mauris nec dignissim ipsum, ac aliquam nisl. Ut sapien ex, congue vitae euismod quis, hendrerit quis arcu. Sed ut sagittis dolor. Mauris pulvinar auctor lectus nec fringilla. Vivamus lobortis, eros id posuere varius, turpis ipsum placerat nunc, ut pellentesque justo odio faucibus eros. Sed iaculis elementum quam, vel euismod justo porta non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ultricies quis elit nec tincidunt. Duis tristique massa at eros ullamcorper suscipit. Maecenas efficitur leo at ultrices cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue eros, rutrum non augue et, bibendum maximus velit. Ut in molestie tortor, et feugiat urna. Nulla magna quam, porttitor tincidunt varius sit amet, sollicitudin et dui. Pellentesque aliquam blandit maximus. Donec ac velit hendrerit, accumsan turpis ac, volutpat mi. Donec libero magna, sodales ac nulla sit amet, lobortis posuere nibh. Donec aliquam accumsan quam at pretium. Curabitur libero ipsum, volutpat sed efficitur eu, lacinia ut eros. In dignissim pellentesque mi eu ullamcorper. Nam posuere ultrices elit, vitae accumsan lectus porta at. In hac habitasse platea dictumst."
	},
	{
		id: "95536001",
		title: "Phasellus lacinia nisi id.",
		author: users[1],
		publicationDate: "2021-06-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/origen-de-la-naranja.jpg",
		comments: [
			{
				id: "19908558",
				author: users[2],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2021-07-25T16:27:50.753Z"
			},
			{
				id: "40008748",
				author: users[3],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2022-02-25T16:36:12.162Z"
			}
		],
		score: 9,
		authorizationStatus: {
			id: "29001141",
			state: "approved"
		},
		mainText: "Integer blandit hendrerit vehicula. Proin sed tincidunt diam. Sed blandit orci sed nisi efficitur laoreet. Donec eleifend mi a massa ultricies, id fringilla nunc rutrum. Fusce justo orci, viverra a sapien quis, molestie iaculis lorem. In vitae mauris nec ex accumsan mattis. Nullam non ligula ante. Donec in felis vitae lorem posuere posuere et et mauris. Duis eget ultricies nunc, eget elementum ligula. Curabitur condimentum odio id risus ultricies tempus. Phasellus ut ultrices orci. Morbi mollis eu orci et fermentum. Pellentesque rutrum massa id egestas sagittis. Aenean et ex fermentum, facilisis libero ut, dignissim libero. Etiam vestibulum, turpis a pharetra euismod, nulla urna vehicula nisl, vel sagittis sem metus vitae enim. Vivamus a odio metus. Vivamus sodales mollis sagittis. Integer ac nulla neque. Maecenas et mauris rutrum, dignissim lectus ac, aliquet neque. Nulla ullamcorper dui nec justo tristique, a volutpat augue ultricies. Integer eget lorem vel enim rutrum rutrum at a magna. Praesent vel tellus sapien. Etiam auctor odio vel luctus imperdiet. Donec venenatis quam nec consectetur vehicula. Maecenas scelerisque, massa ac malesuada malesuada, sem sem vestibulum odio, vitae auctor purus ante nec dolor. Nam volutpat enim dolor, hendrerit fermentum ex ultricies eget. Vivamus at velit vitae tellus fringilla auctor eu eget lectus. Donec in sapien ullamcorper dui pharetra accumsan ut at urna. Maecenas egestas dolor id semper finibus. Mauris turpis urna, interdum et ex consectetur, consequat convallis libero. Morbi a risus non libero faucibus cursus quis quis elit. Etiam gravida mauris est, eget tempor erat sagittis vel. Pellentesque consectetur posuere nibh ut ultricies. Morbi nec diam mauris. Sed dictum ornare orci, vitae vulputate dolor rhoncus sed. Etiam dictum sit amet turpis at tempus. Vestibulum et fermentum dolor. Vivamus nec justo accumsan, euismod nulla et, lobortis urna. Morbi condimentum facilisis arcu vel tincidunt. Nulla nec nisi facilisis, suscipit magna sed, dapibus neque. Cras mattis imperdiet ex varius lacinia. Nulla cursus elit sed lorem tempus, quis gravida nisl dictum. Integer at erat non enim varius dignissim. Vestibulum elementum convallis risus, id mollis ligula dapibus sed. Proin eu mi sit amet velit vulputate dictum vel in dolor. In turpis libero, tristique vitae volutpat ac, porta in tortor. Nulla in placerat ante. Nullam tempus id justo ac tempus. In vel odio rhoncus erat tincidunt vestibulum."
	}


];




module.exports = publications;