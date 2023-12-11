import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import DropdownMenu from "./DropDownMenu";
import NavigationLinks from "./NavigationLinks";
import UserNavSection from "./UserSection";
import HamburgerMenuButton from "./HamburgerButton";
import Logo from "../../assets/images/logo.png";

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
    <div className="navbar-container flex flex-wrap h-30">
      <section className="navbar-section relative mx-5 w-screen">
        <nav className="navbar text-black">
          {/* Main Flex Container */}
          <div className="navbar-main flex justify-between items-center mx-3 py-5">
            {/* Logo */}
            <Link
              to="/"
              className="navbar-logo"
            >
              <div className="logo-container w-3/4">
              <img src={Logo} alt="Logo" className="logo-img w-full" />
              </div>
            </Link>

            {/* Navigation Links for Larger Screens */}
            <div className="navbar-links-container hidden sm:flex justify-center ">
              <NavigationLinks />
            </div>

            {/* UserNavSection for Larger Screens */}
            <div className="navbar-user-section hidden sm:flex items-center justify-end">
              <UserNavSection
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
              />
            </div>

            {/* Hamburger Menu Button for Smaller Screens */}
            <HamburgerMenuButton
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
              className="navbar-hamburger sm:hidden"
            />
          </div>

          {/* Dropdown Menu for Smaller Screens */}
          <DropdownMenu
            isMenuOpen={isMenuOpen}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
