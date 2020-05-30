import React,{Component} from 'react';

import Orders from './Orders/Orders';
import Cart from './Cart/Cart';

import './Products.css'

class Products extends Component{

    state={
        orderButtonClick:false,
        cartButtonClick:false
    }

    orderButtonHandler=()=>{
        this.setState({
            cartButtonClick:false,
            orderButtonClick:true
        });
    }

    cartButtonHandler=()=>{
        this.setState({
            cartButtonClick:true,
            orderButtonClick:false
        });
    }

    render(){
        var contentOfComponent=null;
        contentOfComponent=(
            <div className="component-products-btn">
                This is from products Component<br></br>
                <button className="cart-btn" onClick={this.cartButtonHandler}>Cart</button>
                <button className="order-btn" onClick={this.orderButtonHandler}>Orders</button>
            </div>
        )
        if(this.state.cartButtonClick){
            return(
                <div className="component-products">
                    {contentOfComponent}
                    <Cart/>
                </div>
            )
        }else if(this.state.orderButtonClick){
            return(
                <div className="component-products">
                    {contentOfComponent}
                    <Orders/>
                </div>
            )
        }else{
            return(
                <div className="component-products">
                    {contentOfComponent}
                </div>
            )
        } 
    }
}

export default Products