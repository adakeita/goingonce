import { useState } from "react";

const ProfileDisplay = ({ profile, onUpdateAvatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(avatarUrl);
  };

  return (
    <div>
      <h1 className="profile-name">{profile.name}</h1>
      <p className="profile-email">Email: {profile.email}</p>
      <p className="profileCredits">Credits: {profile.credits}</p>
      <img className="profile-avatar" src={profile.avatar} alt="Avatar" />
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="New Avatar URL"
        />
        <button type="submit">Update Avatar</button>
      </form>
    </div>
  );
};

export default ProfileDisplay;