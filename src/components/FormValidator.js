export default class FormValidator {
	constructor({ inputSelector, submitSelector, errorClass }, form) {
		this.form = form;
		this.input = this.form.querySelector(inputSelector);
		this.submit = this.form.querySelector(submitSelector);
		this.errorClass = this.form.querySelector(errorClass);
	}

	// Отображение ошибки
	#showInputError(input) {
		input.dataset.message;
		this.errorClass.textContent = input.dataset.message;
	}

	// Удаление ошибки
	#hideInputError() {
		this.errorClass.textContent = '';
	}

	// Включение ошибки
	#showErrorText(input) {
		if (!input.validity.valid) {
			this.#showInputError(input);
		} else {
			this.#hideInputError();
		}
	}

	#showButton(input) {
		if (input.value.length >= 1) {
			this.submit.style.display = 'block';
		} else {
			this.submit.style.display = 'none';
		}
	}

	// Установка слушателя на input
	#setEventListener() {
		this.input.addEventListener('input', (e) => {
			this.#showErrorText(e.target);
			this.#showButton(e.target);
		});
	}

	enableValidation() {
		this.#setEventListener();

		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (this.input.validity.valid) {
				e.currentTarget.reset();
				this.input.value = 'Круто!';
				this.submit.style.display = 'none';
			}
		});
	}
}
