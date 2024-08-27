import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-teal-50 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <div className="font-bold hover:underline text-xl">
        <Link to="/">
          World University
        </Link>
      </div>
      
      <nav className="hidden w-full md:block md:w-auto font-semibold space-x-10">
        <div className='md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
          <Link to="/" className='p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200'>Home</Link>
          <Link to="/search" className='p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200'>Search</Link>
          <Link to="/filter" className='p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200'>Filter</Link>
          <Link to="/about" className='p-2 rounded-md transition ease-in-out delay-30 hover:text-blue-600 hover:bg-blue-200'>About Us</Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
