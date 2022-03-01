import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './screens/Home'
import OurProjects from "./screens/OurProjects";
import OurSponsors from './screens/OurSponsors'
import Team from './screens/Team'
import ContactUs from './screens/ContactUs'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/our-projects"
            element={<OurProjects />}
          />
          <Route
            path="/our-sponsors"
            element={<OurSponsors />}
          />
          <Route
            path="/team"
            element={<Team />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
