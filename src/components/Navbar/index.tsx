import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LangDropDown from "../LangDropDown";
import Favorite from "../Favorite";
import { useSelector } from "react-redux";
import IMovie from "../../Interfaces/IMovie";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const favorite = useSelector(
    (state: { favorite: { favorite: IMovie[] } }) => state.favorite.favorite
  );

  // eye to toggle password visibility

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-bgDark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Azena
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
            id="user-menu-button"
            aria-expanded="false"
            // aria-haspopup="true"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            aria-controls="user-dropdown"
            onClick={handleUserMenuToggle}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-12 h-12 rounded-full bg-fixed"
              src="imgs/avatar.jpg"
              alt="user photo"
            />
          </button>

          {/*  for routing to login */}
          <div className="hidden md:flex md:space-x-4 rtl:space-x-reverse ">
            <Link
              to="/login"
              className="hidden md:block py-2 px-4 text-sm text-gray-900 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200 ml-1
              hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hidden md:block py-2 px-4 text-sm text-white bg-blue-700 rounded-lg dark:bg-blue-600"
            >
              Register
            </Link>

            {/* languages */}
            <LangDropDown />
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "px-4 text-blue-700 bg-gray-100 dark:bg-gray-700 dark:text-white p-4  md:bg-transparent md:text-gray-900 shadow-inner  md:dark:text-gray-900"
                      : "text-gray-900"
                  } block py-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " py-0 px-4 text-blue-700 bg-gray-100 dark:bg-gray-700 dark:text-white p-4  md:bg-transparent md:text-gray-900 shadow-inner  md:dark:text-gray-900"
                      : "text-gray-900"
                  } block rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-700 py-0 px-4 bg-gray-100 dark:bg-gray-700 dark:text-white p-4  md:bg-transparent md:text-gray-900 shadow-inner  md:dark:text-gray-900"
                      : "text-gray-900"
                  } block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-700 py-0 px-4 bg-gray-100 dark:bg-gray-700 dark:text-white p-4  md:bg-transparent md:text-gray-900 shadow-inner  md:dark:text-gray-900"
                      : "text-gray-900"
                  } block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="relative">
              <Favorite />
              {favorite.length > 0 && (
                <div className="absolute bottom-2 left-16 text-center items-center inline-block w-6 h-6 bg-red-500 text-white text-base rounded-full">
                  {favorite.length}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
