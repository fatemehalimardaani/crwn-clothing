import React from 'react';
import './collection-item.scss';
import CustomButton from './../custom-button/custom-btn';
import {addItemFromCart} from './../../redux/cart/cart.action';
import {connect} from 'react-redux';
const CollectionItem=({item,addItem})=>{
    
    const {name,imageUrl,price} = item;

    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted>Add to cart </CustomButton>
    </div>
)}

const mapDispatchToProps=dispatch =>({
    addItem:item=>dispatch(addItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);