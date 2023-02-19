// imports
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialcards.js'
// object - config for form validation
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
const popupPlace = document.querySelector('.popup_type_place');
const popupPlaceImg = popupPlace.querySelector('.popup__image');
const popupPlaceName = popupPlace.querySelector('.popup__caption');
const places = document.querySelector('.places');
const popups = document.querySelectorAll('.popup');
const inputsProfile = Array.from(popupProfile.querySelectorAll('.form__input'));
const spansProfile = Array.from(popupProfile.querySelectorAll('.form__input-error'));
const forms = Array.from(document.querySelectorAll('.form'));
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

  const newCard = new Card (cardLinkInput.value, cardNameInput.value, '#card-template')
  const cardElement = newCard.generateCard();
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
    popups.forEach(popup => {
      closePopup(popup);
    });
  };
};
// this function resets form`s elements styles
function resetFormStyle(inputs, spans, button) {
  inputs.forEach(input => {
    input.classList.remove('form__input_type_error');
  });
  spans.forEach(span => {
    span.classList.remove('form__input-error_active');
  });
  button.classList.remove('form__submit_type_inactive');
  button.removeAttribute('disabled');
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
  resetFormStyle(inputsProfile, spansProfile, buttonSaveProfile);
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
initialCards.forEach(elem => {
  const card = new Card(elem.link, elem.name, '#card-template')
  const cardElement = card.generateCard();
  places.append(cardElement);
});
// loop through forms to validate
forms.forEach(form => {
  const formValidation = new FormValidator(elementsForValidation, form)
  formValidation.enableValidation(elementsForValidation);
});
// export for Card class to open card popup
export { openPopup, popupPlace, popupPlaceImg, popupPlaceName }
