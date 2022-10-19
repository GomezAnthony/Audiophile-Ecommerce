import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from './pages/Speakers'
import { productsRequest } from "./services/products";
const App = () => {

  const [productData, setProductData] = useState([])

  React.useEffect(() => {
    productsRequest
      .get('http://localhost:3001/products')
      .then(response => {
        setProductData(response.data)
        console.log(response.data, 'From the app')
      })
  }, [])


  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route  path="/headphones" element={<Headphones headphonesData={productData} />} />
        <Route  path="/speakers" element={<Speakers speakersData={productData} />} />
        <Route  path="/earphones" element={<Earphones earphoneData={productData} />} />
      </Routes>
    </div>
  );
};

export default App;
