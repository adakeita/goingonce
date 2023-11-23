import hamburgerIcon from "../../assets/hamburger-icon.svg";

const HamburgerMenuButton = ({ toggleMenu }) => {
  return (
    <div className="mr-5 flex items-center sm:hidden">
      <button onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" className="h-7 w-7" />
      </button>
    </div>
  );
};

export default HamburgerMenuButton;
