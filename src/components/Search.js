import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };
  return (
    <div className="container">
      <h1>Search for Movies</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
export default Search;