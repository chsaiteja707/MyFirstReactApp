import React,{Component} from 'react';

import CartItem from './CartItem/CartItem';

class Cart extends Component{
    state={
        cartItems:[
            {id:1,name:'cloud services',price:50},
            {id:1,name:'AI services',price:50},
            {id:1,name:'Support services',price:50}
        ],
        showCart:true
    }
    render(){
        return(
            <div className="component-cart">
                This is 1 way binding
                {this.state.cartItems.map(item=>{
                    return <CartItem
                                name={item.name}
                                price={item.price}/>
                })}
            </div>
        )
    }
}
export default Cart; 