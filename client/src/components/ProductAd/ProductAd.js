const ProductAd = () => {
    return (  
        <div>
            <div className='h-96 bg-[url("../src/assets/image-best-gear.jpg")] bg-cover container mx-auto w-[90%] rounded-xl'></div>
            <div className='w-[90%] container mx-auto'>
                <h1 className='text-2xl text-center w-[65%] m-auto font-medium uppercase py-10'>Bringing you the <span className='text-o-color'>best</span> audio gear</h1>
                <p className='text-sm pb-32 leading-6 font-thin text-center'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    );
}
 
export default ProductAd;
