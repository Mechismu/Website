import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './screens/Home'
import OurProjects from "./screens/OurProjects";
import OurSponsors from './screens/OurSponsors'
import Team from './screens/Team'
import ContactUs from './screens/ContactUs'

function App() {
  const [currScreen, setCurrScreen] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar currScreen={currScreen} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home setCurrScreen={setCurrScreen} />}
          />
          <Route
            path="/our-projects"
            element={<OurProjects setCurrScreen={setCurrScreen} />}
          />
          <Route
            path="/our-sponsors"
            element={<OurSponsors setCurrScreen={setCurrScreen} />}
          />
          <Route
            path="/team"
            element={<Team setCurrScreen={setCurrScreen} />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs setCurrScreen={setCurrScreen} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
