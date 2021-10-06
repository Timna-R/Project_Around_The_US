import { profileName, profileJob } from "../utils/constants.js";

export default class UserInfo {
  constructor(userName, job) {
    this._userName = userName;
    this._job = job;
  }

  getUserInfo() {
    const nameValue = profileName.textContent;
    const jobValue = profileJob.textContent;
    return [nameValue, jobValue];
  }

  setUserInfo(data) {
    const nameValue = data.name;
    const jobValue = data.job;
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
  }
}
