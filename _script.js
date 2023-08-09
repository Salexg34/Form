/**
 * Во всех input должны быть целые числа
 * Числа не могут быть отрицательными
 * toShow не должен превышать значение slidesCount
 * Проверка на минимальные значения вводимые в поля (value > 0
 * Проверка на максимальные значения полей
 */

const obj = {
    slidesCount: document.querySelector('input[name = "slidesCount"]'),
    slidesToScroll: document.querySelector('input[name = "slidesToScroll"]'),
    width: document.querySelector('input[name = "width"]'),
    gap: document.querySelector('input[name = "gap"]'),
    toShow: document.querySelector('input[name = "toShow"]'),
}

const validators = {
    slidesCount: (value) => (value >= 1 && value < 30),
    slidesToScroll: (value) => (value >= 1 && value < 30),
    width: (value) => (value >= 1 && value < 30),
    gap: (value) => (value >= 1 && value < 30),
    toShow: (value) => (value >= 1 && value < 30),
}

const message = {
    slidesCount: 'Общее количество слайдов от 1 до 10',
    slidesToScroll: 'Количество прокрутки слайдов от 1 до 3',
    width: 'Ширина слайда от 300 до 1000',
    gap: 'Расстояние между слайдами от 30 до 100',
    toShow: 'Показ слайдов от 1 до общего количества слайдов',
}

const createBtn = document.querySelector('button');
const displayForm = document.querySelector('.display__form')

function createErrorElement(errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    return errorElement;
}

function checkForm(key) {
    const input = obj[`${key}`];
    const parent = input.parentElement;
    console.log(input);

    const result = validators[`${key}`](input.value);
    const errorMessage = message[`${key}`];
    const error = createErrorElement(errorMessage);
    const errorClass = parent.querySelector('.error');

    !result && parent.append(error);
    errorClass && parent.removeChild(errorClass);

    console.log(result);
}

Object.keys(obj).forEach(function (key) {
    obj[`${key}`].addEventListener('blur', function () {
        checkForm(key);
    });
});

createBtn.addEventListener('click', function (event) {
    event.preventDefault() // разобраться подробнее
    for (let key of Object.keys(obj)) {
        if (!checkForm(key)) {
            obj[`${key}`].focus();
        }
        // разобраться почему не рабоатет return, потому что он здесь и не нужен
    }

});




