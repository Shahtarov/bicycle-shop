export default class Scroll {
	constructor(container) {
		this._container = container;
		this._isDragging = false;
		this._startX = 0;
		this._scrollLeft = 0;
	}

	_handleMouseDown(e) {
		e.preventDefault();
		this._isDragging = true;
		this._startX = e.pageX - this._container.offsetLeft;
		this._scrollLeft = this._container.scrollLeft;
	}

	_handleMouseUp(e) {
		e.preventDefault();
		this._isDragging = false;
	}

	_handleMouseLeave() {
		this._isDragging = false;
	}

	_handleMouseMove(e) {
		if (!this._isDragging) return;
		e.preventDefault();
		const x = e.pageX - this._container.offsetLeft;

		const walk = x - this._startX;
		this._container.scrollLeft = this._scrollLeft - walk;
	}

	_handleMouseWheel(e) {
		e.preventDefault();
		this._container.scrollLeft += e.deltaX;
		window.scrollBy(0, e.deltaY);
	}

	setEventListeners() {
		this._container.addEventListener(
			'mousedown',
			this._handleMouseDown.bind(this)
		);
		this._container.addEventListener('mouseup', this._handleMouseUp.bind(this));
		this._container.addEventListener(
			'mouseleave',
			this._handleMouseLeave.bind(this)
		);
		this._container.addEventListener(
			'mousemove',
			this._handleMouseMove.bind(this)
		);
		this._container.addEventListener(
			'wheel',
			this._handleMouseWheel.bind(this)
		);
	}
}
