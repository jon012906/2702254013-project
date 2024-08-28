import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import image from '../asset/globe.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../asset/background.jpg";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const popularCountries = response.data.slice(8, 12);
        setCountries(popularCountries);
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-cover bg-center h-auto" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <h1 className="text-3xl font-bold mb-4 text-center text-slate-100">Welcome to World University</h1>
      <img src={image} alt='World University'
        className='m-auto md:h-auto h-64'></img>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-5">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <CountryCard key={index} loading={true} />)
          : countries.map(country => (
              <CountryCard key={country.cca3} country={country} loading={false} />
            ))}
      </div>

      <div className='md:text-xl text-center md:mx-80 text-slate-100 shadow-2xl p-4 rounded-md bg-gradient-to-r from-cyan-500 '>
        <p>
          We are proud to present World University, an innovative platform specifically designed to help students and researchers gain in-depth information about countries around the world. Here, you can explore a wealth of data, from flags and geographical locations to detailed insights that enhance your understanding of each nation.
          Explore the world with World University and discover the information you need with just a few clicks.</p>
        <p className='font-semibold mb-5'>
          -Happy Exploring!-</p>

        <button className='p-2 mb-4 flex mx-auto text-slate-100 bg-blue-600 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition ease-in-out delay-30'>
          <Link to="/search" className='font-semibold'>Learn More </Link>
          <FaArrowRight size={33}/>
        </button>
      </div>
      
    </div>
  );
};

export default Home;
