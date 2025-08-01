export function getRandomElements(arr, n) {
	const shuffled = arr.slice().sort(() => Math.random() - 0.5);
	return shuffled.slice(0, n);
}
