/**
 *  Объект, для настройки слайдера.
 * @typedef {Object} obj
 * @property {HTMLInputElement} slidesCount - Элемент input для указания общего количества слайдов.
 * @property {HTMLInputElement} slidesToScroll - Элемент input для указания количества прокручиваемых слайдов.
 * @property {HTMLInputElement} cardWidth - Элемент input для указания ширины слайда.
 * @property {HTMLInputElement} cardGap - Элемент input для указания промежутка между слайдами.
 * @property {HTMLInputElement} cardsToShow - Элемент input для указания количества показываемых слайдов.
 */

export const formInputsObject = {
    slidesCount: document.querySelector('input[name="slidesCount"]'),
    slidesToScroll: document.querySelector('input[name="slidesToScroll"]'),
    cardWidth: document.querySelector('input[name="width"]'),
    cardGap: document.querySelector('input[name="gap"]'),
    cardsToShow: document.querySelector('input[name="toShow"]'),
};

/**
 * @type {HTMLButtonElement} createBtn - Элемент кнопки для создания слейдера.
 */

export const createBtn = document.querySelector('button');
