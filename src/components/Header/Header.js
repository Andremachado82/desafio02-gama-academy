import React, { Component, useState } from 'react'
import Menu from '../../assets/svg/bars-solid.svg'
import Close from '../../assets/svg/times-solid.svg'
import CartIcon from '../../assets/svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './Header.css'
// import {DataContext} from './Context'

// import { Container } from './styles';

export default function Header() {
    const [showImage, setShowImage] = useState(true);

    const menuToggle = () => {
        setShowImage(!showImage);
    }

    return (
        <header>
            <div className="menu" onClick={menuToggle}>
                <img src={Menu} alt="" width="20" />
            </div>
            <div className="logo">
                <h1><Link to="/">Nike</Link></h1>
            </div>
            <nav>
                <ul className={!showImage ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produto">Produtos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/login">Login/Cadastro</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} alt="" width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    {/* <span>{'cart.length'}</span> */}
                    <span>{0}</span>
                    <Link to="/carrinho">
                        <img src={CartIcon} alt="" width="20" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}
