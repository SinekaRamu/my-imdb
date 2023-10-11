import MovieCard from "./Moviecard";
import { useEffect, useState } from "react";

const Home = (props) => {
  const { movies } = props;
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
    }
    setFilteredMovies(filtered);
  }, [searchTerm]);
  const handleSearch = () => {
    console.log("clicked search");
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="movie-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by movie title..."
        />
        <button className="search-button" onClick={handleSearch}>
          search
        </button>
      </div>
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
