import { getMaxOffset } from "./get_max_offset.js";
import { changeSliderProperties } from "./change_slider_properties.js";
import { findElements } from "./find_elements.js";
import { checkOffset } from "./check_offset.js";
import { paginationSlider } from "./pagination_slider.js";

/**
 * InitSlider инициализирует слайдер и устанавливает обработчики событий.
 * @param {number} cardsToScroll - Количество прокручиваемых слайдов 
 * @param {number} cardWidth - Ширина слайда
 * @param {number} cardGap - отступ между слайдами
 * @param {number} cardsToShow - Количество вывода слайдов к показу
 */

export const initSlider = function (cardsToScroll, cardWidth, cardGap, cardsToShow) {
    const {
        slidesCount,
        buttonNext,
        buttonPrev,
        sliderContainer,
        pagination
    } = findElements();

    if (cardsToShow <= cardsToScroll) {
        cardsToScroll = cardsToShow;
    };

    changeSliderProperties({ cardWidth, cardGap, cardsToShow, cardsToScroll });

    const maxOffset = getMaxOffset({ cardWidth, cardGap, slidesCount, cardsToShow });

    let offset = 0;
    let currentSlideIndex = 1;

    checkOffset({ offset, maxOffset, buttonPrev, sliderContainer, buttonNext });

    buttonNext && buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev && buttonPrev.addEventListener('click', function () {
        turnSlides('left');

    });

    document.querySelectorAll('.slider__cards').forEach((item, idx) => {
        item.setAttribute('data-slide-index', idx);
    })

    /**
     * Переключает слайды влево и вправо
     * @param {string } side - Направление переключения ('left' или 'right')
     */
    function turnSlides(side) {
        if (side == 'left') {
            currentSlideIndex -= cardsToScroll
        } else if (side == 'rigth') {
            currentSlideIndex += cardsToScroll
        }

        updateSliderProperties(currentSlideIndex);
    };

    pagination && paginationSlider({
        updateSliderProperties,
        slidesCount,
        pagination,
    });

    /**
     * Обновляет свойства слайдера и управляет ими.
     * @param {number } slideIndex - индекс слайда для отображения.
     */
    function updateSliderProperties(slideIndex) {

        currentSlideIndex = slideIndex;

        const activeElements = document.querySelectorAll('div.active');
        activeElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentElements = document.querySelectorAll(`[data-slide-index = '${currentSlideIndex}']`);
        currentElements.forEach(function (item) {
            item.classList.add('active')
        })

        offset = -((cardWidth + cardGap) * currentSlideIndex) + (cardWidth + cardGap);
        sliderContainer.style.transform = `translateX(${offset}px)`;
        checkOffset({ offset, maxOffset, buttonPrev, sliderContainer, buttonNext });
    }
};
