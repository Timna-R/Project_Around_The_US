import "./index.css";

import { FormValidator } from "../scripts/components/FormValidator.js";
import { Card } from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithSubmit from "../scripts/components/PopupWithSubmit";
import UserInfo from "../scripts/components/UserInfo.js";
import { api } from "../scripts/components/Api";
import {
  settingsObj,
  editButton,
  themeEditPopup,
  editForm,
  inputName,
  inputAbout,
  profileNameSelector,
  profileAboutSelector,
  addCardButton,
  themeCardPopup,
  addCardForm,
  cardTemplate,
  cardsSelector,
  themeDeleteCardPopup,
  editProfilePicture,
  themeProfilePicturePopup,
  editProfilePictureForm,
  profilePictureSelector,
  loadingDataCard,
  loadingDataInfo,
  popupSubmitButton,
} from "../scripts/utils/constants.js";

let userId;

// Edit profile picture popup

// Connection to an array of forms
const popupEditProfilePicture = new PopupWithForm(
  themeProfilePicturePopup,
  (data) => {
    loadingDataInfo(popupSubmitButton, true);

    api.setProfilePicture(data) // Change profile picture on Api
      .then(() => {
        userInfo.setUserProfilePicture(data); // Change profile picture
        popupEditProfilePicture.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        loadingDataInfo(popupSubmitButton); // loading botton
      });
  }
);

popupEditProfilePicture.setEventListeners();

// Open profile picture popup
editProfilePicture.addEventListener("click", () => {
  popupEditProfilePicture.open();
  editProfilePictureFormValidator.resetValidation();
});

// Forms validation

const editformValidator = new FormValidator(settingsObj, editForm);
editformValidator.enableValidation();
const addCardformValidator = new FormValidator(settingsObj, addCardForm);
addCardformValidator.enableValidation();
const editProfilePictureFormValidator = new FormValidator(
  settingsObj,
  editProfilePictureForm
);
editProfilePictureFormValidator.enableValidation();

// Edit Popup user info, profile values

const userInfo = new UserInfo(profileNameSelector, profileAboutSelector, profilePictureSelector);

// Connection to an array of forms
const popupEdit = new PopupWithForm(themeEditPopup, (data) => {
  loadingDataInfo(popupSubmitButton, true);
  
  api.setUserInfo(data)
    .then(() => {
      userInfo.setUserInfo(data);
      popupEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      loadingDataInfo(popupSubmitButton);
    });
});

popupEdit.setEventListeners();

// Open user info popup
editButton.addEventListener("click", () => {
  popupEdit.open();
  editformValidator.resetValidation();
  inputName.value = userInfo.getUserInfo().name;
  inputAbout.value = userInfo.getUserInfo().about;
});

//  Delete card submit popup

const confirmSubmit = new PopupWithSubmit(themeDeleteCardPopup);

confirmSubmit.setEventListeners();

//  Add cards

const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: () => {
        popupImage.open(data);
      },

      handledeleteCard: (idCard) => {
        confirmSubmit.open();
        confirmSubmit.setAction(() => {
          api.deleteCard(idCard).then(() => {
            card.removeCard();
            confirmSubmit.close();
          })
          .catch((err) => console.log(err));
        });
      },

      handleLikeButtonClick: (idCard) => {
        if (card.isLike()) {
          api.disLikeCard(idCard).then((res) => {
            card.likeButtonClick(res.likes);
          })
          .catch((err) => console.log(err));
        } else {
          api.likeCard(idCard).then((res) => {
            card.likeButtonClick(res.likes);
          })
          .catch((err) => console.log(err));
        }
      },
    },
    cardTemplate,
    userId
  );
  return card.getCardElement();
};

// Connection to an array of forms
const addCardPopup = new PopupWithForm(themeCardPopup, (data) => {
  loadingDataCard(popupSubmitButton, true);

  api.creatCard(data)
    .then((res) => {
      const newCard = createCard(res);
      cardsLists.addItem(newCard);
      addCardPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      loadingDataCard(popupSubmitButton);
    });
});

addCardPopup.setEventListeners();

// Add cards to the DOM
const cardsLists = new Section(
  {
    renderer: (data) => {
      cardsLists.addItem(createCard(data));
    },
  },
  cardsSelector
);

// Open new card popup
addCardButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardformValidator.resetValidation();
});

// Get data from the API

  Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfoServer(userData);
    cardsLists.renderItems(cards);
  })
  .catch((err) => console.log(err));

// Open Image popup

const popupImage = new PopupWithImage(".popup_theme_image");
popupImage.setEventListeners();