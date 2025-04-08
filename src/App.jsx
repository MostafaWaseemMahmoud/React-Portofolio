import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Home/Main'
import About from "./components/About/About.jsx"
import Skills from "./components/skills/Skills.jsx"
import Projects from './components/projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Educatoin/Education.jsx'
function App() {
  return (
    <div className="app">
      
<Router>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
    </div>
    )
}

export default App
