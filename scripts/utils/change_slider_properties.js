/**
 * Модуль changeSliderProperties Изменяет свойства слайдера, такие как ширина карточек, 
 * промежуток между карточками и количество карточек для отображения.
 * @module utils/change_slider_properties
 *
 * @param {object} changeSliderProperties - Объект для изменения свойств слайдера.
 * @param {number} changeSliderProperties.cardWidth - Ширина  карточки в пикселях.
 * @param {number} changeSliderProperties.cardGap - Промежуток между карточками в пикселях.
 * @param {number} changeSliderProperties.cardsToShow - Количество карточек для отображения одновременно.
 * @param {number} changeSliderProperties.cardsToScroll - Количество прокручиваемых карточек.
 * @returns {void}
 */
export const changeSliderProperties = function ({ cardWidth, cardGap, cardsToShow, cardsToScroll }) {
    const slider = document.querySelector('.slider');

    slider.style.setProperty('--cards-width', cardWidth + 'px');
    slider.style.setProperty('--cards-gap', cardGap + 'px');
    slider.style.setProperty('--cards-to-show', cardsToShow);
    slider.style.setProperty('--cards-to-scroll', cardsToScroll);
};