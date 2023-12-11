// NavigationLinks.js
import { Link } from "@tanstack/react-router";

const NavigationLinks = () => {
  return (
    <ul className="navbar-links flex space-x-6 tracking-wide items-center justify-around text-l uppercase">
      <li><Link to="/listings" className="navbar-link hover:text-gray-200">View Listings</Link></li>
    </ul>
  );
};

export default NavigationLinks;

