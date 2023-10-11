const MovieCard = (props) => {
  const { movie } = props;
  return (
    <>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>
        Rating:
        {(() => {
          const stars = [];
          for (let i = 0; i < Number(movie.rating); i++) {
            stars.push(
              <span key={i} className="star gold">
                ★
              </span>
            );
          }
          for (let i = Number(movie.rating); i < 5; i++) {
            stars.push(
              <span key={i} className="star">
                ★
              </span>
            );
          }
          return stars;
        })()}
      </p>
    </>
  );
};

export default MovieCard;
