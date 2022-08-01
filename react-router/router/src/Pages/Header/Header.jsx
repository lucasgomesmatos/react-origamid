import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/sobre'}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
