import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket} from 'react-icons/md';
import { imgHeader,Carr } from './styles';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <imgHeader>
    <Link to="/">
    <img src={logo} alt="Rocketshoes"/>
    </Link>

    <Carr to="/">
        <div>
            <strong>Meu Carrinho</strong>
            <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff"/>

    </Carr>

    </imgHeader>
  );


}

export default Header;
