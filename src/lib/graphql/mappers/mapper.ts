import type { RelayData } from '$lib/types';

/**
 * Maps Relay‑style data to an array of transformed nodes.
 *
 * @param data - An object mapping keys to RelayData.
 * @param key - The key under which the RelayData is stored.
 * @param mapper - A function to transform each node.
 * @returns An array of transformed nodes.
 */
export function mapRelayResult<T, U, K extends string>(
	data: { [P in K]: RelayData<T> },
	key: K,
	mapper: (node: T) => U
): U[] {
	return data[key].edges.map((edge) => mapper(edge.node));
}
