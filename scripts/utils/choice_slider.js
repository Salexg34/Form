/**
 * Обновляет свойства слайдера, включая отображение активных элементов и смещение.
 *
 * @param {Object} options - Объект с параметрами для обновления слайдера.
 * @param {Function} checkOffset - Функция для проверки смещения слайдера.
 * @param {number} currentSlideIndex - Индекс текущего слайда.
 * @param {number} slideOffset - Смещение слайдера.
 * @param {number} cardWidth - Ширина одной карточки слайдера.
 * @param {number} cardGap - Промежуток между карточками.
 * @param {HTMLElement} sliderContainer - Контейнер слайдера.
 * @param {number} maxOffset - Максимальное допустимое смещение слайдера.
 * @param {HTMLElement} buttonPrev - Кнопка "Предыдущий слайд".
 * @param {HTMLElement} buttonNext - Кнопка "Следующий слайд".
 * @returns {Object} - Объект с обновленными параметрами слайдера.
 */

export function updateSliderProperties({
    checkOffset,
    currentSlideIndex,
    slideOffset,
    cardWidth,
    cardGap,
    sliderContainer,
    maxOffset,
    buttonPrev,
    buttonNext
}) {
    currentSlideIndex = slideOffset;

    const activeElements = document.querySelectorAll('div.active');
    activeElements.forEach(function (item) {
        item.classList.remove('active');
    });

    const currentElements = document.querySelectorAll(`[data-slide-index='${currentSlideIndex}']`);
    currentElements.forEach(function (item) {
        item.classList.add('active');
    });

    let offset = -((cardWidth + cardGap) * currentSlideIndex) + (cardWidth + cardGap);
    sliderContainer.style.transform = `translateX(${offset}px)`;
    checkOffset({ offset, maxOffset, buttonPrev, sliderContainer, buttonNext });
};