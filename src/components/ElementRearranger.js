export default class ElementRearranger {
	constructor(image, title, stickySelector) {
		this.image = image;
		this.title = title;
		this.stickySelector = stickySelector;
	}

	returnItems(isSticky) {
		const stickyDiv = document.querySelector(`.${this.stickySelector}`);

		if (isSticky && stickyDiv) {
			stickyDiv.remove();
		}

		const section = this.image.closest('section');
		section.append(this.image);
	}

	rearrangeElements(isSticky) {
		const containsStickyBlock =
			this.title.nextElementSibling.classList.contains(this.stickySelector);

		if (isSticky && !containsStickyBlock) {
			const newDiv = document.createElement('div');
			newDiv.classList.add(this.stickySelector);
			newDiv.prepend(this.image);
			this.title.after(newDiv);
		} else if (
			!containsStickyBlock &&
			this.title.nextElementSibling !== this.image
		) {
			this.title.after(this.image);
		}
	}
}
