/**
 * Модуль checkOffset
 * @module utils/check_offset
 
 * Проверяет смещение (offset) и применяет соответствующие изменения для кнопок и слайдера.
 *
 * @param {object} check - Объект с параметрами для проверки.
 * @param {number} check.offset - Текущее смещение слайдера.
 * @param {number} check.maxWidth - Максимальное допустимое смещение слайдера.
 * @param {HTMLElement} check.buttonPrev - Кнопка "Предыдущий слайд".
 * @param {HTMLElement} check.sliderContainer - Обертка слайдера.
 * @param {HTMLElement} check.buttonNext - Кнопка "Следующий слайд".
 * @returns {void}
 */

export function checkOffset({offset, maxWidth, buttonPrev, sliderContainer, buttonNext}) {
    if (offset >= 0) {
        buttonPrev.setAttribute('disabled', true);
        sliderContainer.style.transform = `translateX(${0}px)`;
        offset = 0;

    } else {
        buttonPrev.removeAttribute('disabled');
    }
    if (offset <= -maxWidth) {
        buttonNext.setAttribute('disabled', true);
        sliderContainer.style.transform = `translateX(${-maxWidth}px)`;
        offset = -maxWidth;
        console.log('stop', offset, -maxWidth)
    } else {
        buttonNext.removeAttribute('disabled');
    }
};