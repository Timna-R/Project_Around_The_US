export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._image = data.link;
    this._text = data.name;
    this._cardTemplate =
      cardTemplateSelector.content.querySelector(".cards__item");
    this._handleCardClick = handleCardClick;
  }

  _handledeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleLikeButtonClick = () =>
    this._likeButton.classList.toggle("cards__heart-like_full");

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);
    this._deleteButton.addEventListener("click", this._handledeleteCard);
    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".cards__image");
    this._cardTitle = this._cardElement.querySelector(".cards__title");
    this._deleteButton = this._cardElement.querySelector(".cards__delete");
    this._likeButton = this._cardElement.querySelector(".cards__heart-like");

    this._cardImage.style.backgroundImage = `url(${this._image})`;
    this._cardTitle.textContent = this._text;

    this._setEventListeners();

    return this._cardElement;
  };
}