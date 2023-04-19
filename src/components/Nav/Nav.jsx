import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/about">About</Link>
        ds
      </li>
      <li>
        <Link to="/">HomePage</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
