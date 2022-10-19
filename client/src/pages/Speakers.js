import ZX9 from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7 from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
const Speakers = ({ speakersData }) => {
  return (
    <div>
      <div className="bg-p-color h-24 text-w-color text-3xl font-light uppercase text-center p-6">
        Speakers
      </div>
      <div className="container mx-auto w-[90%] py-20">
        <div className="flex flex-col items-center pb-28">
          <img className="rounded-xl pb-10" src={ZX9} alt="ZX9" />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {speakersData[5].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {speakersData[5].description}
          </p>
          <button className="bg-o-color hover:bg-orange-200 tr text-w-color w-[200px] h-[60px] mx-auto uppercase pb">
            See Product
          </button>
        </div>
        <div className="flex flex-col items-center pb-28">
          <img className="rounded-xl pb-10" src={ZX7} alt="ZX7" />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {speakersData[4].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {speakersData[4].description}
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

export default Speakers;
