import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  setAction(action) {
    this._submitHandeler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evn) => {
      evn.preventDefault();
      this._submitHandeler();
    });
  }
}