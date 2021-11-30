import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h3 className='navlogo'>Drink Ingredient's App</h3>
      </Link>
      <ul>
        <Link to='/'>
          <li className='navlink'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='navlink'>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
