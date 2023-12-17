import { useState } from "react";
import { updateUserAvatar } from "../../lib/api";
import "./updateavatarform.css";

const UpdateAvatar = ({ userName, currentAvatar, onUpdateSuccess }) => {
  const [avatarUrl, setAvatarUrl] = useState(currentAvatar || "");
  const [updateError, setUpdateError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserAvatar(userName, avatarUrl);
      setUpdateError("");
      setAvatarUrl(""); // Clear input
      if (onUpdateSuccess) {
        onUpdateSuccess(avatarUrl); // Callback to update parent state
      }
    } catch (error) {
      setUpdateError(error.message);
    }
  };

  return (
    <form className="change-avatar-form" onSubmit={handleSubmit}>
      <div className="changeavatar-txt-wrapper">
        <h1 className="changeavatar-header">Change Avatar</h1>
        <p className="changeavatar-p">Enter the URL of your new avatar.</p>
      </div>
      <label htmlFor="avatarUrl" className="visually-hidden">
        New Avatar URL
      </label>
      <input
        id="avatarUrl"
        className="changeavatar-input"
        name="avatarUrl"
        type="url"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
        placeholder="New Avatar URL"
      />
      <button className="submit-updateavatar" type="submit">
        Update Avatar
      </button>
      {updateError && <p className="error">{updateError}</p>}
    </form>
  );
};

export default UpdateAvatar;
