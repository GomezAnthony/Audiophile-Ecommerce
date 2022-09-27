import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='flex flex-col'>
          <div>
          <Link to='/'>
            <img src={logo} alt='Audiophile Logo'/>
          </Link>
          </div>
          <ul className='flex flex-row'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/headphones'>Headphones</Link></li>
            <li><Link to='speakers'>Speakers</Link></li>
            <li><Link to='earphones'>Earphones</Link></li>
          </ul>
          <div>
            <Link to='/cart'>
              <img src={cart} alt='Cart Icon'/>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
