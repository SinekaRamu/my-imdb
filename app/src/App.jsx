import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import IndexPage from "./pages/IndexPage";
import NotfoundPage from "./pages/NotfoundPage";
const HomePage = lazy(() => import("./pages/FormPage"));

function Loading() {
  return <p>Loading ...</p>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <h1>My IMDB</h1>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
