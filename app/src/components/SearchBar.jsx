const SearchBar = (props) => {
  const { setSearchTerm, searchTerm } = props;
  const handleSearch = () => {
    console.log("clicked search");
  };
  return (
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
  );
};

export default SearchBar;
