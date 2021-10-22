export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (inputElement) => {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () =>
    this._formInputs.some((inputElement) => !inputElement.validity.valid);

  _toggleButtonState = () => {
    const { inactiveButtonClass } = this._settings;
    
    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    this._formInputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._formInputs);
      });
    });
  };

  resetValidation() {
    this._formInputs.forEach(this._hideInputError);
    this._toggleButtonState();
  }

  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());

    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );

    this._formInputs = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );

    this._setEventListeners();
  };
}