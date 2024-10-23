import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${search}`);
    } else {
      alert('Please enter a search term!');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Movie Time</h1>
      </div>

      {/* Burger Menu for Mobile */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={menuOpen ? 'line open' : 'line'}></div>
        <div className={menuOpen ? 'line open' : 'line'}></div>
        <div className={menuOpen ? 'line open' : 'line'}></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Popular Movies</Link>
        <Link to="/top-rated" onClick={toggleMenu}>Top Rated</Link>
        <Link to="/upcoming" onClick={toggleMenu}>Upcoming</Link>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;

