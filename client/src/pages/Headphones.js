import xx99MarkII from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import xx99MarkI from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
import xx59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";


const Headphones = ({ headphonesData }) => {
  return (
    <div>
      <div className="bg-p-color h-24 text-w-color text-3xl font-light uppercase text-center p-6">
        Headphones
      </div>
      <div className="container mx-auto w-[90%] py-20">
        <div className="flex flex-col items-center pb-28">
          <img className="rounded-xl pb-10" src={xx99MarkII} alt='XX99 MARK II' />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {headphonesData[3].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {headphonesData[3].description}
          </p>
          <button className="bg-o-color hover:bg-orange-200 tr text-w-color w-[200px] h-[60px] mx-auto uppercase pb">
            See Product
          </button>
        </div>
        <div className="flex flex-col items-center pb-28">
          <img className="rounded-xl pb-10" src={xx99MarkI} alt="XX99 MARK I" />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {headphonesData[2].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {headphonesData[2].description}
          </p>
          <button className="bg-o-color hover:bg-orange-200 tr text-w-color w-[200px] h-[60px] mx-auto uppercase">
            See Product
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img className="rounded-xl pb-10" src={xx59} alt="XX59" />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {headphonesData[1].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {headphonesData[1].description}
          </p>
          <button className="bg-o-color hover:bg-orange-200 tr text-w-color w-[200px] h-[60px] mx-auto uppercase">
            See Product
          </button>
        </div>
      </div>
      <Categories />
      <Footer />
    </div>
  );
};

export default Headphones;
