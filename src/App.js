import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginPage from "./pages/login";

function App() {
  return (
    
    <div>
      
      <Nav/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
