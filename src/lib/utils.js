export const HEADER_HEIGHT = 50;

/**
 * @param {string} elementName
 */
export const scrollToElement = (elementName) => {
	/**
	 * @type {HTMLElement | null}
	 */
	const elementToScroll = document.querySelector(`[data-name=${elementName}]`);
	if (!elementToScroll) {
		throw new Error(`You messed up the element name, ${elementName} is not in the dom`);
	}
	window.scroll({
		top: elementToScroll.offsetTop - HEADER_HEIGHT,
		behavior: 'smooth'
	});
};
