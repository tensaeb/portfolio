import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga4";
//pages
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
//components
import Navbar from "./components/Navbar/Navbar";
import Themes from "./components/Theme/Themes.jsx";

function App() {
  ReactGA.initialize("G-WHHLXP0EL0");
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
