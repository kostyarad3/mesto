// initial object with selectors and classes
const elementsForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_type_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};
// handle button state function
function handleButtonState (form, obj) {
  const buttonSubmit = form.querySelector(obj.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(obj.inactiveButtonClass, !isFormValid);
};
// function shows error on input and span
function showError (input, span, obj) {
  input.classList.add(obj.inputErrorClass);
  span.textContent = input.validationMessage;
  span.classList.add(obj.errorClass);
};
// function hides error on input and span
function hideError (input, span, obj) {
  input.classList.remove(obj.inputErrorClass);
  span.classList.remove(obj.errorClass);
  span.textContent = '';
};
// function checks single input validity
function handleInputValidity (input, obj) {
  const inputNameAttribute = input.getAttribute('name');
  const errorSpan = document.getElementById(`${inputNameAttribute}-error`);
  if (input.validity.valid) {
    hideError(input, errorSpan, obj);
  } else {
    showError(input, errorSpan, obj);
  };
};
// function sets listeners on every input
function setInputsListeners (form, obj) {
  inputs.forEach(input => {
    input.addEventListener('input' , () => {
      handleButtonState (form, obj);
      handleInputValidity (input, obj);
    });
  });
};
// main function that checks all form validity
function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach(form => {
    handleButtonState (form, obj);
    setInputsListeners(form, obj);
  });
};

enableValidation(elementsForValidation);



