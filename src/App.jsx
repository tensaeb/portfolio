// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar/Navbar";
import Themes from "./components/Theme/Themes.jsx";
import Router from "./Router"; // Import the Router component

function App() {
  ReactGA.initialize("G-WHHLXP0EL0");

  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Router /> {/* Use the Router component */}
    </BrowserRouter>
  );
}

export default App;
