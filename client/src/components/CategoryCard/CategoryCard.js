import categoryheadphones from '../../assets/category-headphones.png'
import { Link } from "react-router-dom";
const CatergoryCard = () => {
    return ( 
        <div>
            <div className=" bg-yellow-800 flex flex-col items-center justify-around h-screen">
                <div className="bg-g-color container mx-auto w-4/5 h-40 flex flex-col justify-end start items-center">
                    <img className='w-36' src={categoryheadphones}/>
                    <h2>HEADPHONE</h2>
                    <Link to='/heaphones'>SHOP</Link>
                </div>
                <div className="bg-g-color container mx-auto w-4/5 flex flex-col justify-between content-center items-center">
                    <img className='max-w-xs h-24 ' src={categoryheadphones}/>
                    <h2>HEADPHONE</h2>
                    <Link to='/heaphones'>SHOP</Link>
                </div>
                <div className="bg-g-color w-64 h-24 flex flex-col justify-between content-center items-center">
                    <img className='max-w-xs h-24 ' src={categoryheadphones}/>
                    <h2>HEADPHONE</h2>
                    <Link to='/heaphones'>SHOP</Link>
                </div>
            </div>
        </div>
     );
}
 
export default CatergoryCard;