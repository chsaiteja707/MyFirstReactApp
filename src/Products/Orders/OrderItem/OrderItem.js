import React from 'react';

const orderItem=(props)=>{
    return(
        <div>
            <p>Hi {props.name} and you can edit your name below</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default orderItem