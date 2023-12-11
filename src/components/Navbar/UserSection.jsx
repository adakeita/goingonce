// UserProfileSection.js
import { Link } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-black.svg";
import notificationIcon from "../../assets/notification-white.svg";

const UserNavSection = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="user-action-wrapper flex space-x-1 items-center">
      {isLoggedIn ? (
        <>
          <div className="profile-notif-wrapper flex items-center me-9">
            <Link to="/profile" className="hover:text-gray-200">
              <img src={profileIcon} alt="Profile" className="mx-1 h-6 w-6" />
            </Link>
            <Link to="/alerts" className="hover:text-gray-200">
              <img
                src={notificationIcon}
                alt="Notifications"
                className=" mx-1 h-8 w-8"
              />
            </Link>
          </div>
          <button onClick={handleLogout} className="hover:text-gray-200 hover:underline">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default UserNavSection;
