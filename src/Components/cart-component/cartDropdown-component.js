import React from 'react';
import './cartDropdown-component.scss';
import CustomButton from './../custom-button/custom-btn';
import CartItem from './cart-item-component';
import {connect} from 'react-redux';
const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">

            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />

                ))
            }

        </div>
        <CustomButton>
            Go to checkout
        </CustomButton>

    </div>
)

const mapStateToProps=(state)=>({
    cartItems:state.cart.cartItems

})
export default connect(mapStateToProps)(CartDropdown);