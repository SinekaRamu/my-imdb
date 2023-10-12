import StarRating from "./StarRating";
const MovieCard = (props) => {
  const { movie } = props;
  return (
    <>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>
        Rating:
        <StarRating rating={movie.rating} />
      </p>
    </>
  );
};

export default MovieCard;
