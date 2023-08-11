/**
 *  Объект, для настройки слайдера.
 * @typedef {Object} obj
 * @property {HTMLInputElement} slidesCount - Элемент input для указания общего количества слайдов.
 * @property {HTMLInputElement} slidesToScroll - Элемент input для указания количества прокручиваемых слайдов.
 * @property {HTMLInputElement} width - Элемент input для указания ширины слайда.
 * @property {HTMLInputElement} gap - Элемент input для указания промежутка между слайдами.
 * @property {HTMLInputElement} toShow - Элемент input для указания количества показываемых слайдов.
 */

export const obj = {
    slidesCount: document.querySelector('input[name="slidesCount"]'),
    slidesToScroll: document.querySelector('input[name="slidesToScroll"]'),
    width: document.querySelector('input[name="width"]'),
    gap: document.querySelector('input[name="gap"]'),
    toShow: document.querySelector('input[name="toShow"]'),
};

/**
 * @type {HTMLButtonElement} createBtn - Элемент кнопки для создания слейдера.
 */

export const createBtn = document.querySelector('button');
