// src/Router.jsx
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading"; // Adjust path if needed

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/Home.jsx"));
const About = lazy(() => import("./pages/about/About"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
