import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import { productsRequest } from "./services/products";
const App = () => {

  const [data, setData] = useState([])

  React.useEffect(() => {
    productsRequest
      .get('http://localhost:3001/products')
      .then(response => {
        setData(response.data)
      })
  }, [])

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/headphones" element={<Headphones data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
