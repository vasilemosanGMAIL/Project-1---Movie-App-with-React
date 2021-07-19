import Nav from "./Nav";
import Movies from "./Movies";
import React, { useState, useEffect } from "react";

const Movies_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=50cc2d929715507f8e887ec799afc87c&page=1";
const search_URL =
  "https://api.themoviedb.org/3/search/movie?&api_key=50cc2d929715507f8e887ec799afc87c&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    if (search === "") {
      getMovies(Movies_URL);
    } else getMovies(`${search_URL}${search}`);
  }, [search]);

  return (
    <>
      <Nav search={search} setSearch={setSearch} />
      <section className="movieSection">
        <div className="container">
          <div
            id="populateMovie"
            className="movie d-flex row justify-content-center my-5 fw-normal text-center text-white"
          >
            {movies.map((movie) => (
              <Movies key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
