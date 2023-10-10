const Home = (props) => {
  const { movies } = props;
  return (
    <>
      <div className="search-container">
        <input type="text" id="movie-search" placeholder="Search for a movie" />
        <button id="search-button">search</button>
      </div>
      <div className="movie-cards">
        <div className="movie-card">
          <img
            src="https://resizing.flixster.com/WjuuMiDmu89ljIvxWpGbCilfTqY=/300x300/v2/https://resizing.flixster.com/v7TV6NeSNV0aOWjXGyl5BI056yg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FjODIxZjUzLTY5OTEtNGRmOS1hMzc4LTg0MjAyOGI1OTFiNS53ZWJw"
            alt="GRUDGE"
          />
          <h3>Movie title : GRUDGE</h3>
          <p>release year : 2019</p>
          <p>Rating: ★★★★★</p>
        </div>
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
