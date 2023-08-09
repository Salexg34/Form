import { createBtn } from './scripts/utils/elements.js';
import { focusOnFirstError } from './scripts/utils/validation.js';

createBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    focusOnFirstError();
    
    // for (let key of Object.keys(obj)) {
    //     if (!checkForm(key)) {

    //         obj[`${key}`].focus();
    //         
    //     }
    //     // разобраться почему не рабоатет return 
});



// Object.keys(obj).forEach(function (key) {
//     obj[key].addEventListener('blur', function () {
//         checkForm(key);
//     });
// });
