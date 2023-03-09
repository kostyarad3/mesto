// imports
import '../pages/index.css'
import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  initialCards,
  elementsForValidation,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  placesSelector,
} from '../utils/constants.js'
// this function creates card
function createCard(cardLink, cardName) {
  const card = new Card (cardLink, cardName, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}
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
//this function opens card`s popup
const popupImage = new PopupWithImage ('.popup_type_place')
function handleCardClick(name, link) {
  popupImage.open(name, link);
  popupImage.setEventListeners();
}
// render six default cards
const defaultCards = new Section ({
  items: initialCards,
  renderer: (item) => {
    defaultCards.addItem(createCard(item.link, item.name));
  }
},
  placesSelector
);
defaultCards.renderItems();
// profile information
const userInfo = new UserInfo ({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__info',
});
// edit profile info popup
const popupProfile = new PopupWithForm ({
  popupSelector: '.popup_type_profile',
  submitForm: (profileInputsValues) => {
    userInfo.setUserInfo(profileInputsValues)
    popupProfile.close();
  }
});
// set listeners on profile popup
popupProfile.setEventListeners();
// add new card popup
const popupCards = new PopupWithForm ({
  popupSelector: '.popup_type_cards',
  submitForm: (cardsInputsValues) => {
    defaultCards.addItem(createCard(cardsInputsValues[`card-link`], cardsInputsValues[`card-name`]));
    popupCards.close()
  }
})
// set listeners on cards popup
popupCards.setEventListeners()
// open edit profile popup
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

