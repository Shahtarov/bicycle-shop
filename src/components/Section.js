export default class Section {
	/**
	 * @param data {Array}
	 * @param renderer {Function}
	 * @param containerSelector {String}
	 */
	constructor({ data, renderer }, containerSelector) {
		this._items = data;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}

	/**
	 * @param element {Node}
	 */
	appendItem(element) {
		this._container.append(element);
	}

	renderItems() {
		this._items.forEach((item) => this._renderer(item));
	}
}
