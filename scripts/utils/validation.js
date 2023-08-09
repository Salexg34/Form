import { obj } from './elements.js';
import { validators, message, createErrorElement } from './error.js';

export function checkForm(key) {
    const input = obj[key];
    const parent = input.parentElement;

    const result = validators[key](input.value);
    const errorMessage = message[key];
    const error = createErrorElement(errorMessage);
    const errorClass = parent.querySelector('.error');

    !result && parent.append(error);
    errorClass && parent.removeChild(errorClass);

    return result;
};

export function focusOnFirstError() {
    let firstErrorElement = null;

    for (let key of Object.keys(obj)) {
        if (!checkForm(key)) {
            obj[key].focus();

            if (!firstErrorElement) {
                firstErrorElement = obj[key];
            }
        }
    }

    if (firstErrorElement) {
        firstErrorElement.focus();
    }
} 
