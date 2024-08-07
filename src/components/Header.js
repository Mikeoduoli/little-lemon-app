import { Link } from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg';
import '../App.css';

const Header = () => {
  return (
    <div className='header'>
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Nairobi</h3>
          <p>We are a family - owned Mediterranean restraunt, 
            focused on traditional recipes served with a modern twist
          </p>
          
          <Link to='/booking'><button aria-label="On Click">Reserve a Table</button></Link>
        </div>

        <div className='banner-img'>
          <img
           src={bannerImg}
           alt='banner'
          />
        </div>
      </section>
    </div>
  )
}

export default Header;
