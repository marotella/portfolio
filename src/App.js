import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//COMPONENTS
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import Projects from './pages/projects'
import About from "./pages/about"
function App() {
  const URL = "http://localhost:4000/"
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/projects" element={<Projects URL={URL}/>}/>
         <Route path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
