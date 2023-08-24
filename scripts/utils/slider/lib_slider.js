import { getMaxWidth } from "./utils/get_max_width.js";
import { changeSliderProperties } from "./utils/change_slider_properties.js";
import { findElements } from "./utils/find_elements.js";
import { checkOffset } from "./utils/check_offset.js";
import { paginationSlider } from "./utils/pagination_slider.js";

/**
 * InitSlider
 * @param {number} scroll - Количество прокручиваемых слайдов 
 * @param {number} cardWidth - Ширина слайда
 * @param {number} cardGap - отступ между слайдами
 * @param {number} toShow - Количество вывода слайдов к показу
 */
export const initSlider = function (scroll, cardWidth, cardGap, toShow) {
    const {
        slidesCount,
        buttonNext,
        buttonPrev,
        sliderWrapper,
        pagination
    } = findElements();

    if (toShow <= scroll) {
        scroll = toShow;
    };

    changeSliderProperties({ cardWidth, cardGap, toShow });

    const maxWidth = getMaxWidth({ width: cardWidth, cardGap, slidesCount, toShow });
    // const fullCardsWidth = getFullCardsWidth({width, gap, scroll})

    let offset = 0;
    let currentSlideIndex = 1;
    
    checkOffset({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });

    buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev.addEventListener('click', function () {
        turnSlides('left');

    });

    document.querySelectorAll('.slider__cards').forEach((item, idx) => {
        item.setAttribute('data-slide-index', idx);
    })

    function turnSlides(side) {
        if (side == 'left') {
            currentSlideIndex -= 1
        } else if (side == 'rigth') {
            currentSlideIndex += 1
        }

        updateSliderProperties(currentSlideIndex);
    };
   
    paginationSlider({ slidesCount, pagination, choiceSlider: updateSliderProperties });

    function updateSliderProperties(slideOffset) {

        currentSlideIndex = slideOffset;

        const activeElements = document.querySelectorAll('div.active');
        activeElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentElements = document.querySelectorAll(`[data-slide-index = '${currentSlideIndex}']`);
        currentElements.forEach(function (item) {
            item.classList.add('active')
        })

        offset = -((cardWidth + cardGap) * currentSlideIndex) + (cardWidth + cardGap);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        checkOffset({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });
    }
};

