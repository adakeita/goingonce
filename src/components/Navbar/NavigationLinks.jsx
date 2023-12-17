import { Link } from "@tanstack/react-router";

const NavigationLinks = () => {
  return (
    <ul className="navbar-links flex space-x-6 tracking-wide items-center justify-around text-l uppercase transition-all hover:transition-all">
      <li><Link to="/listings" className="navbar-link transition-all hover:transition-all hover:text-teal-800 hover:font-semibold cursor-pointer">View Listings</Link></li>
    </ul>
  );
};

export default NavigationLinks;

