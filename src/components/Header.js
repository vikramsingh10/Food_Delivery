import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Header = () => {
  const { btnName, onClick } = useLogin();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md border-b-4 border-gray-800">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-32 h-auto cursor-pointer"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-lg list-none p-0 m-0">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition-colors duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors duration-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-blue-500 transition-colors duration-300">
              Cart
            </Link>
          </li>
        </ul>
        <button
          onClick={onClick}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded transition-colors duration-300 hover:bg-blue-700">
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
