import React from 'react';
import './cartDropdown-component.scss';
import CustomButton from './../custom-button/custom-btn';
import CartItem from './cart-item-component';
import {connect} from 'react-redux';
import {selectCartItems} from './../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { toggleCartHidden } from '../../redux/cart/cart.action';
const CartDropdown =({cartItems,history,dispatch})=>{
    return(
        <div className="cart-dropdown">
        <div className="cart-items">

            {
                cartItems.length ? 
                    cartItems.map(cartItem=>(
                        <CartItem key={cartItem.id} item={cartItem} />

                    )) :

                    <span className="empty-message">
                        Your cart is empty
                    </span>
            }

        </div>
        <CustomButton 
            onClick={()=>{
                    history.push('./checkout');
                    dispatch(toggleCartHidden())
                }
            }
        >
            Go to checkout
        </CustomButton>
    </div>
    )

    
}

const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)

})
export default withRouter(connect(mapStateToProps)(CartDropdown));