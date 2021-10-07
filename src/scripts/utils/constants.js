export const settingsObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
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

export const editButton = document.querySelector(".profile__edit");
export const themeEditPopup = ".popup_theme_edit";
export const editForm = document
  .querySelector(themeEditPopup)
  .querySelector(".popup__form");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputJob = document.querySelector(".popup__input_type_job");
export const profileNameSelector = ".profile__name";
export const profileJobSelector = ".profile__job";
export const addCardButton = document.querySelector(".profile__add-button");
export const themeCardPopup = ".popup_theme_add-card";
export const addCardForm = document
  .querySelector(themeCardPopup)
  .querySelector(".popup__form");
export const cardTemplate = document.querySelector("#card-template");
export const cardsSelector = ".cards";