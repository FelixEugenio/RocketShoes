import React from 'react';
import { Link } from 'react-router-dom';

import { imgHeader } from './styles';
 import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <imgHeader>
    <Link to="/">
    <img src={logo} alt="Rocketshoes"/>
    </Link>

    </imgHeader>
  );


}

export default Header;
