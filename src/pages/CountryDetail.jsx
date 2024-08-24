// src/pages/CountryDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

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
        <Skeleton className="h-10 w-1/2 mb-4" />
        <Skeleton className="h-6 w-1/4 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{country.name.common}</h2>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <p>Currency: {Object.keys(country.currencies)[0]}</p>
      <p>Language(s): {Object.values(country.languages).join(', ')}</p>
      <p>Location: <a href={`https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`} target="_blank" rel="noopener noreferrer">View on Map</a></p>
    </div>
  );
};

export default CountryDetail;
