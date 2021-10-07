import "./index.css";

import { FormValidator } from "../scripts/components/FormValidator.js";
import { Card } from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  settingsObj,
  initialCards,
  editButton,
  themeEditPopup,
  editForm,
  inputName,
  inputJob,
  profileNameSelector,
  profileJobSelector,
  addCardButton,
  themeCardPopup,
  addCardForm,
  inputCardTitle,
  inputImage,
  cardTemplate,
  cardsSelector,
} from "../scripts/utils/constants.js";

// Forms validation
const editformValidator = new FormValidator(settingsObj, editForm);
editformValidator.enableValidation();
const addCardformValidator = new FormValidator(settingsObj, addCardForm);
addCardformValidator.enableValidation();

// Popup edit, profile values
const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupEdit = new PopupWithForm(themeEditPopup, (data) => {
  userInfo.setUserInfo(data);
  popupEdit.close();
});

popupEdit.setEventListeners();

editButton.addEventListener("click", () => {
  popupEdit.open();
  editformValidator.resetValidation();
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().job;
});

//  Add cards

const createCard = (data) => {
  const card = new Card(data, cardTemplate, () => {
    popupImage.open(item);
  });
  return card.getCardElement()
}
// 
const addCardPopup = new PopupWithForm(themeCardPopup, (data) => {
  const newCard = createCard(data);
  console.log(newCard)
  cardsLists.addItem(newCard)
  addCardPopup.close();
})

addCardPopup.setEventListeners();

const cardsLists = new Section({
  items: initialCards,
  renderer: (data) => {
    const newCard = createCard(data);
    cardsLists.addItem(newCard)
  },
},
  cardsSelector
);

cardsLists.renderItems()

addCardButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardformValidator.resetValidation();
});

// Popup Image
const popupImage = new PopupWithImage(".popup_theme_image");
popupImage.setEventListeners();
