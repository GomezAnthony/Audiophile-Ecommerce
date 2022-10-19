import YX1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
const Earphones = ({ earphoneData }) => {
  return (
    <div>
      <div className="bg-p-color h-24 text-w-color text-3xl font-light uppercase text-center p-6">
        Earphones
      </div>
      <div className="container mx-auto w-[90%] py-20">
        <div className="flex flex-col items-center pb-28">
          <img className="rounded-xl pb-10" src={YX1} alt="ZX9" />
          <p className="uppercase pb-2 text-o-color tracking-[.5em] text-lg">
            New Product
          </p>
          <h1 className="text-4xl text-center font-semibold uppercase pb-4">
            {earphoneData[0].name}
          </h1>
          <p className="text-center w-[84%] text-p-color font-light pb-5">
            {earphoneData[0].description}
          </p>
          <button className="bg-o-color hover:bg-orange-200 tr text-w-color w-[200px] h-[60px] mx-auto uppercase pb">
            See Product
          </button>
        </div>
      </div>
      <Categories />
      <Footer />
    </div>
  );
};

export default Earphones;
