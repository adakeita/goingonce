import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-white.svg";
import notificationIcon from "../../assets/notification-white.svg";
import hamburgerIcon from "../../assets/hamburger-icon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("jwtToken"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap h-30">
      <section className="relative mx-auto w-screen">
        <nav className="bg-teal-600 text-white">
          <div className="px-5 py-6 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold font-heading">
              Logo Here.
            </Link>
            <div className="mr-5 flex items-center sm:hidden">
              <button onClick={toggleMenu}>
                <img src={hamburgerIcon} alt="Menu" className="h-7 w-7" />
              </button>
            </div>
          </div>

          {/* Dropdown Menu for smaller screens */}
          <div
            className={`px-5 py-3 ${isMenuOpen ? "block" : "hidden"} sm:hidden`}
          >
            <ul className="font-semibold font-heading space-y-3">
              <li>
                <Link to="/Listings" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/listings" className="hover:text-gray-200">
                  Listings
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <div className="mt-3 space-x-3">
                <Link to="/alerts" className="hover:text-gray-200">
                  <img
                    src={notificationIcon}
                    alt="Notifications"
                    className="h-8 w-8"
                  />
                </Link>
                <Link to="/profile" className="hover:text-gray-200">
                  <img src={profileIcon} alt="Profile" className="h-6 w-6" />
                </Link>
                <button onClick={handleLogout} className="hover:text-gray-200">
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login" className="hover:text-gray-200 block">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-200 block">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Menu for larger screens */}
          <div className="hidden sm:flex justify-around items-center px-5 py-3">
            <ul className="flex space-x-12 font-semibold font-heading">
              <li>
                <Link to="/Listings" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/listings" className="hover:text-gray-200">
                  Listings
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <div className="loggedin-nav-items flex space-x-3 mx-5">
                <div className="alerts-prpfile-large flex space-x-2 items-center mx-14">
                  <Link to="/profile" className="hover:text-gray-200">
                    <img src={profileIcon} alt="Profile" className="h-6 w-6" />
                  </Link>
                  <Link to="/alerts" className="hover:text-gray-200">
                    <img
                      src={notificationIcon}
                      alt="Notifications"
                      className="h-8 w-8"
                    />
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="justify-end hover:text-gray-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
