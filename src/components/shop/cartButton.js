import React from 'react';

function CartButton({className, icon, onClick}) {
    return (
        <a onClick={onClick} className={`${className} cart-button`}>
            <i className={icon}/>        
        </a>
    )
}

export default CartButton;
//This is finally created in the "how to slide cart component on and off screen"