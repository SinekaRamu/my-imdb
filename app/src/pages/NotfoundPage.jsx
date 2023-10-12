import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const NotfoundPage = () => {
  return (
    <Layout title="error">
      <h1>Page not found</h1>
      <Link to="/">Go back to home?</Link>
    </Layout>
  );
};

export default NotfoundPage;
