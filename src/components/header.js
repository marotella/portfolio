import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1 className="md:text-8xl text-white text-4xl font-[800] text-center">Michelle Rotella</h1>
      <hr class="border border-solid border-white my-4"></hr>

      <nav className="p-4 text-white">
        <div className="md:hidden flex justify-between">
          <button
            type="button"
            className="text-white hover:text-white-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-around`}
        >
          <Link
            to="/"
            className="block py-2 px-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4"
          >
            Contact
          </Link>
          <Link
            to="/projects"
            className="block py-2 px-4"
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

