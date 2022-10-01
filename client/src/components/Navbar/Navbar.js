import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import bars from "../../assets/bars-solid.svg";
import { useState } from "react";

const Navbar = () => {
  // This hook sets the state of the navbar to be false which means to be closed
  const [openNav, setOpenNav] = useState('false')

  // If the user clicks the navbar the state will be set to true and open the nav
  const handleClick = () => {
    setOpenNav(!openNav)
  }
  return (
    <div>
      <nav className="bg-p-color">
        <div className=" container mx-auto w-4/5 h-24 flex flex-row justify-between items-center ">
          {/* The clicked event will handle the navbar to be opened or not */}
            <img onClick={handleClick}  className="cursor-pointer h-7 fill-white" src={bars}  alt="Navbar" />
          <div>
            <Link to="/">
              <img src={logo} alt="Audiophile Logo" />
            </Link>
          </div>
        {/* If the user has not clicked on the navbar, than the class hidden will be activated. If user does, than the navbar will appear. */}
          <ul className={openNav ? 'hidden' : "flex space-x-9 text-w-color uppercase font-Manrope text-sm font-medium "}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/headphones">Headphones</Link>
            </li>
            <li>
              <Link to="speakers">Speakers</Link>
            </li>
            <li>
              <Link to="earphones">Earphones</Link>
            </li>
          </ul>
          <div>
            <Link to="/cart">
              <img src={cart} alt="Cart Icon" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
