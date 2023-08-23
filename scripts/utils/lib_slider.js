import { getMaxWidth } from "./get_max_width.js";
import { changeSliderProperties } from "./change_slider_properties.js";
import { findElements } from "./find_elements.js";
import { check } from "./check_offset.js";
import { paginationSlider } from "./pagination_slider.js";

/**
 * InitSlider
 * @param {number} scroll - Количество прокручиваемых слайдов 
 * @param {number} width - Ширина слайда
 * @param {number} gap - отступ между слайдами
 * @param {number} toShow - Количество вывода слайдов к показу
 */
// function turnSlides(side) {
//     if (side == 'left') {
//         currentDot -= 1;
//     } else if (side == 'right') {
//         currentDot += 1;
//     }

//     choiceSlider(currentDot);
// }
// export { turnSlides }; 

export const initSlider = function (scroll, width, gap, toShow) {
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

    changeSliderProperties({ width, gap, toShow, scroll });

    const maxWidth = getMaxWidth({ width, gap, slidesCount, toShow });

    let offset = 0;
    let currentDot = 1;

    check({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });

    buttonNext && buttonNext.addEventListener('click', function () {
        turnSlides('rigth');
    });

    buttonPrev && buttonPrev.addEventListener('click', function () {
        turnSlides('left');

    });

    document.querySelectorAll('.slider__cards').forEach((item, idx) => {
        item.setAttribute('data-slide-index', idx);
    })

    function turnSlides(side) {
        if (side == 'left') {
            currentDot -= 1
        } else if (side == 'rigth') {
            currentDot += 1
        }

        choiceSlider(currentDot);
    };

    pagination && paginationSlider({ 
        choiceSlider: choiceSlider,
        slidesCount: slidesCount,
        pagination: pagination,
        
    });

    function choiceSlider(slideIndex) {

        currentDot = slideIndex;

        const activeElements = document.querySelectorAll('div.active');
        activeElements.forEach(function (item) {
            item.classList.remove('active');
        });

        const currentElements = document.querySelectorAll(`[data-slide-index = '${currentDot}']`);
        currentElements.forEach(function (item) {
            item.classList.add('active')
        })

        offset = -((width + gap) * currentDot) + (width + gap);
        sliderWrapper.style.transform = `translateX(${offset}px)`;
        check({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });
    }
};

