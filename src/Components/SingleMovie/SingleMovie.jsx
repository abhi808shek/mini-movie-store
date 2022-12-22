import React, { useEffect } from "react";
import "./singlemovie.css";
import { useDispatch,useSelector } from "react-redux";
import { getAllMovies,getMoviesById } from "../Redux/actionCreator";
import {NavLink} from "react-router-dom"


const SingleMovie = () => {
  const dispatch = useDispatch();
  const {allMovies,searchMovie} = useSelector((state)=>state.moviesReducer);
  console.log("dbiudb",allMovies);
  console.log("searchMovie",searchMovie);
  useEffect(() => {
    dispatch(getAllMovies(searchMovie));
  },[]);
  return (
    <div className="single-movie-card-full-page">
      <div className="single-movie-cards">
      {allMovies?.length ? allMovies.map((item)=>{
        return(<NavLink to={`/${item.imdbID}`} className="single-movie-card-box" key={item.imdbID} onClick={()=>dispatch(getMoviesById(item.imdbID))}>
         
        <h1 className="single-movie-card-box-heading">{item.Title.length > 15 ? `${item.Title.substring(0,12)}...` : item.Title}</h1>
        <img
          src={item.Poster}
          alt=""
          className="single-movie-card-box-img"
        /> 
     
        </NavLink> )
      }):<h1>No MOviews Found</h1>
    }
      </div>
    </div>
  );
};

export default SingleMovie;
