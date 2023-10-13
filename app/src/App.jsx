import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import IndexPage from "./pages/IndexPage";
import NotfoundPage from "./pages/NotfoundPage";
const FormPage = lazy(() => import("./pages/FormPage"));

function Loading() {
  return <p>Loading ...</p>;
}
function setToLocalStorage(movies) {
  localStorage.setItem("My-IMDB", JSON.stringify(movies));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-IMDB")) || [];
}
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => setMovies(getFromLocalStorage()), []);
  useEffect(() => {
    if (!movies) {
      setToLocalStorage(movies);
    }
  }, [movies]);
  function handleAddMovie(newMovie) {
    const updatedMovies = [{ id: uuidv4(), ...newMovie }, ...movies];
    setMovies(updatedMovies);
    setToLocalStorage(updatedMovies);
  }
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <h1>My IMDB</h1>
        <Routes>
          <Route path="/home" element={<IndexPage movies={movies} />} />
          <Route
            path="/form"
            element={<FormPage onAddMovie={handleAddMovie} />}
          />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
