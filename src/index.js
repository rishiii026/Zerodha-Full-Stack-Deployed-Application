import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import HomePage from "./LandingPage/Home/HomePage";
import Signup from "./LandingPage/Signup/Signup";
import About from "./LandingPage/About/AboutPage";
import Product from "./LandingPage/Product/ProductPage";
import Pricing from "./LandingPage/Pricing/PricingPage";
import Support from "./LandingPage/Support/SupportPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import NotFound from "./LandingPage/NotFound";
import Login from "./LandingPage/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);