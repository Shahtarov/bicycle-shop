export default class InputEditor {
	constructor(inputElement) {
		this.inputElement = document.querySelector(inputElement);
		this.inputElement.addEventListener('focus', this.handleFocus.bind(this));
		this.inputElement.addEventListener('blur', this.handleBlur.bind(this));
		this.inputElement.addEventListener('input', this.handleInput.bind(this));
	}

	handleFocus() {
		if (this.inputElement.value === '') {
			this.inputElement.value = '+';
		}
	}

	handleBlur() {
		if (this.inputElement.value === '+') {
			this.inputElement.value = '';
			this.inputElement.placeholder = 'Ваш телефон';
		}
	}

	handleInput() {
		this.inputElement.value = this.inputElement.value.replace(/[^\d+]/g, '');
	}
}
