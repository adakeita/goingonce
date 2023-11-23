// DropdownMenu.js
import { Link } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-white.svg";
import notificationIcon from "../../assets/notification-white.svg";

const DropdownMenu = ({ isMenuOpen, isLoggedIn, handleLogout }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="px-5 py-3">
      <ul className="font-semibold font-heading space-y-3">
        <li><Link to="/listings" className="hover:text-gray-200">Listings</Link></li>
        <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
      </ul>
      {isLoggedIn ? (
        <div className="mt-3 space-x-3">
          <Link to="/alerts" className="hover:text-gray-200">
            <img src={notificationIcon} alt="Notifications" className="h-8 w-8" />
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            <img src={profileIcon} alt="Profile" className="h-6 w-6" />
          </Link>
          <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login" className="hover:text-gray-200 block">Login</Link>
          <Link to="/register" className="hover:text-gray-200 block">Register</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
