import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from './../cart-component/cartIcon-component';
import CartDropdown from './../cart-component/cartDropdown-component'
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header=({currentUser,hidden})=>(
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
            {currentUser ? <div className='option' onClick={()=>auth.signOut() }>
                    SIGN OUT

                </div>:
                    <Link className='option' to="/signin">SIGN IN</Link>
            }

            
            <CartIcon/>
        </div>
        {
            hidden ? <CartDropdown/> :null
        }
      
    </header>
);

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser,
    hidden:state.cart.hidden
})
export default  connect(mapStateToProps)(Header);