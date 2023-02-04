// all variables
const buttonEdit = document.querySelector('.button_type_edit');
const buttonAdd = document.querySelector('.button_type_add');
const buttonsClose = document.querySelectorAll('.button_type_close');
const popupProfile = document.querySelector('.popup_type_profile');
const buttonSaveProfile = popupProfile.querySelector('.form__submit');
const nameInput = popupProfile.querySelector('#profile-name');
const jobInput = popupProfile.querySelector('#profile-job');
const popupCards = document.querySelector('.popup_type_cards');
const buttonAddCard = popupCards.querySelector('.form__submit')
const cardNameInput = popupCards.querySelector('#card-name');
const cardLinkInput = popupCards.querySelector('#card-link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__info');
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');
const cardTemplate = document.querySelector('#card-template').content;
const popupPlace = document.querySelector('.popup_type_place');
const popupPlaceImg = popupPlace.querySelector('.popup__image');
const popupPlaceName = popupPlace.querySelector('.popup__caption');
const places = document.querySelector('.places');
const popups = document.querySelectorAll('.popup');
const inputs = Array.from(document.querySelectorAll('.form__input'));
const inputsProfile = Array.from(popupProfile.querySelectorAll('.form__input'));
// this function opens popup
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};
// this function closes popup
function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};
// this function submits cards form
function submitCardsForm (evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  places.prepend(createCard(newCard));
  closePopup(popupCards);
  formCards.reset();
};
// this function submits profile form
function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}
// this function creates card
function createCard (element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImg = cardElement.querySelector('.place__image');
  cardElementImg.src = element.link;
  cardElementImg.alt = element.name;
  cardElement.querySelector('.place__name').textContent = element.name;
  // like cards
  cardElement.querySelector('.place__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like_active');
    evt.stopPropagation();
  });
  // delete cards
  cardElement.querySelector('.place__delete').addEventListener('click', function (evt) {
    evt.currentTarget.closest('.place').remove();
    evt.stopPropagation();
  });
  // open place popup
  cardElement.querySelector('.place').addEventListener('click', function () {
    popupPlaceImg.src = element.link;
    popupPlaceImg.alt = element.name;
    popupPlaceName.textContent = element.name;
    openPopup(popupPlace);
  });

  return cardElement;
};
// close popup by pressing esc
function closePopupByEsc(evt) {
  if(evt.key === 'Escape'){
    popups.forEach(popup => {
      closePopup(popup);
    });
  };
};
// handle popup closing by overlay click and esc press
popups.forEach(popup => {
  document.addEventListener('mousedown', function (evt) {
    if (evt.target === popup) {
      closePopup(popup);
    };
  });
});
// open profile popup
buttonEdit.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
  buttonSaveProfile.classList.remove('form__submit_type_inactive');
  buttonSaveProfile.removeAttribute('disabled');
  // to remove errors while repetated opening
  inputsProfile.forEach(input => {
    handleInputValidity (input, elementsForValidation);
  });
});
// open cards popup
buttonAdd.addEventListener('click', function() {
   openPopup(popupCards);
   buttonAddCard.classList.add('form__submit_type_inactive');
   buttonAddCard.setAttribute('disabled', '');
});
// close popup
buttonsClose.forEach(button => {
  button.addEventListener('click', function(evt) {
    closePopup(evt.currentTarget.closest('.popup'));
  });
});
// submit cards form
formCards.addEventListener('submit', submitCardsForm);
// submit profile form
formProfile.addEventListener('submit', submitProfileForm);
// loop through an array initialCards
initialCards.forEach (function (card) {
  places.append(createCard(card));
});
