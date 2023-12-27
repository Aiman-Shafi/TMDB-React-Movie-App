// import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieDetail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=a45feb7a543d224f42b8447894f1e7c2`
    );
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    searchMovies("batman");
    console.log(params);
    console.log(movies);
  }, [params.id]);

  return (
    <div>
      <h2>{movies.title}</h2>
      <p>{movies.overview}</p>
      <p>{movies.status}</p>
      <p>{movies.tagline}</p>
      <p>{movies.popularity}</p>
    </div>
  );
}

export default MovieDetail;
