import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Skeleton from '../components/Skeleton';
import backgroundImage from "../asset/background.jpg";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        setCountry(response.data[0]);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton/>
      </div>
    );
  }

  return (
    <div className="p-4 bg-cover bg-center min-h-screen text-slate-100" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <h2 className="text-5xl font-bold mb-4 text-center">{country.name.common}</h2>
      <img src={country.flags.png} alt={`${country.name.common} flag`} className='m-auto mb-4'/>
      <div className='ml-[585px] text-lg drop-shadow-md'>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
        <p>Currency: {Object.keys(country.currencies)[0]}</p>
        <p>Language(s): {Object.values(country.languages).join(', ')}</p>
        <p>Location: <a className='text-blue-900 hover:underline transition ease-in-out delay-30' href={`https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`} target="_blank" rel="noopener noreferrer">View on Map</a></p>
      </div>
    </div>
  );
};

export default CountryDetail;
