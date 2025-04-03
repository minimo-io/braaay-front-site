// src/lib/types/pagination.types.ts

export interface GraphQLPagination {
	hasNextPage: string;
	hasPreviousPage: string;
	startCursor: string;
	endCursor: string;
}

export interface Pagination {
	hasNextPage: string;
	hasPreviousPage: string;
	startCursor: string;
	endCursor: string;
}
export function mapPagination(data: GraphQLPagination) {
	return { ...data };
}
