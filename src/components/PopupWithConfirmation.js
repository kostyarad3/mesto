import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form_type_confirmation');
  }

  submitFormCb(foo) {
    this._submit = foo;
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit()
    })
  }
}
