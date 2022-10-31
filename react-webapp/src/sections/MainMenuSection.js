import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import MenuIcon from '../components/MenuIcon';
 

const MainMenuSection = () => {
  return (
    <nav class="mainmenu container">
        <div className='logo'>
            <img src={Logo} alt=''/>
        </div>
        <div class="menu-links">
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products" end>Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-arrow-right-arrow-left" />
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection