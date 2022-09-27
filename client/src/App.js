import React from "react";
import { Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from "./pages/Earphones";
import Home from './pages/Home'



const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/headphones" element={<Headphones/>}/>
      <Route path="/speakers" element={<Speakers/>}/>
      <Route path="/earphones" element={<Earphones/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>

    </div>
  );
};

export default App;
