import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

const handleClick = () => {
  setNav(!nav);
}

  return (
    <>
      <div className="bg-gray-100/10 px-4 py-2 sticky top-0 z-30 backdrop-blur-3xl h-[90px] flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-4 primary-color">Bhavik Patel</h1>

        <ul className="hidden md:flex">
          <li className="p-5">
            <Link to="home" smooth="true" duration={800} offset={-90} activeClass="active-link" className="cursor-pointer  relative transition duration-150 ease-in-out before:absolute before:left-0 before:bottom-[-0.4rem] before:w-full before:h-1 before:bg-[#a993fe] before:opacity-0 before:transform before:scale-x-0 before:origin-left before:transition before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:scale-x-100 focus:before:opacity-100 focus:before:scale-x-100 before:rounded-md">
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link to="skills" smooth="true" duration={800} className="cursor-pointer  relative transition duration-150 ease-in-out before:absolute before:left-0 before:bottom-[-0.4rem] before:w-full before:h-1 before:bg-[#a993fe] before:opacity-0 before:transform before:scale-x-0 before:origin-left before:transition before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:scale-x-100 focus:before:opacity-100 focus:before:scale-x-100 before:rounded-md">
              Skills
            </Link>
          </li>
          <li className="p-5">
            <Link to="projects" smooth="true" duration={800} className="cursor-pointer  relative transition duration-150 ease-in-out before:absolute before:left-0 before:bottom-[-0.4rem] before:w-full before:h-1 before:bg-[#a993fe] before:opacity-0 before:transform before:scale-x-0 before:origin-left before:transition before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:scale-x-100 focus:before:opacity-100 focus:before:scale-x-100 before:rounded-md">
              Projects
            </Link>
          </li>
          <li className="p-5">
            <Link to="contact" smooth="true" duuration={800} className="cursor-pointer  relative transition duration-150 ease-in-out before:absolute before:left-0 before:bottom-[-0.4rem] before:w-full before:h-1 before:bg-[#a993fe] before:opacity-0 before:transform before:scale-x-0 before:origin-left before:transition before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:scale-x-100 focus:before:opacity-100 focus:before:scale-x-100 before:rounded-md">
              Contact
            </Link>
          </li>
        </ul>

        <a
          href="https://github.com/bhavikpatel9"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Github Profile
        </a>
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed h-screen left-0 top-0 w-[70%] bg-[#342864] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl font-bold m-4 primary-color">Bhavik Patel</h1>
          <ul className="p-8 pt-0 text-2xl bg-[#342864]">
            <li className="p-2">
              <Link to="home" smooth="true" duration={800} offset={-90} onClick={handleClick}>Home</Link>
            </li>
            <li className="p-2">
              <Link to="skills" smooth="true" duration={800} onClick={handleClick}>Skills</Link>
            </li>
            <li className="p-2">
            <Link to="projects" smooth="true" duration={800} onClick={handleClick}>Projects</Link>
            </li>
            <li className="p-2 mb-2">
            <Link to="contact" smooth="true" duration={800} onClick={handleClick}>Contact</Link>
            </li>
            <li>
              <a
              href="https://github.com/bhavikpatel9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
            >
              Github Profile
            </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
