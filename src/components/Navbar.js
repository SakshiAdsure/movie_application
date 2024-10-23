
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (search.trim()) {
      navigate(`/?search=${search}`);
    } else {
      alert('Please enter a search term!');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Movie Time</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Popular Movies</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
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

