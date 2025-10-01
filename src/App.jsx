import { Route, Routes } from "react-router-dom";
import './App.css';
import Certifications from "./components/Certifications/certifications";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skils/Skills";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/skills" element={<Skills />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </div>
    )
}

export default App
