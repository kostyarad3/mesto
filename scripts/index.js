// all elements
const buttonEdit = document.querySelector('.button_type_edit');
const buttonAdd = document.querySelector('.button_type_add');
const buttonsClose = document.querySelectorAll('.button_type_close');
const popupProfile = document.querySelector('.popup_type_profile');
const nameInput = popupProfile.querySelector('#profile-name');
const jobInput = popupProfile.querySelector('#profile-job');
const popupCards = document.querySelector('.popup_type_cards');
const cardNameInput = popupCards.querySelector('#card-name');
const cardLinkInput = popupCards.querySelector('#card-link');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__info');
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');
const places = document.querySelector('.places');
// this function opens popup
function openPopups(currentPopup) {
  currentPopup.classList.toggle('popup_opened');
  if (currentPopup.classList.contains('popup_type_profile')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
};

buttonEdit.addEventListener('click', () => openPopups(popupProfile));
buttonAdd.addEventListener('click', () => openPopups(popupCards));
// this function closes popup
function closePopup(evt) {
  const currentButton = evt.currentTarget;
  currentButton.closest('.popup').classList.remove('popup_opened');
};
buttonsClose.forEach(button => {
  button.addEventListener('click', closePopup);
})
// initial cards array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
  // this function submits cards form
function submitCardsForm (evt) {
  evt.preventDefault();
  let newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  initialCards.unshift(newCard);
  closePopup(evt);
  generateCard(newCard)
};
formCards.addEventListener('submit', submitCardsForm);
//this function generates card element
function generateCard(element) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.place__image').src = element.link;
  cardElement.querySelector('.place__image').alt = element.name;
  cardElement.querySelector('.place__name').textContent = element.name;
  places.prepend(cardElement);
  // like card
  places.querySelector('.place__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like_active');
    evt.stopPropagation();
  });
  // delete card
  places.querySelector('.place__delete').addEventListener('click', function (evt) {
    evt.currentTarget.closest('.place').remove();
    evt.stopPropagation();
  });
  // card`s popup
  const placeElements = places.querySelectorAll('.place');
  placeElements.forEach(place => {
    place.addEventListener('click', function(evt) {
      const currentPlace = evt.currentTarget;
      const currentPlaceImg = currentPlace.querySelector('.place__image');
      const currentPlaceName = currentPlace.querySelector('.place__name');

      const popupPlace = document.querySelector('.popup_type_place');
      popupPlace.classList.add('popup_opened');
      const popupPlaceImg = popupPlace.querySelector('.popup__image');
      const popupPlaceName = popupPlace.querySelector('.popup__caption');
      popupPlaceImg.src = currentPlaceImg.src;
      popupPlaceImg.alt = currentPlaceName.textContent;
      popupPlaceName.textContent = currentPlaceName.textContent;
  })
})
}
// loop through an array initialCards
initialCards.forEach (function (card) {
  generateCard(card);
});
// this function submits profile form
function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(evt);
}
formProfile.addEventListener('submit', submitProfileForm);




