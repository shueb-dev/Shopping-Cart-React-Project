import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 shadow backdrop-blur-md z-10 ">
      <div className="max-w-4xl flex justify-between items-center m-auto p-3">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Suuqify
        </Link>
        <ul className="flex gap-4 text-gray-700 ">
          <Link
            to="/"
            className="hover:text-blue-600  transition duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Products
          </Link>
          <Link
            to="/About"
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Cart
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Contact
          </Link>
          <div className="hover:text-blue-600 transition duration-200 ease-in-out relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-blue-400 w-5 h-5 rounded-full flex justify-center items-center text-white text-sm">
              0
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
