import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderHome() {
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
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-around`}
        >

          <Link
            to="/"
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
          >
            <span class="material-symbols-outlined md:text-4xl text-3xl">
              home
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
              Home
            </span>
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
          >
            <span className="material-symbols-outlined md:text-4xl text-3xl">
              face_3
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
              About
            </span>
          </Link>

          <Link
            to="/contact"
            className="block py-1 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
          >
            <span className="material-symbols-outlined md:text-4xl text-3xl">
              mail
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
              Contact
            </span>
          </Link>
          <Link
            to="/projects"
            className="block py-1 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
          >
            <span className="material-symbols-outlined md:text-4xl text-3xl">
              work
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
              Work
            </span>
          </Link>
        </div>
      </nav>
      <hr class="border border-solid border-green mt-2 mb-4"></hr>

    </header>
  );
}

export default HeaderHome;
