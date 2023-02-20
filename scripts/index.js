// imports
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialcards.js'
// object-config for form validation
const elementsForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_type_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};
// all variables
const buttonEdit = document.querySelector('.button_type_edit');
const buttonAdd = document.querySelector('.button_type_add');
const buttonsClose = document.querySelectorAll('.button_type_close');
const popupProfile = document.querySelector('.popup_type_profile');
const nameInput = popupProfile.querySelector('#profile-name');
const jobInput = popupProfile.querySelector('#profile-job');
const popupCards = document.querySelector('.popup_type_cards');
const buttonAddCard = popupCards.querySelector('.form__submit')
const cardNameInput = popupCards.querySelector('#card-name');
const cardLinkInput = popupCards.querySelector('#card-link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__info');
const formProfile = document.forms['form-profile'];
const formCards = document.forms['form-cards'];
const popupPlace = document.querySelector('.popup_type_place');
const popupPlaceImg = popupPlace.querySelector('.popup__image');
const popupPlaceName = popupPlace.querySelector('.popup__caption');
const places = document.querySelector('.places');
const popups = document.querySelectorAll('.popup');
// this function enables validation for each form
const formValidators = {};

function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach((form) => {
    const validator = new FormValidator(obj, form);
    const formName = form.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(elementsForValidation);
// this function creates card
function createCard(item) {
  const card = new Card (item.link, item.name, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}
// this function opens popup
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};
//this function opens card`s popup
function handleCardClick(name, link) {
  popupPlaceImg.src = link;
  popupPlaceImg.alt = name;
  popupPlaceName.textContent = name;
  openPopup(popupPlace)
}
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
  const cardElement = createCard(newCard);
  places.prepend(cardElement);
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
// close popup by pressing esc
function closePopupByEsc(evt) {
  if(evt.key === 'Escape'){
    popups.forEach(closePopup);
  };
};
// close popup bu clicking on overlay and X button
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      };
      if (evt.target.classList.contains('button_type_close')) {
        closePopup(popup);
      };
  });
});
// open profile popup
buttonEdit.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
  formValidators['form-profile'].resetValidation();
});
// open cards popup
buttonAdd.addEventListener('click', function() {
   openPopup(popupCards);
   buttonAddCard.classList.add('form__submit_type_inactive');
   buttonAddCard.setAttribute('disabled', '');
   formValidators['form-cards'].resetValidation();
});
// submit cards form
formCards.addEventListener('submit', submitCardsForm);
// submit profile form
formProfile.addEventListener('submit', submitProfileForm);
// loop through an array initialCards
initialCards.forEach(elem => {
  const cardElement = createCard(elem);
  places.append(cardElement);
});
