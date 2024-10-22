import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import MovieDetail from "../components/MovieDetail"
import AddFavourites from '../components/AddFavourites'

// require("dotenv").config();

// console.log(process.env.REACT_APP_API_KEY)

const API_KEY = import.meta.env.REACT_APP_API_KEY;

const PageMovie =()=> {
  const [movie, setMovie] = useState(); 
  const { id } = useParams(); 

useEffect(() => {
  // only triggered when id changes
  const getMovie = async () => { //async -> dont wait me just do
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos
      `);
      //this includes movies :D
      const moviesDataFromAPI = await response.json();
      setMovie(moviesDataFromAPI);
  }

  getMovie();
}, [id])

console.log(movie); 
// console.log(setMovie); 
  return (
    <div>
       { movie ? <MovieDetail movie={movie} favouriteComponent={AddFavourites}/>: console.log("error")}
       
    </div>
 
  )
}

export default PageMovie; 