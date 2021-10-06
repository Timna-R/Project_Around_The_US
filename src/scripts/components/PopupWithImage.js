import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
  }

  open(data) {
    super.open();
    const imageElement = this._popupElement.querySelector(".popup__image");
    const imageTitleValue = this._popupElement.querySelector(
      ".popup__image-title"
    );

    imageElement.src = data.link;
    imageElement.alt = `Image of ${data.link}`;
    imageTitleValue.textContent = data.name;
  }
}
