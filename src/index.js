import './scss/index.scss';
// import { arrayQuestions } from './components/const.js';
// import Faq from './components/Faq';

// import Section from './components/Section';
// import { partnerLogos } from './components/partnerLogos';

import {
	// reviewTemplate,
	// reviewsGalleryOverlay,
	burgerMenu,
	headerMobile,
} from './components/utils/constants.js';

// import { dataReviews } from './components/utils/dataReviews.js';
// import Scroll from './components/Scroll.js';

import Popup from './components/Popup.js';
import ElementRearranger from './components/ElementRearranger.js';

import FormValidator from './components/FormValidator.js';
// import InputEditor from './components/InputEditor.js';

const burgerMenuPopup = new Popup({
	popupElement: headerMobile,
	button: burgerMenu,
});

// Открыте бокового мобильного меню
function openMenu() {
	burgerMenu.addEventListener('click', () => {
		burgerMenuPopup.open();
	});
}
openMenu();

// Добавляем плавный скролл при нажатии на якорь
function smoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((a) => {
		a.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			target &&
				window.scrollTo({
					top: window.scrollY + target.getBoundingClientRect().top - 70, // отступ в 70px
					behavior: 'smooth',
				});
			burgerMenuPopup.close();
		});
	});
}
smoothScroll();

const sectionIntro = document.querySelector('.intro');
const introTitle = sectionIntro.querySelector('.intro__title');
const introImage = sectionIntro.querySelector('.intro__image');

const sectionWorkout = document.querySelector('.workout');
const workoutTitle = sectionWorkout.querySelector('.workout__title');
const workoutImage = sectionWorkout.querySelector('.workout__image');

const stickySelector = 'intro__sticky';

const introRearranger = new ElementRearranger(
	introImage,
	introTitle,
	stickySelector
);
const workoutRearranger = new ElementRearranger(workoutImage, workoutTitle);

// Изменение элементов
function checkScreenWidth() {
	if (window.matchMedia('(max-width: 880px)').matches) {
		introRearranger.rearrangeElements(true);
		workoutRearranger.rearrangeElements(false);
	} else if (window.matchMedia('(min-width: 881px)').matches) {
		introRearranger.returnItems(true);
		workoutRearranger.returnItems(false);
	}
}

// Вызываем функцию при загрузке страницы
checkScreenWidth();

// Добавляем слушатель событий для отслеживания изменения размера окна
window.addEventListener('resize', checkScreenWidth, true);

// Форма подписки
const formSubscribe = document.forms['form-subscribe'];

const formSelectors = {
	inputSelector: '.form-subscribe__input',
	submitSelector: '.form-subscribe__submit',
	errorClass: '.form-subscribe__input-error',
};

const validationFormSubscribe = new FormValidator(formSelectors, formSubscribe);
validationFormSubscribe.enableValidation();

// Галерея отзывов
// const reviews = new Section(
// 	{
// 		data: dataReviews,
// 		renderer: (item) => {
// 			const card = reviewTemplate.content
// 				.querySelector('.reviews-gallerey__image-container')
// 				.cloneNode(true);

// 			const image = card.querySelector('.reviews-gallery__image');
// 			image.src = item.link;
// 			image.alt = item.name;

// 			reviews.appendItem(card);
// 		},
// 	},
// 	'.reviews-gallery__overlay'
// );

// Добавление элементов бегущей строки брендов в разметку
// reviews.renderItems();

// Скролл для отзывов
// const scrollReview = new Scroll(reviewsGalleryOverlay);
// scrollReview.setEventListeners();

// Инициализация секции с бегущей строкой брендов
// const partnersFirst = new Section(
// 	{
// 		data: partnerLogos,
// 		renderer: (item) => {
// 			const card = document
// 				.querySelector('.partners__card-template')
// 				.content.querySelector('.partners__card')
// 				.cloneNode(true);

// 			const image = card.querySelector('.partners__card-image');
// 			image.src = item.link;
// 			image.alt = `логотип: ${item.name}`;

// 			partnersFirst.appendItem(card);
// 		},
// 	},
// 	'.partners__cards_part_first'
// );

// const partnersSecond = new Section(
// 	{
// 		data: partnerLogos,
// 		renderer: (item) => {
// 			const card = document
// 				.querySelector('.partners__card-template')
// 				.content.querySelector('.partners__card')
// 				.cloneNode(true);

// 			const image = card.querySelector('.partners__card-image');
// 			image.src = item.link;
// 			image.alt = `логотип: ${item.name}`;

// 			partnersSecond.appendItem(card);
// 		},
// 	},
// 	'.partners__cards_part_second'
// );

// Добавление элементов бегущей строки брендов в разметку
// partnersFirst.renderItems();
// partnersSecond.renderItems();

// const template = document.querySelector('#faq__template'); //шаблон
// const place = document.querySelector('.faq__container'); //место куда рендерить

// const faq = new Faq(arrayQuestions, template, place);

// faq.renderQuestions();
