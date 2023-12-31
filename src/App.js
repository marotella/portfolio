import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//COMPONENTS
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import Projects from './pages/projects'
import About from "./pages/about"
import Contact from "./pages/contact"

function App() {
  const URL = process.env.REACT_APP_API || "http://localhost:4000/"; // Accessing environment variable
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/contact" element={<Contact URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
