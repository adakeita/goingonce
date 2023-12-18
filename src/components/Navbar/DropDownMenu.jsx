import { Link } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-black.svg";

const DropdownMenu = ({ isMenuOpen, isLoggedIn, handleLogout }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="transition-all dropdown-content bg-white px-3 py-1" id="dropdownMenu" role="menu">
      <ul className="transition-all listings-dropdown-link my-3 uppercase font-semibold text-gray-800 space-y-3 text-sm">
        <li>
          <Link
            to="/listings"
            className="hover:text-teal-700 transition duration-300 hover:underline"
          >
            View Listings
          </Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <div className="profile-link my-4 flex items-center justify-between px-1">
          <Link
            to="/profile"
            className="hover:scale-110 transition duration-300"
          >
            <img src={profileIcon} alt="Profile" className="h-6 w-6" />
          </Link>
          <button
            onClick={handleLogout}
            className="hover:text-teal-700 transition duration-300 hover:underline"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="loggedout-section flex flex-row justify-between items-center mt-3 space-y-3">
          <Link
            to="/login"
            className="block hover:text-teal-700 transition duration-300 hover:underline"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block rounded bg-teal-700 text-white w-20 text-center hover:bg-teal-900 transition duration-300"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
