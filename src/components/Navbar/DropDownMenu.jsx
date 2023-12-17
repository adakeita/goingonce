import { Link } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-black.svg";

const DropdownMenu = ({ isMenuOpen, isLoggedIn, handleLogout }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="dropdown-content px-5 py-3">
      <ul className="uppercase font-heading space-y-3">
        <li><Link to="/listings" className="hover:text-teal-800">View Listings</Link></li>
      </ul>
      {isLoggedIn ? (
        <div className="mt-3 space-x-3">
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
