const settingsObj = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  
  const showInputError = (formElement, inputElement, errorMessage,  inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (formElement, inputElement, settings) => {
    const inputErrorClass = settings.inputErrorClass;
    const errorClass = settings.errorClass;
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  function toggleButtonState(inputs, buttonElement, buttonDisabled) {
    if (hasInvalidInput(inputs)) {
      buttonElement.disabled = "disabled";
      buttonElement.classList.add(buttonDisabled);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(buttonDisabled);
    }
  }
  
  function enableValidation(settings) {
    const formsList = Array.from(
      document.querySelectorAll(settings.formSelector)
    );
    formsList.forEach((formElement) => {
      const formInput = Array.from(
        formElement.querySelectorAll(settings.inputSelector)
      );
      const submitButton = formElement.querySelector(
        settings.submitButtonSelector
      );
      const inactiveButton = settings.inactiveButtonClass;
  
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      toggleButtonState(formInput, submitButton, inactiveButton);
      
      //Call checkInputValidity each input element
      formInput.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
          checkInputValidity(formElement, inputElement, settings);
          toggleButtonState(formInput, submitButton, inactiveButton);
        });
      });
    });
  }
  
  function resetsValidation(buttonElement) {
    buttonElement.classList.remove(buttonDisabled);
  }
  
  enableValidation(settingsObj);
  