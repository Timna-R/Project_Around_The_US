export const settingsObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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
export const themeDeleteCardPopup = ".popup_theme_delete-card";
export const editProfilePicture = document.querySelector(
  ".profile__edit-image"
);
export const themeProfilePicturePopup = ".popup_theme_edit-profile-picture";
export const editProfilePictureForm = document
  .querySelector(themeProfilePicturePopup)
  .querySelector(".popup__form");
export const profilePictureSelector = ".profile__profile-picture";
export const loadingDataCard = (isLoading = false) => {
  const submitActiveButton = document.querySelector(
    ".popup_open .popup__button"
  );
  submitActiveButton.textContent = isLoading ? "Creating..." : "Created";
};
export const loadingDataInfo = (isLoading = false) => {
  const submitActiveButton = document.querySelector(
    ".popup_open .popup__button"
  );
  submitActiveButton.textContent = isLoading ? "Saving..." : "Saved";
};
