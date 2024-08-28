import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import backgroundImage from "../asset/background.jpg";
import Skeleton from '../components/Skeleton';

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <h1 className='text-slate-100 text-center font-bold text-3xl mb-4'>What's Country Are You Looking for?</h1>

      <div className='flex justify-center'>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border p-2 mb-4 w-96 flex justify-center"
          />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} />
          ))
        ) : filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p className="mt-20 text-center font-bold text-red-600 col-span-full text-xl">
            No countries found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;
