import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search'); 

  useEffect(() => {
    const fetchMovies = () => {
      const endpoint = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}&page=${page}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`;


      axios.get(endpoint)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching the movies', error);
        });
    };

    fetchMovies();
  }, [query, page]);

  return (
    <div>
      <h1>{query ? `Results for "${query}"` : 'Popular Movies'}</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
