const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];

const editButton = document.querySelector(".profile__edit");
const editPopup = document.querySelector(".popup_theme_edit");
const closeBotton = editPopup.querySelector(".popup__close-button");
const editForm = editPopup.querySelector(".form");
const inputName = document.querySelector(".form__input_type_name");
const inputAbout = document.querySelector(".form__input_type_about");
const addCardButton = document.querySelector(".profile__add-botton");
const addCardPopup = document.querySelector(".popup_theme_add-card");
const closeCardBotton = addCardPopup.querySelector(".popup__close-button");
const addCardForm = addCardPopup.querySelector(".form");
const inputCardTitle = document.querySelector(".form__input_type_card-title");
const inputImage = document.querySelector(".form__input_type_image");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupImage = document.querySelector(".popup_theme_image");
const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards");

function openCloseEdit() {
    editPopup.classList.toggle("popup_open");
}
function openCloseCard() {
    addCardPopup.classList.toggle("popup_open");
}
function sendForm() {
    const nameValue = inputName.value;
    const aboutValue = inputAbout.value;
    profileName.textContent = nameValue;
    profileAbout.textContent = aboutValue;
}
function placeCard(item) {
    const cardItem = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardItem.querySelector('.cards__image');
    const cardTitle = cardItem.querySelector('.cards__title');
    const openImag = document.querySelector('.popup_theme_image');
    const closeImag = openImag.querySelector(".popup__close-button");
    const deleteButton = cardItem.querySelector('.cards__delete');
    const likeButton = cardItem.querySelector('.cards__heart-like');
    cardImage.style.backgroundImage = `url(${item.link})`;
    cardTitle.textContent = item.name;
    likeButton.addEventListener("click", () => likeButton.classList.toggle("cards__heart-like_full"));
    deleteButton.addEventListener("click", () => cardItem.remove());
    cardImage.addEventListener("click", function() {
        openImag.classList.add("popup_open");
        openImag.querySelector('.popup__image').src = item.link;
        openImag.querySelector('.popup__image-title').textContent = item.name;
        closeImag.addEventListener("click", function() {
            openImag.classList.remove("popup_open")
        });
    });
    cardsList.prepend(cardItem);
}

initialCards.forEach(placeCard);
editButton.addEventListener("click", function() {
    openCloseEdit();
    const nameValue = profileName.textContent;
    const aboutValue = profileAbout.textContent;
    inputName.value = nameValue;
    inputAbout.value = aboutValue;
});
addCardButton.addEventListener("click", () => {
    openCloseCard()
    addCardForm.reset()
});

closeBotton.addEventListener("click", openCloseEdit);
closeCardBotton.addEventListener("click", openCloseCard);

editForm.addEventListener("submit", function(e) {
    e.preventDefault();
    sendForm()
    openCloseEdit()
});
addCardForm.addEventListener("submit", function(e) {
    e.preventDefault();
    placeCard({name: inputCardTitle.value, link: inputImage.value});
    openCloseCard();
});



