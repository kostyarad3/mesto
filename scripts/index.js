// all elements
const buttonEdit = document.querySelector('.button_type_edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.button_type_close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__info');
const nameInput = document.querySelector('#profile-name');
const jobInput = document.querySelector('#profile-job');
const form = document.querySelector('.form');

// this function opens popup
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

// this function closes popup
function closePopup() {
  popup.classList.remove('popup_opened');
};

// open popup by clicking on edit button
buttonEdit.addEventListener('click', openPopup);

// close popup by clicking on close button
buttonClose.addEventListener('click', closePopup)

// this function submits form
function submitForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

// submit form
form.addEventListener('submit', submitForm);








