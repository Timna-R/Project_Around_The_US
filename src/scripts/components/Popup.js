export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });

    document.addEventListener("mouseup", (evt) => {
      const openedPopup = document.querySelector(".popup_open");
      if (evt.target === openedPopup) {
        this.close();
      }
    });
  }
}