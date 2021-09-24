import { popupImage, openPopup, closePopup, closeOnEscape } from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

const settingsObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const editButton = document.querySelector(".profile__edit");
const editPopup = document.querySelector(".popup_theme_edit");
const closeButton = editPopup.querySelector(".popup__close-button");
const editForm = editPopup.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_theme_add-card");
const closeCardButton = addCardPopup.querySelector(".popup__close-button");
const addCardForm = addCardPopup.querySelector(".popup__form");
const closeImageButton = popupImage.querySelector(".popup__close-button");
const inputCardTitle = document.querySelector(".popup__input_type_card-title");
const inputImage = document.querySelector(".popup__input_type_image");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const cardsList = document.querySelector(".cards");

const submitProfileForm = () => {
  const nameValue = inputName.value;
  const aboutValue = inputAbout.value;
  profileName.textContent = nameValue;
  profileAbout.textContent = aboutValue;
};

const editformValidator = new FormValidator(settingsObj, editForm);
editformValidator.enableValidation()
const addCardformValidator = new FormValidator(settingsObj, addCardForm);
addCardformValidator.enableValidation()

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.getCardElement();
  cardsList.prepend(cardElement);
});

editButton.addEventListener("click", () => {
  openPopup(editPopup);
  const nameValue = profileName.textContent;
  const aboutValue = profileAbout.textContent;
  inputName.value = nameValue;
  inputAbout.value = aboutValue;
});

addCardButton.addEventListener("click", () => {
  openPopup(addCardPopup);
  addCardForm.reset();
});

closeButton.addEventListener("click", () => closePopup(editPopup));

closeCardButton.addEventListener("click", () => closePopup(addCardPopup));

closeImageButton.addEventListener("click", () => closePopup(popupImage));

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  editformValidator.resetValidation();
  submitProfileForm();
  closePopup(editPopup);
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addCardformValidator.resetValidation();
  const card = new Card(
    { name: inputCardTitle.value, link: inputImage.value },
    "#card-template"
  );
  const cardElement = card.getCardElement();
  cardsList.prepend(cardElement);
  closePopup(addCardPopup);
});

document.addEventListener("mouseup", (evt) => {
  const popupOpened = document.querySelector(".popup_open");
  if (popupOpened) {
    if (evt.target === popupOpened) {
      closePopup(popupOpened);
    }
  }
});