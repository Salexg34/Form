import { createBtn } from './scripts/utils/elements.js';
import { validateForm } from './scripts/utils/validation.js';

createBtn.addEventListener('click', function (event) {
    event.preventDefault();
    validateForm();
});
