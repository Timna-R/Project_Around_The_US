export default class UserInfo {
  constructor(userNameSelector, aboutSelector, profilePictureSelector) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
    this._profilePicture = document.querySelector(profilePictureSelector); //
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
  }

  setUserProfilePicture(data) {
    this._profilePicture.src = data.avatar;
}

  setUserInfoServer(data) {
    this.setUserInfo(data);
    this.setUserProfilePicture(data);
  }
}