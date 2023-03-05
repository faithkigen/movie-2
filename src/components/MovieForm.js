import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.themoviedb.org/3${title}&y=${year}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle successful response
        // ...
      } else {
        // Handle failed response
        // ...
      }
    } catch (error) {
      console.error(error);
      // Handle error
      // ...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={handleYearChange} />
      </label>
      <button type="submit">Search</button>
      <Link to="/">Back to Home</Link>
    </form>
  );
};

export default MovieForm;
