import MovieCard from "./Moviecard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(JSON.parse(localStorage.getItem("My-IMDB")) || []);
  }, [movies]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    if (!searchTerm) {
      setFilteredMovies(movies);
      // setMovies(movies);
    }
    setFilteredMovies(filtered);
  }, [searchTerm]);

  const handleSearch = () => {
    console.log("clicked search");
  };
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
