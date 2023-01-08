// all variables
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
const popupPlace = document.querySelector('.popup_type_place');
const places = document.querySelector('.places');
// this function opens popup
function openPopups(currentPopup) {
  currentPopup.classList.toggle('popup_opened');
};
// this function closes popup
function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_opened');
};
// this function submits cards form
function submitCardsForm (evt) {
  evt.preventDefault();
  let newCard = {
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
  const cardTemplate = document.querySelector('#card-template').content;
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
  cardElement.querySelector('.place').addEventListener('click', function (element) {
    const currentPlace = element.currentTarget;
    const currentPlaceImg = currentPlace.querySelector('.place__image');
    const currentPlaceName = currentPlace.querySelector('.place__name');
    const popupPlaceImg = popupPlace.querySelector('.popup__image');
    const popupPlaceName = popupPlace.querySelector('.popup__caption');
    popupPlaceImg.src = currentPlaceImg.src;
    popupPlaceImg.alt = currentPlaceName.textContent;
    popupPlaceName.textContent = currentPlaceName.textContent;
    openPopups(popupPlace);
  });

  return cardElement;
}
// open profile popup
buttonEdit.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopups(popupProfile);
})
// open cards popup
buttonAdd.addEventListener('click', () => openPopups(popupCards));
// close popup
buttonsClose.forEach(button => {
  button.addEventListener('click', function(evt) {
    closePopup(evt.currentTarget.closest('.popup'));
  })
})
// submit cards form
formCards.addEventListener('submit', submitCardsForm);
// submit profile form
formProfile.addEventListener('submit', submitProfileForm);
// loop through an array initialCards
initialCards.forEach (function (card) {
  places.append(createCard(card));
});





