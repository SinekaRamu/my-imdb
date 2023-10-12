import Layout from "../components/Layout";
import MovieForm from "../components/MovieForm";

const FormPage = () => {
  function handleAddMovie(newMovie) {
    const updatedMovies = [{ id: uuidv44(), ...newMovie }, ...movies];
    // setMovies(updatedMovies);
    console.log("movies", updatedMovies);
    // setToLocalStorage(updatedMovies);
  }
  return (
    <Layout title="MovieForm">
      <div className="backgroundForm">
        <MovieForm onAddMovie={handleAddMovie} />
      </div>
    </Layout>
  );
};

export default FormPage;
