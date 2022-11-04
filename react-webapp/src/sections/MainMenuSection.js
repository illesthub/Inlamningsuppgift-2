import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import MenuIcon from '../components/MenuIcon';
 

const MainMenuSection = () => {
  return (
    <nav class="mainmenu container">
        <NavLink to="/" end>
            <img src={Logo} alt='Fixxo.'/>
        </NavLink>
        <div class="menu-links">
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products">Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection