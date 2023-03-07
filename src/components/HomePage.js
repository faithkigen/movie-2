import React,{useState} from "react";
import { useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import { Link } from "react-router-dom"

let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];

 function SearchMovie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const SearchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');
    const url = `https:9292/movies`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
   <div className="movie">
      <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query">
          Movie Title:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="search a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Search</button>
        <Link to="/search" className="btn btn-main">
                search
              </Link>
      </form>
      </div >
      <div className="card-list">
        {/* { {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))} } */}
      </div>
    </>
  );
}
const Homepage=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])
    const[movies, setMovies] = useState([])
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:9292/movies")
    .then(response=>response.json())
    .then(data=>setMovies(data))
    fetch("http://localhost:9292/users")
    .then(response=>response.json())
    .then(data=> setUsers(data))
  },[])

  const movieArray=movies.map((movie)=>{
    return <div>
         <img src={movie.image_url}/>
         <h2>{movie.title}</h2>
         <p>{movie.genre}</p>
         <p>{movie.year}</p>
         <p>{movie.rating}</p>
        <p>{movie.description}</p>
      </div>

  })


  return (
    <div className="App">
      <h1 className="header">SETFLIX</h1>
      
     
      <div style={{display:"flex", autoresize: "max-width: 100%", height: "auto", border: "0.5px, solid"}}>
          {movieArray}
          </div>
     <h1></h1>
  </div>
   );
 
 
  }
  export default Homepage; 
 
 