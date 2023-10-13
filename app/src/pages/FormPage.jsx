import Layout from "../components/Layout";
import MovieForm from "../components/MovieForm";

const FormPage = ({ onAddMovie }) => {
  return (
    <Layout title="MovieForm">
      <div className="backgroundForm">
        <MovieForm onAddMovie={onAddMovie} />
      </div>
    </Layout>
  );
};

export default FormPage;
