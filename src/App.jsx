import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import NavBar from "./Components/Custom/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="w-full h-full font-mono text-white">
        <div className="w-full border-0 justify-center">
          <NavBar />
          <div className="w-full bg-black pt-10">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer className="bg-black" />
        </div>
      </div>
    </Router>
  );
}

export default App;
