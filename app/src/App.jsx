import { useState, useEffect } from "react";
import Home from "./components/Home";
import MovieForm from "./components/MovieForm";
import "./App.css";
import { v4 as uuidv44 } from "uuid";
import NavigationBar from "./components/NavigationBar";

function setToLocalStorage(movies) {
  localStorage.setItem("My-IMDB", JSON.stringify(movies));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-IMDB")) || [];
}

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);

  useEffect(() => setMovies(getFromLocalStorage()), []);
  useEffect(() => {
    if (!movies) {
      setToLocalStorage(movies);
    }
  }, [movies]);

  function handleAddMovie(newMovie) {
    const updatedMovies = [{ id: uuidv44(), ...newMovie }, ...movies];
    setMovies(updatedMovies);
    setToLocalStorage(updatedMovies);
    setShowAddMovie(false);
  }

  return (
    <>
      <h1>My iMDb</h1>
      <NavigationBar setShowAddMovie={setShowAddMovie} />
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
