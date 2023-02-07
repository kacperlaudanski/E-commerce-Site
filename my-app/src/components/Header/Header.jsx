import React from 'react'; 
import Logo from '../../images/logo.svg'
import ProfilePicture from '../../images/image-avatar.png'
import './header.scss'
import CartButton from './CartButton';

const Header = (props) => {
 return (
        <header className='header'>
            <div className='logo-nav'>
                <img src={Logo}></img>
                <nav className='nav-menu'>
                  <a href='#'>Collections</a>
                  <a href='#'>Men</a>
                  <a href='#'>Women</a>
                  <a href='#'>About</a>
                  <a href='#'>Contact</a>
            </nav>
            </div>
            <div className='cart-profile'>
                <CartButton />
                <img src={ProfilePicture} className='header-profile-picture'></img>
            </div>
        </header>
 )
}


export default Header; 