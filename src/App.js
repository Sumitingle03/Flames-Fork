import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginPage from "./pages/login";
import RegistrationPage from "./pages/register";

/*import RegistrationPage from "./pages/register";*/

function App() {
  return (
    
    <div>
      
      <Nav/>
      

      <Router>  {/* ✅ Ensure this wraps everything */}
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage/>} />
      </Routes>
    </Router>

      <Footer />
    </div>
  );
}

export default App;
