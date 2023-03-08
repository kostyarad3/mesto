export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    // to delete eventListener from document after popup closing
    this._closeEsc = this._handleEscClose.bind(this);
  }

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeEsc);
  }

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeEsc);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape'){
      this.close();
    };
  }

  setEventListeners(){
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      };
      if (evt.target.classList.contains('button_type_close')) {
        this.close();
      };
  });
  }
}
