import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={HomePage} />
          <Route exact path="/about" element={AboutPage} />
          <Route path="/singleshow/:id" element={SinglePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
