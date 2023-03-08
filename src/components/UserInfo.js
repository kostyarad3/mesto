export class UserInfo {
  constructor({profileNameSelector, profileJobSelector}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
  };

  getUserInfo() {
    const profileData = {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
    }

    return profileData;
  };

  setUserInfo(profileData) {
    this._profileName.textContent = profileData[`profile-name`];
    this._profileJob.textContent = profileData[`profile-job`];
  }
}

