import React from "react";
import CartIcon from '../../images/icon-cart.svg'
import './header.scss'


const CartButton = (props) => {
    return (
        <button type='button' className="cart-button">
            <img src={CartIcon}></img>
        </button>
    )
}

export default CartButton; 