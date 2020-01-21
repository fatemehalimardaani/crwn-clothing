import React from 'react';
import './cartDropdown-component.scss';
import CustomButton from './../custom-button/custom-btn';

const CartDropdown =()=>(
    <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton>
            Go to checkout
        </CustomButton>

    </div>
)
export default CartDropdown;