// all elements to open card popup
import { openPopup, popupPlace, popupPlaceImg, popupPlaceName } from "./index.js";

export class Card {
  constructor(image, text, templateSelector) {
    this._image = image;
    this._text = text;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place')
    .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__image').src = this._image;
    this._element.querySelector('.place__image').alt = this._text;
    this._element.querySelector('.place__name').textContent = this._text;

    return this._element;
  };

  _handleLikePopup() {
    this._element
    .querySelector('.place__like')
    .classList
    .toggle('place__like_active');
  };

  _handleOpenPopup() {
    popupPlaceImg.src = this._image;
    popupPlaceImg.alt = this._text;
    popupPlaceName.textContent = this._text;
    openPopup(popupPlace);
  };

  _handleDeleteCard() {
    this._element.remove();
  };

  _setEventListeners() {

    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.place__like').addEventListener('click', (evt) => {
      this._handleLikePopup();
      evt.stopPropagation();
    });

    this._element.querySelector('.place__delete').addEventListener('click', (evt) => {
      this._handleDeleteCard();
      evt.stopPropagation();
    });

  };

};
