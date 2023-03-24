export class UserInfo {
  constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector)
  };

  getUserInfo() {
    const profileData = {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
      profileAvatar: this._profileAvatar.src,
    }
    return profileData;
  };

  setUserInfo(profileData) {
    this._profileName.textContent = profileData.name;
    this._profileJob.textContent = profileData.about;
    this._profileAvatar.src = profileData.avatar;
  }
}

