/**
 * Модуль check Проверяет смещение (offset) и применяет соответствующие изменения 
 * для кнопок и слайдера.
 * @module utils/check_offset
 * 
 * @param {object} check - Параметры для проверки смещения.
 * @param {number} check.offset - Текущее смещение слайдера.
 * @param {number} check.maxOffset - Максимальное допустимое смещение слайдера.
 * @param {HTMLElement} check.buttonPrev - Кнопка "Предыдущий слайд".
 * @param {HTMLElement} check.sliderContainer - Обертка слайдера.
 * @param {HTMLElement} check.buttonNext - Кнопка "Следующий слайд".
 * @returns {void}
 */

export function checkOffset({offset, maxOffset, buttonPrev, sliderContainer, buttonNext}) {
    if (offset >= 0) {
        buttonPrev && buttonPrev.setAttribute('disabled', true);
        sliderContainer.style.transform = `translateX(${0}px)`;
        offset = 0;

    } else {
        buttonPrev && buttonPrev.removeAttribute('disabled');
    }
    if (offset <= -maxOffset) {
       buttonNext && buttonNext.setAttribute('disabled', true);
        sliderContainer.style.transform = `translateX(${-maxOffset}px)`;
        offset = -maxOffset;
        console.log('stop', offset, -maxOffset)
    } else {
        buttonNext && buttonNext.removeAttribute('disabled');
    }
};