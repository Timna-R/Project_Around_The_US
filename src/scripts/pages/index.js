// import { popupImage, openPopup, closePopup } from "../utils/utils.js";
// import { popupImage2 } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
// import Popup from '../components/Popup.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  settingsObj,
  initialCards,
  editButton,
  themeEditPopup,
  editForm,
  inputName,
  inputJob,
  profileName,
  profileJob,
  addCardButton,
  themeCardPopup,
  addCardForm,
  inputCardTitle,
  inputImage,
  cardTemplate,
  cardsSelector,
} from "../utils/constants.js";

// Forms validation
const editformValidator = new FormValidator(settingsObj, editForm);
editformValidator.enableValidation();
const addCardformValidator = new FormValidator(settingsObj, addCardForm);
addCardformValidator.enableValidation();

// Popup edit, profile values
const userInfo = new UserInfo(inputName, inputJob);

const popupEdit = new PopupWithForm(themeEditPopup, (data) => {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupEdit.close();
});

popupEdit.setEventListeners();

editButton.addEventListener("click", () => {
  popupEdit.open();
  editformValidator.resetValidation();
  inputName.value = userInfo.getUserInfo()[0];
  inputJob.value = userInfo.getUserInfo()[1];
});

userInfo.setUserInfo({
  name: profileName.textContent,
  job: profileJob.textContent,
});

//  Add cards from initialCards list
initialCards.forEach((data) => {
  const cardsLists = new Section(
    {
      items: data,
      renderer: (item) => {
        const card = new Card(item, cardTemplate, () => {
          popupImage.open(item);
        });
        const cardElement = card.getCardElement();
        cardsLists.addItem(cardElement);
      },
    },
    cardsSelector
  );
  cardsLists.renderItems();
});

// User adds card
const addCardPopup = new PopupWithForm(themeCardPopup, (data) => {
  const newCard = new Section(
    {
      items: { name: inputCardTitle.value, link: inputImage.value },
      renderer: (item) => {
        const card = new Card(item, cardTemplate, () => {
          popupImage.open(item);
        });
        const cardElement = card.getCardElement();
        newCard.addItem(cardElement);
      },
    },
    cardsSelector
  );
  newCard.renderItems();
  addCardPopup.close();
});

addCardButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardformValidator.resetValidation();
});

addCardPopup.setEventListeners();

// Popup Image
const popupImage = new PopupWithImage(".popup_theme_image");
popupImage.setEventListeners();
