import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-p-color">
        <div className=" container mx-auto w-4/5 h-24 flex flex-row justify-between items-center ">
          <div className="">
            <Link to="/">
              <img src={logo} alt="Audiophile Logo" />
            </Link>
          </div>
          <ul className="flex space-x-9 text-w-color uppercase font-Manrope text-sm font-medium hidden">
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
