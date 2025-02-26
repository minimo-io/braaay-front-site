export function smoothScroll(node: HTMLElement) {
	node.addEventListener('click', (event) => {
		event.preventDefault();

		const targetId = node.getAttribute('href')?.slice(1); // Remove the #
		const targetElement = targetId ? document.getElementById(targetId) : null;

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});

	return {
		destroy() {
			node.removeEventListener('click', () => {});
		}
	};
}
