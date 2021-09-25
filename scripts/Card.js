import { popupImage, openPopup } from "./utils.js";

export class Card {
  constructor(data, cardTemplateSelector) {
    this._image = data.link;
    this._text = data.name;
    this._cardTemplate = cardTemplateSelector.content.querySelector(".cards__item");
  }

  _handledeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleLikeButtonClick = () =>
    this._likeButton.classList.toggle("cards__heart-like_full");

  _handlePopupImage = () => {
    const image = popupImage.querySelector(".popup__image");
    const imageTitleValue = popupImage.querySelector(".popup__image-title");

    openPopup(popupImage);
    image.src = this._image;
    image.alt = `Image of ${this._text}`;
    imageTitleValue.textContent = this._text;
  };

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    const cardImage = this._cardElement.querySelector(".cards__image");
    const cardTitle = this._cardElement.querySelector(".cards__title");
    const deleteButton = this._cardElement.querySelector(".cards__delete");
    this._likeButton = this._cardElement.querySelector(".cards__heart-like");

    cardImage.style.backgroundImage = `url(${this._image})`;
    cardTitle.textContent = this._text;

    this._likeButton.addEventListener("click", this._handleLikeButtonClick);
    deleteButton.addEventListener("click", this._handledeleteCard);
    cardImage.addEventListener("click", this._handlePopupImage);

    return this._cardElement;
  };
}