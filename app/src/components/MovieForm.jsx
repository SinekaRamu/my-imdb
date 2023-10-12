import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MovieForm = (props) => {
  const { onAddMovie } = props;
  const [movie, setMovie] = useState({
    id: uuidv4(),
    image: "",
    title: "",
    year: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(movie);
    setMovie({
      image: "",
      title: "",
      year: "",
      rating: "",
    });
  };
  return (
    <>
      <h2>Movie Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-image">
          Image URL:
          <input
            type="text"
            id="movie-image"
            placeholder="paste image url"
            name="image"
            value={movie.image}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="movie-title">
          Title:
          <input
            type="text"
            id="movie-title"
            placeholder="movie title"
            value={movie.title}
            name="title"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="movie-year">
          Year:
          <input
            type="number"
            id="movie-year"
            placeholder="released year"
            value={movie.year}
            name="year"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="movie-rating">
          Rating:
          <select
            id="movie-rating"
            name="rating"
            placeholder="rate the movie"
            value={movie.rating}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <button type="submit">Add Movie</button>
      </form>
    </>
  );
};

export default MovieForm;
