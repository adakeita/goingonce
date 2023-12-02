import { useState } from "react";
import ChangeAvatarBtn from "../ChangeAvatarBtn";
import "./profilecard.css";

const ProfileCard = ({ profile }) => {
  const [updatedAvatar, setUpdatedAvatar] = useState(profile.avatar);
  const userName = localStorage.getItem("userName");

  return (
    <section className="profile-card">
      <div className="profile-card-content">
        <div className="personalia">
          <div className="profile-email-name">
            <h1 className="profile-name">{profile.name}</h1>
          </div>
          <div className="avatar-wrapper">
            <div className="avatar-img-wrapper">
              <img
                className="profile-avatar"
                src={profile.avatar}
                alt="Avatar"
              />
            </div>
            <ChangeAvatarBtn
              className="change-avatar-btn"
              userName={userName}
              currentAvatar={updatedAvatar}
              onUpdateSuccess={setUpdatedAvatar}
            />
          </div>
        </div>
        <div className="credit-container">
          <div className="current-credits-container">
            <p className="currentCredits">Your Credits</p>
            <p className="currentCreditsNumber">{profile.credits}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
