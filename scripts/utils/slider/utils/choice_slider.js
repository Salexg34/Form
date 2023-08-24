export default function choiceSlider({ 
    checkOffset, 
    currentSlideIndex, 
    slideOffset, 
    offset, 
    width, 
    gap, 
    sliderWrapper, 
    maxWidth, 
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

    offset = -((width + gap) * currentSlideIndex) + (width + gap);
    sliderWrapper.style.transform = `translateX(${offset}px)`;
    checkOffset({ offset, maxWidth, buttonPrev, sliderWrapper, buttonNext });
};