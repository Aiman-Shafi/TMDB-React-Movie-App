import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import icon from "../assets/icon.svg";
//a45feb7a543d224f42b8447894f1e7c2
const API_URL = "https://api.themoviedb.org/3/search/movie?query=";
const API_KEY = "&api_key=a45feb7a543d224f42b8447894f1e7c2";
// const IMG_URL = `https://image.tmdb.org/t/p/w500`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}${title}${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
  };

  console.log(movies);
  return (
    <>
      <h2>data</h2>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyPress={() => searchMovies(searchTerm)}
        />
        <img
          src={icon}
          width="90px"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
        </div>
      ) : (
        <div>nothing found!</div>
      )}
    </>
  );
}

export default Home;
