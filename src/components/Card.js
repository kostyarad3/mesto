export class Card {
  constructor(link, text, templateSelector, handleCardClick) {
    this._link = link;
    this._text = text;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.place__image');
    this._cardName = this._element.querySelector('.place__name');
    this._likeButton = this._element.querySelector('.place__like');
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
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._text;
    this._cardName.textContent = this._text;

    return this._element;
  };

  _handleLikePopup() {
    this._likeButton.classList.toggle('place__like_active');
  };

  _handleDeleteCard() {
    this._element.remove();
  };

  _setEventListeners() {

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._text, this._link);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikePopup();
    });

    this._element.querySelector('.place__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });

  };

};
