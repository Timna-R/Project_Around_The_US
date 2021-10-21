export default class UserInfo {
  constructor(userNameSelector, jobSelector) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.job;
  }
}