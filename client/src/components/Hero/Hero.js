import { useState, useEffect } from 'react';
import mobileHeroImg from '../../assets/image-header.jpg'
import tableHeroImg from '../../assets/tablet-image-header.jpg'
import desktopHeroImg from '../../assets/desktop-image-hero.jpg'
const Hero = () => {
    
   

    return ( 
        <div>
            <img src={mobileHeroImg}/>
        </div>
     );
}
 
export default Hero;