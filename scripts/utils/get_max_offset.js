/**
 * Модуль getMaxWidth Рассчитывает и возвращает максимальное смещение слайдера 
 * на основе переданных параметров.
 * @module utils/get_max_offset
 * 
 * @param {object} getMaxOffset - Объект для рассчета максимального смещения слайдера.
 * @param {number} getMaxOffset.cardWidth - Ширина каждой карточки в пикселях.
 * @param {number} getMaxOffset.cardGap - Промежуток между карточками в пикселях.
 * @param {number} getMaxOffset.slidesCount - Общее количество слайдов в слайдере.
 * @param {number} getMaxOffset.cardsToShow - Количество карточек для отображения одновременно.
 * @returns {number} Максимальное смещение слайдера (в пикселях) до последнего слайда.
 */
export const getMaxOffset = function ({cardWidth, cardGap, slidesCount, cardsToShow}) {
    return parseInt((cardWidth + cardGap) * (slidesCount - cardsToShow));
};
