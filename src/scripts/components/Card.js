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
    cardImage.addEventListener("click", this._handleCardClick);

    return this._cardElement;
  };
}
