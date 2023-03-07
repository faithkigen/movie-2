import React, { useState } from 'react';



const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleAddMovies = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
   
   //  setTitle('');
   //  setDescription('');
   //  history.push('/movies');
  };

  return (
    <div className='add-movies-container'>
      <form onSubmit={handleAddMovies} className='movie-form'>
//       <h1>Add a </h1>
//         <label>Movie title</label>
//         <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Movie description</label>
        <textarea
          type='text'
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Create Movie</button>
      </form>
      <section className="add-movie-img">
        {/* <img src={img} alt="Develop app" /> */}
      </section>
    </div>
  );
};

export default AddMovie;