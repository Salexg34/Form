/**
 * Объект для проверки валидных значений.
 * @typedef {Object} validators
 * @param {boolean} slidesCount - Параметр допустимого количества слайдов.
 * @param {boolean} slidesToScroll - Параметр количества слайдов прокрутки.
 * @param {boolean} width - Параметр допустимой ширины слайда.
 * @param {boolean} gap - Параметр допустимого расстояния между слайдами.
 * @param {boolean} toShow - Параметр допустимого количества слайдов для показа.
 */
export const validators = {
    slidesCount: (value) => value >= 1 && value <= 10,
    slidesToScroll: (value) => value >= 1 && value <= 3,
    width: (value) => value >= 100 && value <= 300,
    gap: (value) => value >= 30 && value <= 100,
    toShow: (value) => value >= 1 && value <= 10,
};

/**
 * @typedef {Object} message
 * @param {string} slidesCount - Сообщение об ошибке о допустимом количестве слайдов.
 * @param {string} slidesToScroll - Сообщение об ошибке о количестве слайдов прокрутки.
 * @param {string} width - Сообщение об ошибке о допустимой ширине слайда.
 * @param {string} gap - Сообщение об ошибке о допустимом расстоянии между слайдами.
 * @param {string} toShow - Сообщение об ошибке о допустимом количестве слайдов для показа.
 */
export const message = {
    slidesCount: 'Общее количество слайдов от 1 до 10',
    slidesToScroll: 'Количество прокрутки слайдов от 1 до 3',
    width: 'Ширина слайда от 300 до 1000',
    gap: 'Расстояние между слайдами от 30 до 100',
    toShow: 'Показ слайдов от 1 до общего количества слайдов',
    checkBoxError: 'Обязательно отметьте checkBox',
};

/**
 * 
 * @param {string} errorMessage - Сообщение об ошибке.
 * @returns {HTMLElement} - ЭЛемент отображения ошибки.
 */

export function createErrorElement(errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    return errorElement;
}
