import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/headphones" element={<Headphones />} />
      </Routes>
    </div>
  );
};

export default App;
