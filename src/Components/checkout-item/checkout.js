import React from 'react';
import './checkout.style.scss';
import {clearItemFromCart} from './../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {addItemFromCart, removeItemFromCart} from './../../redux/cart/cart.action'
const CheckoutItems=(props)=>(
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={props.item.imageUrl} />

        </div>
        <span className="name">{props.item.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>props.removeItem(props.item)}> 
                &#10094;
            </div>
            <span className="value">
                {props.item.quantity}
            </span>
            <div className="arrow" onClick={()=>props.addItem(props.item)}>
                &#10095;
            </div>
       </span>
        <span className="price">{props.item.price}</span>
        <div className="remove-button" onClick={()=>props.clearItem(props.item)}  >

            &#10005;

        </div>
        
    </div>
)

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    addItem:item=>dispatch(addItemFromCart(item)),
    removeItem:item=>dispatch(removeItemFromCart(item))


})
export default connect(null,mapDispatchToProps)(CheckoutItems);