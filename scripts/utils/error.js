/**
 * Объект для проверки валидных значений.
 * @typedef {Object} validators
 * @param {boolean} slidesCount - Параметр допустимого количества слайдов.
 * @param {boolean} slidesToScroll - Параметр количества слайдов прокрутки.
 * @param {boolean} cardWidth - Параметр допустимой ширины слайда.
 * @param {boolean} cardGap - Параметр допустимого расстояния между слайдами.
 * @param {boolean} cardsToShow - Параметр допустимого количества слайдов для показа.
 */
export const validators = {
    slidesCount: (value) => value >= 1 && value <= 10,
    slidesToScroll: (value) => value >= 1 && value <= 3,
    cardWidth: (value) => value >= 100 && value <= 300,
    cardGap: (value) => value >= 30 && value <= 100,
    cardsToShow: (value) => value >= 1 && value <= 10,
};

/**
 * @typedef {Object} message
 * @param {string} slidesCount - Сообщение об ошибке о допустимом количестве слайдов.
 * @param {string} slidesToScroll - Сообщение об ошибке о количестве слайдов прокрутки.
 * @param {string} cardWidth - Сообщение об ошибке о допустимой ширине слайда.
 * @param {string} cardGap - Сообщение об ошибке о допустимом расстоянии между слайдами.
 * @param {string} cardsToShow - Сообщение об ошибке о допустимом количестве слайдов для показа.
 */
export const message = {
    slidesCount: 'Общее количество слайдов от 1 до 10',
    slidesToScroll: 'Количество прокрутки слайдов от 1 до 3',
    cardWidth: 'Ширина слайда от 300 до 1000',
    cardGap: 'Расстояние между слайдами от 30 до 100',
    cardsToShow: 'Показ слайдов от 1 до общего количества слайдов',
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
