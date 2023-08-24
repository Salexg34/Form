import { formInputsObject } from './elements.js';
import { validators, message, createErrorElement } from './error.js';
import { viewSlide } from './slideShow.js';

/**
 * Проверка формы на наличие ошибок.
 * @param {string} key - Ключ для доступа к соответствующему элементу формы.
 * @returns {boolean} Результат проверки формы (true - форма прошла валидацию, false - есть ошибки).
 */

export function checkFormInput(key) {
    const input = formInputsObject[key];
    const parent = input.parentElement;

    const result = validators[key](input.value);
    const errorMessage = message[key];
    const error = createErrorElement(errorMessage);
    const errorClass = parent.querySelector('.error');

    !result && parent.append(error);
    errorClass && parent.removeChild(errorClass);

    return result;
};

/**
 * Выполняет валидацию формы и отображение ошибок.
 */

export function validateForm() {
    let firstErrorElement = null;
    const navigationCheckbox = document.querySelector('input[name="navigation__buttons"]');
    const paginationCheckbox = document.querySelector('input[name="pagination__buttons"]');
    const checkBoxElement = document.querySelector('.check__box');
    const checkBoxError = document.querySelector('.check__box .error');

    for (let key of Object.keys(formInputsObject)) {
        firstErrorElement = !firstErrorElement && !checkFormInput(key)
            ? formInputsObject[key]
            : firstErrorElement;
    }
    // Удаление сообщения об ошибке, если оно есть
    checkBoxError && checkBoxElement.removeChild(checkBoxError);

    // Проверка, что хотя бы один из чекбоксов выбран
    if (!navigationCheckbox.checked && !paginationCheckbox.checked) {
        const error = createErrorElement(message.checkBoxError);
        checkBoxElement.appendChild(error);
        return
    }

    // Если есть ошибки, установить фокус на первом элементе с ошибкой,
    // иначе вызвать функцию отображения слайдов
    if (firstErrorElement) {
        firstErrorElement.focus();
    } else viewSlide({
        isNavigationEnabled: navigationCheckbox.checked,
        isPaginationEnadled: paginationCheckbox.checked,
    });
}
