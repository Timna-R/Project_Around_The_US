const settingsObj = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__error_visible");
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
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
          checkInputValidity(formElement, inputElement);
          toggleButtonState(formInput, submitButton, inactiveButton);
        });
      });
    });
  }
  
  function resetsValidation(buttonElement) {
    buttonElement.classList.remove(buttonDisabled);
  }
  
  enableValidation(settingsObj);
  