// find edit button and popup
let editButton = document.querySelector('.button_edit');
let popup = document.querySelector('.popup');
// open popup by click
editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});
// find all other elements
let closeButton = document.querySelector('.button_close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__info');
let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-job');
let saveButton = document.querySelector('.button_save');
let form = document.querySelector('.form');
// make form inputs filled with name and job
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
// this function closes popup by removing class
function closePopup() {
  popup.classList.remove('popup_opened');
};
// close popup by click on close button
closeButton.addEventListener('click', function () {
  event.preventDefault();
  closePopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
// this function submits form
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
// submit form
form.addEventListener('submit', formSubmitHandler);
// add submitting by pressing Enter key
form.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    form.addEventListener('submit', formSubmitHandler);
  }
});







