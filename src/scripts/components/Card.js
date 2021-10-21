export class Card {
  constructor(
    { data, handleCardClick, handledeleteCard, handleLikeButtonClick },
    cardTemplateSelector,
    userId
  ) {
    this._image = data.link;
    this._text = data.name;
    this._idCard = data._id;
    this._owner = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._cardTemplate =
      cardTemplateSelector.content.querySelector(".cards__item");
    this._handleCardClick = handleCardClick;
    this._handledeleteCard = handledeleteCard;
    this._handleLikeButtonClick = handleLikeButtonClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeButtonClick(this._idCard)
    );
    this._deleteButton.addEventListener("click", () =>
      this._handledeleteCard(this._idCard)
    );
    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  // Does the id of the card match the id of the user in like
  isLike() {
    return this._likes.some((someId) => someId._id === this._userId);
  }

  likeButtonClick(newLikeAmount) {
    this._likes = newLikeAmount;

    this._countLike.textContent = this._likes.length;

    this._likeButton.classList.toggle("cards__heart-like_full");
  }

  removeCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".cards__image");
    this._cardTitle = this._cardElement.querySelector(".cards__title");
    this._deleteButton = this._cardElement.querySelector(".cards__delete");
    this._likeButton = this._cardElement.querySelector(".cards__heart-like");
    this._countLike = this._cardElement.querySelector(
      ".cards__heart-like-count"
    );

    this._cardImage.style.backgroundImage = `url(${this._image})`;
    this._cardTitle.textContent = this._text;

    if (this._userId !== this._owner) {
      this._deleteButton.style.display = "none";
    }

    // Show amount of likes from the server
    this._countLike.textContent = this._likes.length;

    if (this.isLike()) {
      this.likeButtonClick(this._likes);
    }

    this._setEventListeners();

    return this._cardElement;
  };
}