function Star({ isGold }) {
  return <span className={`star ${isGold ? "gold" : ""}`}>★</span>;
}

export default Star;
