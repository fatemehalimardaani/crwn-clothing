import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import {ReactComponent as Logo} from "../../assets/crown.svg";

const Header=()=>(
    <header className="header">
        <Link className="logo-container" to='/'  >
            <Logo className="logo"/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'  >
           shop
        </Link>
        <Link className='option' to='/'  >
            contact
        </Link>
            <Link className='option' to='/signin'  >
                signin
            </Link>
        </div>

    </header>
)
export default Header;