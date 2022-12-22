import axios from "axios"


export const getAllMovies = (searchMovie)=>async(dispatch)=>{

console.log("searchMovie",searchMovie);
    const result = await axios.get(`https://www.omdbapi.com/?apikey=8ed46bd3&s=${searchMovie}`)
    console.log(result.data.Search);
    dispatch({
        type:"GET_ALL_MOVIES",
        payload:result.data.Search
    })
}

export const getMoviesById = (id)=>async(dispatch)=>{
    const result = await axios.get(`https://www.omdbapi.com/?apikey=8ed46bd3&i=${id}`)
    console.log("data",result);
    dispatch({
        type:"GET_MOVIES_BY_ID",
        payload:result.data
    })
}

export const searchedMovie = (movie)=>async(dispatch)=>{
    dispatch({
        type:"SEARCHED_MOVIE",
        payload:movie
    })
}