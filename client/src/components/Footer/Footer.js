import logo from "../../assets/logo.svg";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="h-[650px] bg-p-color flex flex-col items-center justify-between">
        <div className="w-24 h-1 bg-o-color text-center"></div>
        <div>
          <img src={logo} alt="Footer Logo" />
        </div>
        <div className="list-none text-center text-sm font-medium uppercase">
          <li className="text-w-color pb-4">Home</li>
          <li className="text-w-color pb-4">Headphone</li>
          <li className="text-w-color pb-4">Speakers</li>
          <li className="text-w-color pb-4">Earphones</li>
        </div>
        <div>
          <p className="text-t-color text-m font-thin w-[78%] mx-auto text-center">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div>
          <p className="text-t-color text-m font-thin">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="text-w-color flex justify-between my-10 text-2xl w-[25%]">
          <FaFacebookSquare />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
