import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountrySearch from './pages/CountrySearch';
import CountryDetail from './pages/CountryDetail';
import CountryFilter from './pages/CountryFilter';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<CountrySearch />} />
          <Route path="/detail/:name" element={<CountryDetail />} />
          <Route path="/filter" element={<CountryFilter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
