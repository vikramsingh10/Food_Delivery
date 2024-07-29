import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Header = () => {
  const { btnName, onClick } = useLogin();

  return (
    <div className="flex justify-evenly items-center p-4 bg-white shadow-lg mx-2 mt-2 ">
      <div>
        <Link to="/">
          <img
            className="w-32 h-auto cursor-pointer"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-8 text-lg list-none p-0 m-0">
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
          className="ml-4 px-4 py-2 text-xl hover:text-blue-500 text-black rounded duration-300 hover:shadow-lg">
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
