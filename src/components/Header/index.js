import React from 'react';

import { imgHeader } from './styles';
 import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <imgHeader>
    <img src={logo} alt="Rocketshoes"/>
    </imgHeader>
  );


}

export default Header;
