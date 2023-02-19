export class FormValidator {
  constructor (obj, form) {
    this._formSelector = obj.formSelector
    this._inputSelector = obj.inputSelector
    this._submitButtonSelector = obj.submitButtonSelector
    this._inactiveButtonClass = obj.inactiveButtonClass
    this._inputErrorClass = obj.inputErrorClass
    this._errorClass = obj.errorClass
    this._form = form;
  };

  _handleButtonState() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmit = this._form.querySelector(this._submitButtonSelector)
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(this._inactiveButtonClass, !this._isFormValid);
  };

  _showError() {
    console.log(this._input)
    this._input.classList.add(this._inputErrorClass);
    this._errorSpan.textContent = this._input.validationMessage;
    this._errorSpan.classList.add(this._errorClass);
};

  _hideError() {
    this._input.classList.remove(this._inputErrorClass);
    this._errorSpan.classList.remove(this._errorClass);
    this._errorSpan.textContent = '';
};

  _handleInputValidity() {
    this._inputs.forEach(input => {
      this._input = input;
      this._inputNameAttribute = this._input.getAttribute('name');
      this._errorSpan = document.getElementById(`${this._inputNameAttribute}-error`);

      if (this._input.validity.valid) {
        this._hideError();
      } else {
        this._showError();
      };

    });
  };

  _setInputsListeners() {
    this._inputs = this._form.querySelectorAll(this._inputSelector)
    this._inputs.forEach(input => {
      input.addEventListener('input' , () => {
        this._handleButtonState();
        this._handleInputValidity ();
      });
    });
  };

  enableValidation() {
    this._handleButtonState();
    this._setInputsListeners();
  };

};




