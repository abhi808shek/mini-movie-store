const initialValue = {
    allMovies:[],
    movieById:{},
    searchMovie:"Titanic"
}

export const moviesReducer = (state=initialValue,action)=>{
    switch (action.type) {
        case "GET_ALL_MOVIES":
            return {...state,allMovies:action.payload}

            case "GET_MOVIES_BY_ID":
                return {...state,movieById:action.payload}
                case "SEARCHED_MOVIE":
                    return {...state,searchMovie:action.payload}
        default:
            return state;
    }
}