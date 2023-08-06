/**
 * Во всех input должны быть целые числа
 * Числа не могут быть отрицательными
 * toShow не должен превышать значение slidesCount
 * Проверка на минимальные значения вводимые в поля (value > 0
 * Проверка на максимальные значения полей
 */

const slidesCount = document.querySelector('input[name = "slidesCount"]');
const slidesToScroll = document.querySelector('input[name = "slidesToScroll"]');
const width = document.querySelector('input[name = "width"]');
const gap = document.querySelector('input[name = "gap"]');
const toShow = document.querySelector('input[name = "toShow"]');
const createBtn = document.querySelector('button');
const displayForm = document.querySelector('.display__form')

function createErrorElement(errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    return errorElement;
}

function checkSlideCount() {
    const result = slidesCount.value >= 1 && slidesCount.value < 30;
    const error = createErrorElement('Общее количество слайдов от 1 до 10');
    const errorClass = slidesCount.parentElement.querySelector('.error');
    // slidesCount.parentElement.append(error);

    !result && slidesCount.parentElement.append(error);
    errorClass && slidesCount.parentElement.removeChild(errorClass);
    
    console.log(result);

    return result;
}

// function checkSlideCount() {
//     const result = slidesCount.value >= 1 && slidesCount.value < 10;
//     const error = createErrorElement('Общее количество слайдов от 1 до 10');
//     const errorClass = slidesCount.parentElement.querySelector('.error');

//     if (!result) {
//         slidesCount.parentElement.append(error);
//     } else {
//         if (errorClass) {
//             slidesCount.parentElement.removeChild(errorClass);
//         }
//     }
//     return result;
// }

function checkSlidesToScroll() {
    const result = slidesToScroll.value >= 1 && slidesToScroll.value < 4;
    const error = createErrorElement('Количество прокрутки слайдов от 1 до 3');
    const errorClass = slidesToScroll.parentElement.querySelector('.error');

    !result && slidesToScroll.parentElement.append(error);
    errorClass && slidesToScroll.parentElement.removeChild(errorClass);
    
    console.log(result);

    return result;

}

slidesCount.addEventListener('input', checkSlideCount);
slidesToScroll.addEventListener('input', checkSlidesToScroll);

createBtn.addEventListener('click', function (event) {
    event.preventDefault()

    if (!checkSlideCount()) return false;
    if (!checkSlidesToScroll()) return false;

    // if (slidesToScroll.value < 1 || slidesToScroll.value > 4) {
    //     alert("Количество прокрутки слайдов от 1 до 3");
    //     return false;
    // }
    if (width.value < 300 || width.value > 1000) {
        alert("Ширина слайда от 300 до 1000");
        return false;
    }
    if (gap.value < 30 || gap.value > 100) {
        alert("Расстояние между слайдами от 30 до 100");
        return false;
    }
    if (toShow.value < 1 || toShow.value > slidesCount.value) {
        alert("Показ слайдов от 1 до общего количества слайдов");
        return false;
    }
});
// dspForm();


// const dspForm = function () {

//     displayForm.innerHTML = 'slidesCount.value';
//     console.log('dfjkdhkdhkfhk');

// }
