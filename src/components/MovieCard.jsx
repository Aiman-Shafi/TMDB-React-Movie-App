/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import React from "react";
const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const MovieCard = ({ movie: { title, id, backdrop_path } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{title}</p>
      </div>

      <div>
        <img src={IMG_URL + backdrop_path} alt={title} />
        <Link to={`/movie/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default MovieCard;
