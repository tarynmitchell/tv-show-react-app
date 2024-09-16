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
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/about" Component={AboutPage} />
          <Route path="/singleshow/:id" Component={SinglePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
