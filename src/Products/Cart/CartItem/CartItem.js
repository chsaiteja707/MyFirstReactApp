import React from 'react';

const cartItem=(props)=>{
    return(
        <div>
            <p>Service Name : {props.name} and price is : ${props.price}</p>
        </div>
    )
}

export default cartItem;