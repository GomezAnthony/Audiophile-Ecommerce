import hamburger from "../../assets/bars-solid.svg";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import { useState } from "react";
import headphones from "../../assets/category-headphones.png";
import speakers from "../../assets/category-speakers.png";
import earphones from "../../assets/category-earphones.png";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  // This sets the state of the navbar to be false
  const [isOpen, setIsOpen] = useState("false");

  const openNavClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="bg-p-color relative ">
      <nav className="container mx-auto w-[90%] flex justify-between content-center items-center h-[110px] px-3">
        <img
          onClick={openNavClick}
          className="cursor-pointer h-8 lg:hidden"
          src={hamburger}
          alt="Hamburger Menu"
        />
        <Link to='/'>
        <img className="h-8 md:px-20 lg:px-10" src={logo} alt="Logo" />
        </Link>
        <ul className="hidden text-w-color lg:flex justify-between w-70 m-auto sm:hidden">
          <li className="px-3 tracking-[0.20rem]">HOME</li>
          <li className="px-3 tracking-[0.20rem]">HEADPHONES</li>
          <li className="px-3 tracking-[0.20rem]">SPEAKERS</li>
          <li className="px-3 tracking-[0.20rem]">EARPHONES</li>
        </ul>
        <img
          className="cursor-pointer h-8 md:ml-auto lg:px-10"
          src={cart}
          alt="Cart Icon"
        />
      </nav>
      {isOpen ? (
        <div className=""></div>
      ) : (
        <div className="absolute z-50">
        <div className="h-screen w-screen bg-w-color py-[80px]   flex flex-col justify-between">
          <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
            <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
              <img
                className="w-48"
                src={headphones}
                alt="Headphones Category"
              />
              <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
                Heaphones
              </h2>
              <Link to='headphones' className="flex justify-center items-center text-gray-500">
                SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
              </Link>
            </div>
          </div>
          <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
            <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
              <img className="w-48" src={speakers} alt="Headphones Category" />
              <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
                SPEAKERS
              </h2>
              {/* <Link to='/speakers' className="flex justify-center items-center text-gray-500">
                SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
              </Link> */}
            </div>
          </div>
          <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
            <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
              <img className="w-48" src={earphones} alt="Headphones Category" />
              <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
                Earphones
              </h2>
              {/* <Link to='/earphones' className="flex justify-center items-center text-gray-500">
                SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
              </Link> */}
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
