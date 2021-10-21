export default class UserProfilePicture {
    constructor(profilePictureSelector) {
      this._profilePicture = document.querySelector(profilePictureSelector);
    }

    setUserProfilePicture(data) {
        this._profilePicture.src = data.link;
    }
  }