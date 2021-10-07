import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
    this._imageElement = this._popupElement.querySelector(".popup__image");
    this._imageTitleValue = this._popupElement.querySelector(
      ".popup__image-title"
    );
  }

  open(data) {
    super.open();

    this._imageElement.src = data.link;
    this._imageElement.alt = `Image of ${data.link}`;
    this._imageTitleValue.textContent = data.name;
  }
}