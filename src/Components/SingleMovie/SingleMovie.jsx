import React, { useEffect } from "react";
import "./singlemovie.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  getMoviesById,
  // addToFavourite,
  // removeFromFavourite,
  // isFavourite
} from "../Redux/actionCreator";
import { NavLink } from "react-router-dom";

const SingleMovie = () => {
  const dispatch = useDispatch();
  const { allMovies, searchMovie,isFavouriteMovies } = useSelector(
    (state) => state.moviesReducer
  );
  useEffect(() => {
    dispatch(getAllMovies(searchMovie));
  }, []);
  return (
    <div className="single-movie-card-full-page">
      <div className="single-movie-cards">
        {allMovies?.length ? (
          allMovies.map((item,index) => {
            return (
              <div className="single-movie-card-box" key={index}>
                <NavLink
                  to={`/${item.imdbID}`}
                  key={item.imdbID}
                  onClick={() => dispatch(getMoviesById(item.imdbID))}
                >
                  <h1 className="single-movie-card-box-heading">
                    {item.Title.length > 15
                      ? `${item.Title.substring(0, 12)}...`
                      : item.Title}
                  </h1>
                  <img
                    src={item.Poster}
                    alt=""
                    className="single-movie-card-box-img"
                  />
                </NavLink>
                {/* <div className="single-movie-card-box-Btn">
                  {isFavouriteMovies ? (
                    <button
                      onClick={() => {
                        dispatch(addToFavourite(item.imdbID));
                        dispatch(isFavourite(!isFavouriteMovies,item.imdbID));
                      }}
                    >
                      Fav
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(removeFromFavourite(item.imdbID));
                        dispatch(isFavourite(!isFavouriteMovies,item.imdbID));
                      }}
                    >
                      UnFav
                    </button>
                  )}
                  <button>add to playlist</button>
                </div> */}
              </div>
            );
          })
        ) : (
          <h1 style={{textAlign:"center",width:"100%"}}>No Movies Found</h1>
        )}
      </div>
    </div>
  );
};

export default SingleMovie;
