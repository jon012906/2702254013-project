import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

const CountryCard = ({ country, loading }) => {
  if (loading) {
    return (
      <div className="border rounded shadow-md p-4 animate-pulse">
        <Skeleton type="image" />
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    );
  }

  if (!country || !country.flags || !country.name) {
    return null;
  }

  return (
    <Link to={`/detail/${country.name.common}`}>
      <div className="bg-slate-50 border rounded-md shadow p-4 hover:shadow-xl">
        <img src={country.flags.png} alt={`${country.name.common} flag`} 
          className="w-64 h-32 m-auto"/>
        <div className='mt-2 r-5 text-center'>
          <h2 className="text-xl font-bold mb-2">{country.name.common}</h2>
          <p className="text-gray-600">{country.region}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
