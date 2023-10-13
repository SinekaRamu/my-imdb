import Layout from "../components/Layout";
import Home from "../components/Home";
const IndexPage = ({ movies }) => {
  return (
    <Layout title="MyIMDb">
      <Home movies={movies} />
    </Layout>
  );
};

export default IndexPage;
