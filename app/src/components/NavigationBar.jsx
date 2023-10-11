const NavigationBar = (props) => {
  const { setShowAddMovie } = props;
  return (
    <div className="navBar">
      <a href="#" onClick={() => setShowAddMovie(false)}>
        Home
      </a>
      <a href="#" onClick={() => setShowAddMovie(true)}>
        Add Movie
      </a>
    </div>
  );
};

export default NavigationBar;
