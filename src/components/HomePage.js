import React,{useState} from "react";
import { useEffect } from "react";
import Card from "./Card";
import Delete from "./Delete";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedy"];
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
  const userArray=users.map((user)=>{
    return <h2>{user.name}</h2>
  })
  return (
    <div className="App">
      <h1>Setflix</h1>
      {/* Css style */}
    <div style={{display:"flex"}}>
      {movieArray}
      </div>
     <h1></h1>
    {userArray}
  </div>
  );
   
}
export default Homepage;