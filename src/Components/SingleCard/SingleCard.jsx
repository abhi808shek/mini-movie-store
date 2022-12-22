import React from "react";
import "./singlecard.css";
import { useSelector } from "react-redux";

const SingleCard = () => {
  const { movieById } = useSelector((state) => state.moviesReducer);
  const { Title, Year, imdbRating, Poster, Country } = movieById;
  console.log("sniwen", movieById);
  return (
    <div className="single-movie-page">
      <div className="single-movie-card">
        <div className="single-movie-img">
          <img src={Poster} alt="" style={{width:"100%",height:"100%", borderRadius:" 18px 0px 0px 18px"}} />
        </div>
        <div className="single-movie-details">
          <div className="single-detail-inside-box">
            <h1>{Title}</h1>
            <p> {Year} </p>
            <p>{imdbRating}/10</p>
            <p>{Country}</p>
            <button className="single-movie-details-Btn"> Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
