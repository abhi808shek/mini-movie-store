const initialValue = {
  allMovies: [],
  movieById: {},
  allFavouriteMovies: [],
  searchMovie: "Titanic",
  isFavouriteMovies: true,
};

export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIES":
      return { ...state, allMovies: action.payload };

    case "GET_MOVIES_BY_ID":
      return { ...state, movieById: action.payload };
    case "SEARCHED_MOVIE":
      return { ...state, searchMovie: action.payload };
    case "ADD_TO_FAVOURITE":
      const favouriteMovies = state.allMovies.filter(
        (movie) => movie.imdbID === action.payload
      );
      return { ...state, allFavouriteMovies: favouriteMovies };
    case "REMOVE_FROM_FAVOURITE":
      const unFavouriteMovies = state.allMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      return { ...state, allFavouriteMovies: unFavouriteMovies };
    case "IS_FAVOURITE":
      console.log(action.payload, "adcd");
   
      return { ...state, isFavouriteMovies: action.payload.isFav };
    default:
      return state;
  }
};
