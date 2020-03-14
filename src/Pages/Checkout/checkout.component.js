import React from 'react';
import './checkout.style.scss'
import { connect } from 'react-redux';
import {selectCartItems , selectTotalCartItems} from './../../redux/cart/cart.selector';
import CheckoutItems from '../../Components/checkout-item/checkout';
const CheckOut=({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
             
        </div>
        {cartItems.map(item=>(
            <CheckoutItems key={item.id} item={item}/>
        ))}
        <div>
        <span>price $ {total}</span>
        </div>
    </div>
)

const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state),
    total:selectTotalCartItems(state)
})

export default connect(mapStateToProps)(CheckOut);