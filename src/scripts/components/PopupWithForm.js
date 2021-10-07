import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(cardSelector, submitHandler) {
    super(cardSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._formInputs = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    const inputValues = {};

    this._formInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evn) => {
      evn.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}