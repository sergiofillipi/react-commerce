import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const Header = () =>{
    return (
        <div className='header'>
            <Link to="/">
                <Logo className='logo'/>
            </Link>
            <nav className='header__nav'>
                <Link className='header__nav-item' to='/shop'> Shop </Link>
                <Link className='header__nav-item'> Contact </Link>
            </nav>
        </div>
        
    );
}

export default Header;