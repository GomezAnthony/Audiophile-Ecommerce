import Button from "../Button/Button";

const Hero = () => {

    return ( 
        <div>
            <div className="h-[40rem]">
                <div className="bg-mobile bg-no-repeat bg-cover h-[100%] w-[100%] bg-center md:bg-tablet">
                    <div className="py-40 text-center flex flex-col max-w-md mx-auto">
                        <h1 className="py-3 text-[1rem] uppercase text-t-color font-extralight tracking-[0.50rem]">New Products</h1>
                        <h1 className="py-4 text-w-color text-5xl uppercase font-semibold">X99 Mark II Headphones</h1>
                        <p className="py-5 leading-[2] text-t-color mx-w-[300px] font-light uppercase">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Button label="SEE PRODUCT" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;