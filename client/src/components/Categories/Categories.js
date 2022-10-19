import headphones from "../../assets/category-headphones.png";
import speakers from "../../assets/category-speakers.png"
import earphones from "../../assets/category-earphones.png"
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import ZX9Category from "../ZX9Category/ZX9Category";
import ZX7Category from "../XZ7Speaker/ZX7Category";
import YX1Category from "../YX1Category/YX1Category";
import ProductAd from "../ProductAd/ProductAd";
const Categories = () => {
  return (
    <div className="my-[100px]">
      <div className="flex flex-col justify-between h-[760px] mb-40 md:flex md:flex-row md:w-[90%] md:mx-auto md:h-[100px]">
        <div className="bg-g-color h-[200px] w-[90%] container mx-auto rounded-md relative">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={headphones} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Heaphones
            </h2>
            <Link to='headphones' className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-g-color h-[200px] w-[90%] container rounded-md mx-auto relative md:mx-5">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={speakers} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Speakers
            </h2>
            <Link to='speakers' className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-g-color h-[200px] w-[90%] container rounded-md mx-auto relative">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={earphones} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Earphones
            </h2>
            <Link to='Earphones' className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <ZX9Category />
      <ZX7Category />
      <YX1Category />
      <ProductAd />
    </div>
  );
};

export default Categories;
