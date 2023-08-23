import { formInputsObject } from './elements.js';
import { initSlider } from './lib_slider.js';

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

const outputContainer = document.querySelector('.form__output');
const previousOutputContent = outputContainer.innerHTML;

/**
 * Отображает слайды в форме на основе переданных параметров.
 * @param {boolean} isPaginationEnabled - Включение/отключение пагинации.
 * @param {boolean} isNavigationEnabled - Включение/отключение навигации.
 */

export function viewSlide({
    isPaginationEnadled,
    isNavigationEnabled
}) {
    console.log('viewSlides');
    const slideKeys = Object.keys(slideImages)
    const formValues = {};

    outputContainer.innerHTML = previousOutputContent;
    const display = document.querySelector('.display__form');

    Object.keys(formInputsObject).forEach(function (key) {
        formValues[key] = parseInt(formInputsObject[key].value)
    });
    if (isNavigationEnabled || isPaginationEnadled) {
        for (let i = 0; i < formValues.slidesCount; i++) {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            slideElement.classList.add('slider__cards');

            slideElement.innerHTML = slideImages[slideKeys[i]];

            display.appendChild(slideElement);
        }
    }
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
    if (isPaginationEnadled) {
        const paginationElement = document.createElement('div')
        paginationElement.classList.add('pagination')
        outputContainer.appendChild(paginationElement)
    }
    initSlider(formValues.slidesToScroll, formValues.width, formValues.gap, formValues.toShow)
}

