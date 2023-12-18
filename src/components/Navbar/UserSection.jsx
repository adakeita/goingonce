import { Link } from "@tanstack/react-router";
import profileIcon from "../../assets/profile-black.svg";

const UserNavSection = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="user-action-wrapper w-full justify-evenly flex space-x-1 items-center">
      {isLoggedIn ? (
        <>
          <div className="profile-notif-wrapper flex items-center me-9">
            <Link to="/profile" className="hover:text-teal-800">
              <img src={profileIcon} alt="Profile" className="mx-1 h-6 w-6 hover:scale-110 transition-all" />
            </Link>
          </div>
          <button onClick={handleLogout} className="hover:text-teal-700 hover:underline">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className=" mx-2 hover:text-teal-700 hover:underline hover:font-semibold transition-all hover:transtion-all">
            Login
          </Link>
          <Link to="/register" className="mx-2 hover:bg-teal-700 transition ease-in-out delay-50 text-white uppercase px-3 bg-teal-700 rounded">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default UserNavSection;
