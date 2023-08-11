import { createBtn } from './scripts/utils/elements.js';
import { focusOnFirstError } from './scripts/utils/validation.js';

createBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    focusOnFirstError();
});
