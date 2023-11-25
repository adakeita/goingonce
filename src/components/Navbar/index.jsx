import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import DropdownMenu from "./DropDownMenu";
import NavigationLinks from "./NavigationLinks";
import UserNavSection from "./UserSection";
import HamburgerMenuButton from "./HamburgerButton";

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
        <nav className="bg-orange-600 text-white">
          {/* Main Flex Container */}
          <div className="flex justify-between items-center px-5 py-6">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold font-heading">
              Logo Here.
            </Link>
            {/* Hamburger Menu Button for Smaller Screens */}
            <HamburgerMenuButton
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
              className="sm:hidden"
            />

            {/* UserNavSection for Larger Screens */}
            <div className="hidden sm:flex items-center justify-end px-4">
              <UserNavSection
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
              />
            </div>
          </div>
          {/*Navigation Links for Larger Screens*/} 
          <div className="navigation-links hidden sm:flex justify-evenly pb-4">
              <NavigationLinks />
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
