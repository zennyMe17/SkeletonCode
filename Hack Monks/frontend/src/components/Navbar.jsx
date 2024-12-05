import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import logo from '../assets/brand_logo.png';
import { toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { FaLock } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.error('Logged out Successfully!', { icon: <FaLock /> });
  };

  const getHighlightClass = (path) =>
    location.pathname === path
      ? 'text-blue-300 relative after:content-[""] after:block after:w-3/4 after:h-[2px] after:bg-blue-300 after:mx-auto after:mt-1'
      : 'hover:text-gray-300';

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 p-4 z-10 w-10/12 mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Brand Logo" className="h-14 w-auto opacity-80" />
        </Link>

        {/* Links for Home, Contact Us, and Chatbot */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className={`text-white text-xl font-semibold font-sans ${getHighlightClass('/')}`}
          >
            Home
          </Link>

          {/* Conditionally render Contact Us and Chatbot based on login status */}
          {isLoggedIn && (
            <>
              <Link
                to="/chatbot" // Assuming the route for the chatbot is '/chatbot'
                className={`text-white text-xl font-semibold font-sans ${getHighlightClass('/chatbot')}`}
              >
                Chatbot
              </Link>
              <Link
                to="/about-us" // Assuming the route for the chatbot is '/chatbot'
                className={`text-white text-xl font-semibold font-sans ${getHighlightClass('/about-us')}`}
              >
                About Us
              </Link>
            </>
          )}
        </div>

        <div className="flex space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-white text-xl font-semibold font-sans border border-white px-3 py-1.5 rounded-lg transition hover:shadow-[0px_0px_10px_2px_rgba(59,130,246,0.6)]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white text-xl font-semibold font-sans border border-white px-3 py-1.5 rounded-lg transition hover:shadow-[0px_0px_10px_2px_rgba(45,212,191,0.6)]"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-white text-xl font-semibold font-sans border border-white px-3 py-1.5 rounded-lg transition hover:shadow-[0px_0px_10px_2px_rgba(59,130,246,0.6)]"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-white text-xl font-semibold font-sans border border-white px-3 py-1.5 rounded-lg transition hover:shadow-[0px_0px_10px_2px_rgba(220,38,38,0.6)]"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
