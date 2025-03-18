export * from './posts.types';
export * from './relay-data.types';

export interface Wine {
	title: string;
	price: number;
	url: string;
	score: number;
}

// export type { Wine };

// Define an interface for a Post.
export interface Post {
	id: string;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	plainExcerpt: string;
	uri: string;
	author: {
		name: string;
		avatar: {
			url: string;
		};
	};
	featuredImage: {
		mediaItemUrl: string;
	};
}

// Define an interface for the query result.
// export interface PostsQueryResult {
// 	posts: {
// 		edges: {
// 			node: Post;
// 		}[];
// 	};
// }
