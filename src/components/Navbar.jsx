import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="bg-blue-600 p-4 text-teal-50 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <div className="font-bold hover:underline text-xl">
        <Link to="/">
          World University
        </Link>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <nav className="hidden w-full md:block md:w-auto font-semibold space-x-10">
        <div className='md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
          <Link to="/" className='p-2 rounded-md hover:text-blue-600 hover:bg-blue-200'>Home</Link>
          <Link to="/search" className='p-2 rounded-md hover:text-blue-600 hover:bg-blue-200'>Search</Link>
          <Link to="/filter" className='p-2 rounded-md hover:text-blue-600 hover:bg-blue-200'>Filter</Link>
          <Link to="/about" className='p-2 rounded-md hover:text-blue-600 hover:bg-blue-200'>About</Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
