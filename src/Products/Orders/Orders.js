import React,{Component} from 'react';

import OrderItem from './OrderItem/OrderItem';

class Orders extends Component{
    state={
        orders:[
            {id:'abc23421423',name:'new order 1'},
            {id:'def235234',name:'new order 2'},
            {id:'ghi52345234523',name:'new order 3'}
        ]
    }

    nameChangedHandler=(event,id)=>{
        const orderIndex=this.state.orders.findIndex(p=>{return p.id===id})
        const order={...this.state.orders[orderIndex]};
        order.name=event.target.value;//will return event targeted in valueorders=[...this.state.orders];
        const orders=[...this.state.orders];
        orders[orderIndex]=order;
        this.setState({orders:orders});
    }

    render(){
        var ordersContent=null;
        ordersContent=(
            <div>
                {this.state.orders.map((order)=>{
                    return <OrderItem
                                name={order.name}
                                changed={(event)=>this.nameChangedHandler(event,order.id)}/>
                })}
            </div>
        )
        return(
            <div className="component-order">
                This is 2 way binding
                {ordersContent}
            </div>
        )
    }
}

export default Orders;