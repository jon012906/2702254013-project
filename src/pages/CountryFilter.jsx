import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';

const CountryFilter = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [independent, setIndependent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
        setLoading(false);
      });
  }, []);

  const handleFilter = useCallback(() => {
    let filtered = countries;

    if (region) {
      filtered = filtered.filter(country => country.region === region);
    }

    if (language) {
      filtered = filtered.filter(country =>
        Object.values(country.languages || {}).includes(language)
      );
    }

    if (independent) {
      filtered = filtered.filter(country => country.independent === true);
    }

    setFilteredCountries(filtered);
  }, [region, language, independent, countries]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Filter Countries</h1>

      <div className="mb-4">
        <label className="block mb-2">Region</label>
        <select
          value={region}
          onChange={e => setRegion(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <label className="block mb-2">Language</label>
        <input
          type="text"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          placeholder="Enter language (e.g., English)"
          className="border p-2 w-full mb-4"
        />

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={independent}
            onChange={e => setIndependent(e.target.checked)}
            className="mr-2"
          />
          Independent Countries Only
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <CountryCard key={index} loading={true} />)
          : filteredCountries.length > 0
          ? filteredCountries.map(country => (
              <CountryCard key={country.cca3} country={country} loading={false} />
            ))
          : <p>No countries found matching the criteria.</p>}
      </div>
    </div>
  );
};

export default CountryFilter;
