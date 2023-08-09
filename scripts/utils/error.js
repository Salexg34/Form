export const validators = {
    slidesCount: (value) => value >= 1 && value <= 10,
    slidesToScroll: (value) => value >= 1 && value <= 3,
    width: (value) => value >= 300 && value <= 1000,
    gap: (value) => value >= 30 && value <= 100,
    toShow: (value) => value >= 1 && value <= 10,
};

export const message = {
    slidesCount: 'Общее количество слайдов от 1 до 10',
    slidesToScroll: 'Количество прокрутки слайдов от 1 до 3',
    width: 'Ширина слайда от 300 до 1000',
    gap: 'Расстояние между слайдами от 30 до 100',
    toShow: 'Показ слайдов от 1 до общего количества слайдов',
};

export function createErrorElement(errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    return errorElement;
}
