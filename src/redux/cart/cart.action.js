import CartActionTypes from './cart.type';

export const toggleCartHidden =()=>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemFromCart =item=>({
    type : CartActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart =item=>({
    type : CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItemFromCart =item=>({
    type : CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
})

