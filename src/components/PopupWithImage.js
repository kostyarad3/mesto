import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPlaceImg = this._popup.querySelector('.popup__image');
    this._popupPlaceName = this._popup.querySelector('.popup__caption');
  };

  open(name, link) {
    this._popupPlaceImg.src = link;
    this._popupPlaceImg.alt = name;
    this._popupPlaceName.textContent = name;
    super.open();
  };
};
