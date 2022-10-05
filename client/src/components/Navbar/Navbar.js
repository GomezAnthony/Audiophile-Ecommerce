import hamburger from '../../assets/bars-solid.svg'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'

const Navbar = () => {
 
  return (
    <div className="bg-p-color">
      <nav className="container mx-auto flex justify-between content-center items-center h-[110px] px-3">
      <img className="cursor-pointer h-8 lg:hidden" src={hamburger} alt='Hamburger Menu' />
      <img className="h-8 md:px-20 lg:px-10" src={logo} alt='Logo'/>
        <ul className='hidden text-w-color lg:flex justify-between w-70 m-auto sm:hidden'>
          <li className='px-3 tracking-[0.20rem]'>HOME</li>
          <li className='px-3 tracking-[0.20rem]'>HEADPHONES</li>
          <li className='px-3 tracking-[0.20rem]'>SPEAKERS</li>
          <li className='px-3 tracking-[0.20rem]'>EARPHONES</li>
        </ul>
      <img className="cursor-pointer h-8 md:ml-auto lg:px-10" src={cart} alt='Cart Icon'/>
      </nav>
    </div>
  );
};

export default Navbar;
