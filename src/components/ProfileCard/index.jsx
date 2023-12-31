import { useState } from "react";
import ChangeAvatarBtn from "../ChangeAvatarBtn";
import "./profilecard.css";

const ProfileCard = ({ profile }) => {
  const [updatedAvatar, setUpdatedAvatar] = useState(profile.avatar);
  const userName = localStorage.getItem("userName");

  return (
    <section className="profile-card">
      <div className="profile-card-content">
        <div className="avatar-wrapper">
          <div className="avatar-img-wrapper">
            <img className="profile-avatar" src={profile.avatar} alt="Avatar" />
          </div>
          <ChangeAvatarBtn
            className="change-avatar-btn"
            userName={userName}
            currentAvatar={updatedAvatar}
            onUpdateSuccess={setUpdatedAvatar}
          />
        </div>
        <div className="profile-email-name">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-email">{profile.email}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
