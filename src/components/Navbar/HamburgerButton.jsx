import hamburgerIcon from "../../assets/hamburger-icon.svg";

const HamburgerMenuButton = ({ toggleMenu }) => {
  return (
    <div className="mx-1 h-7 w-7 flex items-center sm:hidden">
      <button onClick={toggleMenu}>
        <img className="object-contain" src={hamburgerIcon} alt="Menu" />
      </button>
    </div>
  );
};

export default HamburgerMenuButton;
