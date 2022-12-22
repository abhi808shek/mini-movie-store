import React from 'react'
import "./search.css"
import { useDispatch,useSelector } from "react-redux";
import { getAllMovies,searchedMovie } from '../Redux/actionCreator';


const Search = () => {
 const {searchMovie} = useSelector((state)=>state.moviesReducer)
  const dispatch = useDispatch()
  return (
    <div className='search-box-page'>
      <h1 className='search-box-text'>Search Your Favourite Movies</h1>
      <input type="text" className='search-box-input' onChange={(event)=>{
        dispatch(searchedMovie(event.target.value))
        dispatch(getAllMovies(searchMovie));
      }}/>
    </div>
  )
}

export default Search;
