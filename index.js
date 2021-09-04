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
const editContainer = editPopup.querySelector(".popup__container_theme_edit");
const editForm = editPopup.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_theme_add-card");
const closeCardButton = addCardPopup.querySelector(".popup__close-button");
const addCardForm = addCardPopup.querySelector(".popup__form");
const popupImage = document.querySelector(".popup_theme_image");
const closeImageButton = popupImage.querySelector(".popup__close-button");
const inputCardTitle = document.querySelector(".popup__input_type_card-title");
const inputImage = document.querySelector(".popup__input_type_image");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards");

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', closeOnEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener('keydown', closeOnEscape);
}

function submitProfileForm() {
  const nameValue = inputName.value;
  const aboutValue = inputAbout.value;
  profileName.textContent = nameValue;
  profileAbout.textContent = aboutValue;
}

function placeCard(item) {
  let cardItem = cardTemplate.querySelector(".cards__item").cloneNode(true);
  const cardImage = cardItem.querySelector(".cards__image");
  const cardTitle = cardItem.querySelector(".cards__title");
  const deleteButton = cardItem.querySelector(".cards__delete");
  const likeButton = cardItem.querySelector(".cards__heart-like");
  const imageTitleValue = popupImage.querySelector(".popup__image-title");
  function handleLikeButtonClick() {
    likeButton.classList.toggle("cards__heart-like_full");
  }

  function deleteCardItem() {
    cardItem.remove();
    cardItem = null;
  }
  
  cardImage.style.backgroundImage = `url(${item.link})`;

  cardTitle.textContent = item.name;

  likeButton.addEventListener("click", handleLikeButtonClick);

  deleteButton.addEventListener("click", deleteCardItem);

  cardImage.addEventListener("click", function () {
    openPopup(popupImage);
    const image = popupImage.querySelector(".popup__image");
    image.src = item.link;
    image.alt = "";
    imageTitleValue.textContent = item.name;
  });

  cardsList.prepend(cardItem);
}

initialCards.forEach(placeCard);

editButton.addEventListener("click", function () {
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

editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitProfileForm();
  closePopup(editPopup);
});

addCardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  placeCard({ name: inputCardTitle.value, link: inputImage.value });
  closePopup(addCardPopup);
});

function closeOnEscape(evt) {
  const key = evt.key;
    if (key === "Escape") {
      closePopup(document.querySelector('.popup_open'));
    }
}

document.addEventListener("mouseup", function (evt) {
  const popupOpened = document.querySelector('.popup_open');
  if (popupOpened) {
    if (evt.target === popupOpened) {
      closePopup(popupOpened);
    }
  }
});