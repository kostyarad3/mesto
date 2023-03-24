export class Card {
  constructor({ item, api, templateSelector, handleCardClick, popupDeleteCard }) {
    this._item = item;
    this._api = api;
    this._link = item.link;
    this._text = item.name;
    this._itemId = item._id;
    this._likes = item.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._popupDeleteCard = popupDeleteCard;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.place__image');
    this._cardName = this._element.querySelector('.place__name');
    this._likeButton = this._element.querySelector('.place__like');
    this._trashIcon = this._element.querySelector('.place__delete');
    this._likesCounter = this._element.querySelector('.place__like-counter')
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
    this._cardImage.src = this._link;
    this._cardImage.alt = this._text;
    this._cardName.textContent = this._text;
    this._likesCounter.textContent = this._likes.length;
    this._handleUserLikesAndTrash();
    this._setEventListeners();
    return this._element;
  };

  _handleUserLikesAndTrash() {
    this._api.getUserInfo()
    .then(res => {
      if (res._id !== this._item.owner._id) {
        this._trashIcon.remove();
      }
        this._likes.forEach(user => {
        if (res._id === user._id) {
          this._likeButton.classList.add('place__like_active')
        }
      })
    })
  }

  _handleLikesState(res) {
    this._likes = res.likes;
    this._likesCounter.textContent =  this._likes.length
    this._likeButton.classList.toggle('place__like_active');
  }


  _handleDeleteCard() {
    this._element.remove();
  };

  _setEventListeners() {

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._text, this._link);
    });

    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('place__like_active')) {
        this._api.removeLike(this._itemId)
        .then(res => {
          this._handleLikesState(res)
        })
        .catch(err => console.log(err));
      } else {
        this._api.giveLike(this._itemId)
        .then(res => {
          this._handleLikesState(res)
        })
        .catch(err => console.log(err));
      }

    });

    this._trashIcon.addEventListener('click', () => {
      this._popupDeleteCard.open();
      this._popupDeleteCard.submitFormCb(
        () => {
          this._api.deleteCard(this._itemId)
          .then(() => {
            this._handleDeleteCard();
          })
          .catch(err => console.log(err));
          this._popupDeleteCard.close()
        }
      )
      }
    );

  };

};
