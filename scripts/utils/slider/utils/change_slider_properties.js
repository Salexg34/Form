/**
 * Модуль changeSliderProperties
 * @module utils/change_slider_properties
 * 
 * Изменяет свойства слайдера, такие как ширина карточек, промежуток между карточками и количество карточек для отображения.
 *
 * @param {object} changeSliderProperties - Объект для изменения свойств слайдера.
 * @param {number} changeSliderProperties.cardWidth - Ширина  карточки в пикселях.
 * @param {number} changeSliderProperties.gap - Промежуток между карточками в пикселях.
 * @param {number} changeSliderProperties.toShow - Количество карточек для отображения одновременно.
 * @returns {void}
 */
export const changeSliderProperties = function ({width: cardWidth, gap, toShow})  {
    const slider = document.querySelector('.slider');

    slider.style.setProperty('--cards-width', cardWidth + 'px');
    slider.style.setProperty('--cards-gap', gap + 'px');
    slider.style.setProperty('--cards-to-show', toShow);
}
