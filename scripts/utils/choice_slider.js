/**
 * Обновляет свойства слайдера, включая отображение активных элементов и смещение.
 *
 * @param {Object} options - Объект с параметрами для обновления слайдера.
 * @param {Function} checkOffset - Функция для проверки смещения слайдера.
 * @param {number} activeSlideIndex - Индекс текущего слайда.
 * @param {number} slideOffset - Смещение слайдера.
 * @param {number} cardWidth - Ширина одной карточки слайдера.
 * @param {number} cardGap - Промежуток между карточками.
 * @param {HTMLElement} sliderWrapper - Обертка слайдера.
 * @param {number} maxOffset - Максимальное допустимое смещение слайдера.
 * @param {HTMLElement} buttonPrev - Кнопка "Предыдущий слайд".
 * @param {HTMLElement} buttonNext - Кнопка "Следующий слайд".
 * @returns {Object} - Объект с обновленными параметрами слайдера.
 */

export function updateSliderPosition({
    checkOffset,
    activeSlideIndex,
    slideOffset,
    cardWidth,
    cardGap,
    sliderWrapper,
    maxOffset,
    buttonPrev,
    buttonNext
}) {
    activeSlideIndex = slideOffset;

    const activeElements = document.querySelectorAll('div.active');
    activeElements.forEach(function (item) {
        item.classList.remove('active');
    });

    const currentElements = document.querySelectorAll(`[data-slide-index='${activeSlideIndex}']`);
    currentElements.forEach(function (item) {
        item.classList.add('active');
    });

    let offset = -((cardWidth + cardGap) * activeSlideIndex) + (cardWidth + cardGap);
    sliderWrapper.style.transform = `translateX(${offset}px)`;
    checkOffset({ offset, maxOffset, buttonPrev, sliderWrapper, buttonNext });
};