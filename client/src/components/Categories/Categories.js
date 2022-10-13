import headphones from "../../assets/category-headphones.png";
import speakers from "../../assets/category-speakers.png"
import earphones from "../../assets/category-earphones.png"
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import ZX9Category from "../ZX9Category/ZX9Category";
import ZX7Category from "../XZ7Speaker/ZX7Category";
import YX1Category from "../YX1Category/YX1Category";
const Categories = () => {
  return (
    <div>
      <div className="flex flex-col justify-between h-[760px] mb-40">
        <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={headphones} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Heaphones
            </h2>
            <Link className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={speakers} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Heaphones
            </h2>
            <Link className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-g-color h-[200px] w-[90%] container mx-auto relative">
          <div className="absolute bottom-6 flex flex-col items-center mx-auto container">
            <img className="w-48" src={earphones} alt="Headphones Category" />
            <h2 className="uppercase text-lg text-p-color font-semibold tracking-widest mb-2">
              Heaphones
            </h2>
            <Link className="flex justify-center items-center text-gray-500">
              SHOP <MdNavigateNext className="text-orange-500 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <ZX9Category />
      <ZX7Category />
      <YX1Category />
    </div>
  );
};

export default Categories;
