import Star from "./Star";
const StarRating = (props) => {
  const { rating } = props;
  return (
    <>
      {(() => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          const isGold = i < rating;
          stars.push(<Star key={i} isGold={isGold} />);
        }

        return stars;
      })()}
    </>
  );
};

export default StarRating;
