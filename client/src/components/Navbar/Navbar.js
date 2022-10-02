import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import bars from "../../assets/bars-solid.svg";
import { useState } from "react";
import CatergoryCard from "../CategoryCard/CategoryCard";

const Navbar = () => {
  // This hook sets the state of the navbar to be false which means to be closed
  const [openNav, setOpenNav] = useState("false");

  // If the user clicks the navbar the state will be set to true and open the nav
  const handleClick = () => {
    setOpenNav(!openNav);
  };
  return (
    <div>
      <nav className="bg-p-color">
        <div className=" container mx-auto w-4/5 h-24 flex flex-row justify-between items-center ">
          {/* The clicked event will handle the navbar to be opened or not */}
          <img
            onClick={handleClick}
            className="cursor-pointer h-7 fill-white"
            src={bars}
            alt="Navbar"
          />
          <div>
            <Link to="/">
              <img src={logo} alt="Audiophile Logo" />
            </Link>
          </div>
          
          {/* 'hidden' : "flex space-x-9 text-w-color uppercase font-Manrope text-sm font-medium " */}
          {/* If the user has not clicked on the navbar, than the class hidden will be activated. If user does, than the navbar will appear. */}

          <div>
            <Link to="/cart">
              <img src={cart} alt="Cart Icon" />
            </Link>
          </div>
        </div>
      </nav>
      {openNav ? (
            <ul className="hidden"></ul>
          ) : (
            <CatergoryCard />
          )}
    </div>
  );
};

export default Navbar;
