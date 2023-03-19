import axios from "axios"


export const getAllMovies = (searchMovie)=>async(dispatch)=>{

    const result = await axios.get(`https://www.omdbapi.com/?apikey=8ed46bd3&s=${searchMovie}`)
    dispatch({
        type:"GET_ALL_MOVIES",
        payload:result.data.Search
    })
}

export const getMoviesById = (id)=>async(dispatch)=>{
    const result = await axios.get(`https://www.omdbapi.com/?apikey=8ed46bd3&i=${id}`)
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

export const addToFavourite = (id)=>async(dispatch)=>{
    dispatch({
        type:"ADD_TO_FAVOURITE",
        payload:id
    })
}

export const removeFromFavourite = (id)=>async(dispatch)=>{
    dispatch({
        type:"REMOVE_FROM_FAVOURITE",
        payload:id
    })
}

export const isFavourite = (isFav,id)=>async(dispatch)=>{
    dispatch({
        type:"IS_FAVOURITE",
        payload:{isFav,id}
    })
}