import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//imports for components and containers used in UI
import { Header, Footer } from "./containers";
import { Branding, NavigationBar } from "./components";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient_secondary_gray">
          <NavigationBar />
          <Header />
        </div>
        <div className="loginBox">
          <section>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </div>
        <div className="gradient_secondary_gray">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
