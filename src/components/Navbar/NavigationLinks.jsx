// NavigationLinks.js
import { Link } from "@tanstack/react-router";

const NavigationLinks = () => {
  return (
    <ul className="flex space-x-12 font-semibold font-heading">
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
      <li><Link to="/listings" className="hover:text-gray-200">Listings</Link></li>
    </ul>
  );
};

export default NavigationLinks;