import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import image from '../asset/globe.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-900">Welcome to World University</h1>
      <img src={image} alt='World University'
        className='m-auto '></img>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-5">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <CountryCard key={index} loading={true} />)
          : countries.map(country => (
              <CountryCard key={country.cca3} country={country} loading={false} />
            ))}
      </div>

      <div className='text-xl text-center mx-80 text-red-950'>
      <p >
        We are proud to present WorldUniversity, an innovative platform specifically designed to help students and researchers gain in-depth information about countries around the world. Here, you can explore a wealth of data, from flags and geographical locations to detailed insights that enhance your understanding of each nation.</p>
      <p >
        With advanced search features and customizable data filters, WorldUniversity makes it easy to find the information you need, whenever and wherever you are. Whether you're conducting academic research, planning to study abroad, or simply curious about a particular country, this platform is here to provide you with a seamless and informative experience.</p>
      <p >
        Explore the world with WorldUniversity and discover the information you need with just a few clicks.</p>
      <p className='font-semibold'>
        Happy Exploring!</p>

      </div>
      <div className='flex '>
        <Link to="/search">See More </Link>
        <FaArrowRight/>
      </div>
      
    </div>
  );
};

export default Home;
