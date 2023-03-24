import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
    this._submitForm = submitForm;
    this._submitButton = this._form.querySelector('.form__submit');
    this._buttonInitialText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close(){
    this._form.reset();
    super.close();
  }

  setEventListeners(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  isButtonLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...'
    } else {
      this._submitButton.textContent = this._buttonInitialText;
    }
  }
}
