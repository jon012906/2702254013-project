import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-teal-50 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="font-bold hover:underline text-xl">
          <Link to="/">
            World University
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-50">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        <nav className={`w-full md:w-auto absolute top-full left-0 ${isOpen ? 'block' : 'hidden'} md:static md:flex md:items-center font-semibold backdrop-blur-md bg-blue-400 md:bg-transparent`}>
          <ul className="md:flex md:space-x-10 space-y-2 md:space-y-0 p-4 md:p-0 md:mt-0 text-slate-100 border-t-2 md:border-t-0">
            <li>
              <Link to="/" className="block p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200">Home</Link>
            </li>
            <li>
              <Link to="/search" className="block p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200">Search</Link>
            </li>
            <li>
              <Link to="/filter" className="block p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200">Filter</Link>
            </li>
            <li>
              <Link to="/about" className="block p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
