import categoryheadphones from "../../assets/category-headphones.png";
import { Link } from "react-router-dom";
const CatergoryCard = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-around h-screen">
        <div className=" relative bg-g-color max-w-sm w-4/5 h-44 rounded">
          <div className="absolute bottom-11 container mx-auto flex flex-col items-center">
            <img className="w-36" src={categoryheadphones} />
            <h2 className="text-p-color tracking-widest font-semibold">HEADPHONES</h2>
            <Link className="text-gray-500" to="/heaphones">SHOP</Link>
          </div>
        </div>
        <div className="bg-g-color container mx-auto w-4/5 flex flex-col justify-between content-center items-center">
          <img className="max-w-xs h-24 " src={categoryheadphones} />
          <h2>HEADPHONE</h2>
          <Link to="/heaphones">SHOP</Link>
        </div>
        <div className="bg-g-color w-64 h-24 flex flex-col justify-between content-center items-center">
          <img className="max-w-xs h-24 " src={categoryheadphones} />
          <h2>HEADPHONE</h2>
          <Link to="/heaphones">SHOP</Link>
        </div>
      </div>
    </div>
  );
};

export default CatergoryCard;
