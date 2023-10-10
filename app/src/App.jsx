import { useState, useEffect } from "react";
import Home from "./components/Home";
import MovieForm from "./components/MovieForm";
import "./App.css";

function setToLocalStorage(movies) {
  localStorage.setItem("My-IMDB", JSON.stringify(movies));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-IMDB")) || [];
}

function App() {
  const moviesList = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BODBiMTcwMDktZGUxZi00MjhiLTgwMTQtOTc4MmViZjg5YTVhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      title: "Escape Room",
      year: "2019",
      rating: "★★★★★",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/ba/77/bb/ba77bb07526900709dadaecc967aae14.jpg",
      title: "INSIDIOUS",
      year: "2017",
      rating: "★★★★★",
    },
  ];
  const [movies, setMovies] = useState(moviesList);
  const [showAddMovie, setShowAddMovie] = useState(false);

  useEffect(() => setMovies(getFromLocalStorage()), []);
  useEffect(() => {
    setToLocalStorage(movies);
  }, [movies]);

  function handleAddMovie(newMovie) {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setToLocalStorage(updatedMovies);
    setShowAddMovie(false);
  }

  return (
    <>
      <h1>My iMDb</h1>
      <div className="navBar">
        <a href="#" onClick={() => setShowAddMovie(false)}>
          Home
        </a>
        <a href="#" onClick={() => setShowAddMovie(true)}>
          Add Movie
        </a>
      </div>
      <main>
        {showAddMovie ? (
          <div className="backgroundForm">
            <div id="addMovie">
              <MovieForm onAddMovie={handleAddMovie} />
            </div>
          </div>
        ) : (
          <div id="home">
            <Home movies={movies} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
