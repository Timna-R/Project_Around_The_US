let editButton = document.querySelector(".info__edit");
let popupForm = document.querySelector(".popup");
let closeBotton = document.querySelector(".popup__close-button");
let form = document.querySelector(".form");
let inputName = document.querySelector(".form__input_type_name");
let inputAbout = document.querySelector(".form__input_type_about");
let profileName = document.querySelector(".info__name");
let profileAbout = document.querySelector(".info__about");

function closeForm() {
    popupForm.classList.remove("popup_open")
}

editButton.addEventListener("click", function() {
    popupForm.classList.add("popup_open");
    const nameValue = profileName.textContent
    const aboutValue = profileAbout.textContent
    inputName.value = nameValue
    inputAbout.value = aboutValue
})

closeBotton.addEventListener("click", closeForm)

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameValue = inputName.value
    const aboutValue = inputAbout.value
    profileName.textContent = nameValue
    profileAbout.textContent = aboutValue
    closeForm()
})