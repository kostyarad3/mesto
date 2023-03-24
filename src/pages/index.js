// imports
import '../pages/index.css'
import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import {
  elementsForValidation,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  placesSelector,
  avatarButton,
  formsToValidateArray,
} from '../utils/constants.js'
// profile information
const userInfo = new UserInfo ({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__info',
  profileAvatarSelector: '.profile__avatar',
});
// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '57eaed88-c38c-4ce7-a324-426034faa455',
    'Content-Type': 'application/json'
  }
});
// INITIAL RENDER OF CARDS AND USER INFORMATION
api.getInitialData().then(items => {
  const [ profileData, initialCards ] = items;
  userInfo.setUserInfo(profileData);
  const updatedInitialCards = initialCards.reverse();
  defaultCards.renderItems(updatedInitialCards);
})
// RENDER DEFAUALT CARDS
const defaultCards = new Section ({
  renderer: (item) => {
    defaultCards.addItem(createCard(item));
  }
},
  placesSelector
);
// CALLBACK FOR CARD INSTANCE
function handleCardClick(name, link) {
  popupImage.open(name, link);
}
// THIS FUNCTION CREATES CARDS AND CARD INSTANCE
function createCard(item) {
  const card = new Card ({
    item,
    api,
    templateSelector: '#card-template',
    handleCardClick,
    popupDeleteCard
  });

  const cardElement = card.generateCard();
  return cardElement;
}
// POPUP IMAGE
const popupImage = new PopupWithImage ('.popup_type_place')
popupImage.setEventListeners();
// POPUP PROFILE
const popupProfile = new PopupWithForm ({
  popupSelector: '.popup_type_profile',
  submitForm: (inputsValues) => {
    popupProfile.isButtonLoading(true)
    api.editUserInfo(inputsValues[`profile-name`], inputsValues[`profile-job`])
    .then(data => {
      popupProfile.isButtonLoading(false)
      userInfo.setUserInfo(data)
    })
    .catch(err => console.log(err))
    popupProfile.close();
  }
});
popupProfile.setEventListeners();
// POPUP DELETE CARD CONFIRMATION
const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: '.popup_type_confirmation',
})
popupDeleteCard.setEventListeners()
// POPUP AVATAR
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitForm: (inputValue) => {
    popupAvatar.isButtonLoading(true);
    api.editUserAvatar(inputValue[`avatar-link`])
    .then(data =>  {
      userInfo.setUserInfo(data);
      popupAvatar.isButtonLoading(false);
    })
    .catch(err => console.log(err))
    popupAvatar.close();
  }
})
popupAvatar.setEventListeners();
// POPUP ADD CARD
const popupCards = new PopupWithForm ({
  popupSelector: '.popup_type_cards',
  submitForm: (inputsValues) => {
    popupCards.isButtonLoading(true)
    api.addNewCard(inputsValues[`card-name`], inputsValues[`card-link`])
    .then(data => {
      defaultCards.addItem(createCard(data))
      popupCards.isButtonLoading(false);
    })
    .catch(err => console.log(err))
    popupCards.close()
  }
})
popupCards.setEventListeners()
// ALL LISTENERS FOR BUTTONS
// open profile edit popup
buttonEdit.addEventListener('click', () => {
  const updatedUserInfo = userInfo.getUserInfo();
  nameInput.value = updatedUserInfo.profileName;
  jobInput.value = updatedUserInfo.profileJob;
  popupProfile.open()
  formValidators['form-profile'].resetValidation();
})
// open add card popup
buttonAdd.addEventListener('click', () => {
  formValidators['form-cards'].resetValidation();
  popupCards.open();
});
//open avatar popup
avatarButton.addEventListener('click', () => {
  popupAvatar.open();
})
// FORM VALIDATION
// this function enables validation for each form
const formValidators = {};
function enableValidation(obj) {
  const forms = formsToValidateArray;
  forms.forEach((form) => {
    const validator = new FormValidator(obj, form);
    const formName = form.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(elementsForValidation);
