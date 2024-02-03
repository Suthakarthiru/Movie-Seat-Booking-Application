// MovieList.jsx
import React from 'react';

const MovieList = ({ movies, onSelectMovie, selectedMovie }) => {
  return (
    <div>
      <h2>Select a Movie</h2>
      <select
        onChange={(e) => onSelectMovie(JSON.parse(e.target.value))}
        value={selectedMovie ? JSON.stringify(selectedMovie) : ''}
      >
        <option value="" disabled>
          Select a movie
        </option>
        {movies.map((movie) => (
          <option key={movie.id} value={JSON.stringify(movie)}>
            {movie.title} - ${movie.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieList;
