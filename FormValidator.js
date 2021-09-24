export class FormValidator {
    constructor(setting, formElement) {
      this._setting = setting;
      this._formElement = formElement;
    }
  
    _showInputError = (inputElement, errorMessage) => {
      const { inputErrorClass, errorClass } = this._setting;
      const errorElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
      );
  
      inputElement.classList.add(inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(errorClass);
    };
  
    _hideInputError = (inputElement) => {
      const { inputErrorClass, errorClass } = this._setting;
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
      const { inactiveButtonClass } = this._setting;
      const submitButtonSelector =
        this._formElement.querySelector(this._setting.submitButtonSelector);
  
      if (this._hasInvalidInput(this._formInputs)) {
        submitButtonSelector.disabled = "disabled";
        submitButtonSelector.classList.add(inactiveButtonClass);
      } else {
        submitButtonSelector.disabled = false;
        submitButtonSelector.classList.remove(inactiveButtonClass);
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
        this._formInputs.forEach (input => {
            this._hideInputError(input);
        });
    }
    
    enableValidation = () => {
      this._formElement.addEventListener("submit", (evt) => evt.preventDefault());

      this._formInputs = Array.from(
        this._formElement.querySelectorAll(this._setting.inputSelector)
      );

      this._toggleButtonState();
      this._setEventListeners();
    };
}