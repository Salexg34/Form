import { updateSliderPosition } from "./choice_slider.js";

/**
 * Модуль paginationSlider Создает пагинацию для слайдера и назначает обработчики событий для переключения слайдов.
 * @module utils/pagination_slider
 * 
 * @param {object} paginationSlider - Объект с параметрами для создания пагинации и обработчиков событий.
 * @param {number} paginationSlider.slidesCount - Общее количество слайдов в слайдере.
 * @param {HTMLElement} paginationSlider.pagination - Ссылка на элемент пагинации слайдера, куда будут добавлены точки для навигации.
 * @param {function} paginationSlider.updateSliderPosition - Обновляет позицию слайдера, включая отображение активных элементов и смещение.
 * @returns {void}
 */

export function paginationSlider({
    slidesCount,
    pagination,
    updateSliderPosition
}) {
    /**
     * Создает точки для пагинации и назначает обработчики событий для переключения слайдов
     * @param { number } i - Индекс текущей точки пагинации
     */
    for (let i = 1; i < slidesCount - 1; i++) {
        const paginationDot = document.createElement('div');
        paginationDot.classList.add('dot');
        paginationDot.setAttribute('data-slide-index', i);
        paginationDot.innerHTML = '<img src="/img/paginationDotActive.svg">';
        pagination.appendChild(paginationDot);

        if (i == 1) {
            paginationDot.classList.add('active');
            document.querySelector(`[data-slide-index = '${i}']`).classList.add('active');
        }

        paginationDot.addEventListener('click', function () {
            updateSliderPosition(i);
        });
    };
};
