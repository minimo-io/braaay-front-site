import type { RelayData } from './relay-data.types';

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

// export interface PostsQueryResult {
// 	data: {
// 		posts: RelayData<GraphQLPost>;
// 	};
// }
export interface PostsQueryResult {
	posts: RelayData<GraphQLPost>;
}

// And the raw GraphQL node structure for posts:
export interface GraphQLPost {
	id: string;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	uri: string;
	author: {
		node: {
			name: string;
			avatar: { url: string };
		};
	};
	featuredImage: {
		node: {
			mediaItemUrl: string;
		};
	};
}
