import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* <h1 className="md:text-8xl text-white text-4xl font-[800] text-center opacity-0 animate-fadeInFast pt-4">Michelle Rotella</h1> */}
      <hr class="border border-solid border-green my-4"></hr>

      <nav className="p-4 text-white">
        <div className="md:hidden flex justify-between">
          <button
            type="button"
            className="text-white bg-green hover:text-[600] p-2 border-white"
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
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600]"
          >
            About Me
          </Link>

          <img className="icon" src={process.env.PUBLIC_URL + "/M.png"} alt="project" />

          <Link
            to="/contact"
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600]"
          >
            Contact
          </Link>
          <Link
            to="/projects"
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600]"
          >
            Projects
          </Link>
        </div>
      </nav>
      <hr class="border border-solid border-green my-4"></hr>

    </header>
  );
}

export default Header;

