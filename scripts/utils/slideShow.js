import { formInputsObject } from './elements.js';
import { initSlider } from './lib_slider.js';

/**
 * Объект, содержащий названия изображений для слайдов.
 * @typedef {Object} SlideImages
 * @property {string} slide_1 - Изображение для слайда 1.
 * @property {string} slide_2 - Изображение для слайда 2.
 * @property {string} slide_3 - Изображение для слайда 3.
 * @property {string} slide_4 - Изображение для слайда 4.
 * @property {string} slide_5 - Изображение для слайда 5.
 * @property {string} slide_6 - Изображение для слайда 6.
 * @property {string} slide_7 - Изображение для слайда 7.
 * @property {string} slide_8 - Изображение для слайда 8.
 * @property {string} slide_9 - Изображение для слайда 9.
 * @property {string} slide_10 - Изображение для слайда 10.
 */

export const slideImages = {
    slide_1: 'slide_1',
    slide_2: 'slide_2',
    slide_3: 'slide_3',
    slide_4: 'slide_4',
    slide_5: 'slide_5',
    slide_6: 'slide_6',
    slide_7: 'slide_7',
    slide_8: 'slide_8',
    slide_9: 'slide_9',
    slide_10: 'slide_10',
};

/**
 * Контейнер для вывода слайдов.
 * @type {HTMLElement}
 */

const outputContainer = document.querySelector('.form__output');
const previousOutputContent = outputContainer.innerHTML;

/**
 * Отображает слайды в форме на основе переданных параметров.
 * @param {object} options - Параметры для отображения слайдов.
 * @param {boolean} isPaginationEnabled - Включение/отключение пагинации.
 * @param {boolean} isNavigationEnabled - Включение/отключение навигации.
 */

export function viewSlide({
    isPaginationEnadled,
    isNavigationEnabled
}) {
    const slideKeys = Object.keys(slideImages)
    const formValues = {};

    // Сохранение предыдущего содержимого вывода слайдов
    outputContainer.innerHTML = previousOutputContent;

    // Нахождение контейнера для отображения слайдов
    const slideDisplayContainer = document.querySelector('.display__form');

    // Получение значений из формы и сохранение в объекте formValues
    Object.keys(formInputsObject).forEach(function (key) {
        formValues[key] = parseInt(formInputsObject[key].value)
    });
    
    // Отображение слайдов на основе параметров
    if (isNavigationEnabled || isPaginationEnadled) {
        for (let i = 0; i < formValues.slidesCount; i++) {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            slideElement.classList.add('slider__cards');
            slideElement.innerHTML = slideImages[slideKeys[i]];
            slideDisplayContainer.appendChild(slideElement);
        }
    }

    // Отображение навигационных кнопок, если checkBox активен
    if (isNavigationEnabled) {
        const navigationWrapper = document.createElement('div');
        navigationWrapper.classList.add('wrapper');

        const prevNavigationButton = document.createElement('button');
        prevNavigationButton.textContent = 'Previous';
        prevNavigationButton.classList.add('slider__button_prev');

        const nextNavigationButton = document.createElement('button');
        nextNavigationButton.textContent = 'Next';
        nextNavigationButton.classList.add('slider__button_next');

        navigationWrapper.appendChild(prevNavigationButton);
        navigationWrapper.appendChild(nextNavigationButton);
        outputContainer.appendChild(navigationWrapper);
    }

    // Отображение конопок пагинации, если checkBox активен
    if (isPaginationEnadled) {
        const paginationElement = document.createElement('div')
        paginationElement.classList.add('pagination')
        outputContainer.appendChild(paginationElement)
    }

    // Инициализация слайдера с переданными параметрами
    initSlider(
        formValues.slidesToScroll,
        formValues.cardWidth,
        formValues.cardGap,
        formValues.cardsToShow
    )
}
