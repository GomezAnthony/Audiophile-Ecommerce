import React from "react";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      
    </div>
  );
};

export default App;
