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
  places,
  placesSelector,
} from '../utils/constants.js'
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
function handleCardClick(name, link) {
  const popupImage = new PopupWithImage ('.popup_type_place')
  popupImage.open(name, link);
  popupImage.setEventListeners();
}
// render six default cards
const defaultCards = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item.link, item.name, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    defaultCards.addItem(cardElement);
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
// add new card popup
const popupCards = new PopupWithForm ({
  popupSelector: '.popup_type_cards',
  submitForm: (cardsInputsValues) => {
    const newCard = new Card(cardsInputsValues[`card-link`], cardsInputsValues[`card-name`], '#card-template', handleCardClick)
    const cardElement = newCard.generateCard();
    places.prepend(cardElement);
    popupCards.close()
  }
})
// open edit profile popup
buttonEdit.addEventListener('click', () => {
  const updatedUserInfo = userInfo.getUserInfo();
  nameInput.value = updatedUserInfo.profileName;
  jobInput.value = updatedUserInfo.profileJob;
  popupProfile.open()
  popupProfile.setEventListeners()
  formValidators['form-profile'].resetValidation();
})
// open add card popup
buttonAdd.addEventListener('click', () => {
  popupCards.setEventListeners()
  formValidators['form-cards'].resetValidation();
  popupCards.open();
});
