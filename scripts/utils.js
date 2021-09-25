const popupImage = document.querySelector(".popup_theme_image");

const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closeOnEscape);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closeOnEscape);
};

const closeOnEscape = (evt) => {
  const key = evt.key;
  if (key === "Escape") {
    closePopup(document.querySelector(".popup_open"));
  }
};

export { popupImage, openPopup, closePopup, closeOnEscape };