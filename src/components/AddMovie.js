import React, { useState } from 'react';
import AddMovie from './AddMovie';

function App() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  return (
    <div>
      <h1>Movie Website</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
      <AddMovie onAdd={handleAddMovie} />
    </div>
  );
}

export default App;
