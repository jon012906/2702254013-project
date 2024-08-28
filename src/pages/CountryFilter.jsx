import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import backgroundImage from "../asset/background.jpg";

const CountryFilter = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [independent, setIndependent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countriesData = response.data;
        setCountries(countriesData);
        setFilteredCountries(countriesData);
        setLoading(false);

        const languageSet = new Set();
        countriesData.forEach(country => {
          Object.values(country.languages || {}).forEach(lang => languageSet.add(lang));
        });
        setLanguages(Array.from(languageSet));
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
    <div className="p-4 bg-cover bg-center text-slate-100 min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <h1 className="text-5xl font-bold mb-4 text-center">What's Region Are You Looking For?</h1>

      <div className="md:mb-4 md:flex md:gap-4">
        <div className='mb-4'>
          <label className="block mb-2">Region</label>
          <select
            value={region}
            onChange={e => setRegion(e.target.value)}
            className="border p-2 w-80 text-gray-900">

            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        
        <div>
          <label className="block mb-2">Language</label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="border p-2 w-96 text-gray-900">
            <option value="">All Languages</option>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <div>

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={independent}
            onChange={e => setIndependent(e.target.checked)}
            className="mr-2 mt-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            Independent Countries Only
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <CountryCard key={index} loading={true} />)
          : filteredCountries.length > 0
          ? filteredCountries.map(country => (
              <CountryCard key={country.cca3} country={country} loading={false} />
            ))
          : <p className='mt-20 text-center font-bold text-red-600 col-span-full text-xl'>No countries found.</p>}
      </div>
    </div>
  );
};

export default CountryFilter;
