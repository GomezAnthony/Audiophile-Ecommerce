import React from "react";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
