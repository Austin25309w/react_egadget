import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import ShoppingCart from '../features/shoppingCart'
import { connect } from 'react-redux'



class Cartpage extends Component {
componentDidMount(){
    return (<div>Total price: (this.props.cart.price}</div>)
}


calculateCartTotal(){
    let total = 0;
    const cart = this.props.cart
    for(var i =0; i<cart.length; i++){
        total = total +(cart[i].price * cart[i].quantity)
    }
    return total.toFixed(2)
}
getTax(){
    let subtotal = this.calculateCartTotal()
    return (subtotal * 0.0925).toFixed(2)
}

getTotal(){
    let tax = this.getTax()
    let subtotal = this.calculateCartTotal()
    console.log(tax, subtotal)
    let total = parseFloat(tax) + parseFloat(subtotal)
    console.log(total)
    return (total).toFixed(2)
}


render (){
    return <div>
    <h2>Cartpage</h2>
    <ShoppingCart />
    <ul>
    
    <h2>Subtotal: ${this.calculateCartTotal()}</h2>
    <h2>Tax: ${ this.getTax()} (zip code: 95050)</h2>
    <h1>Total: ${this.getTotal()}</h1>
    <li><NavLink to='/checkout'>CheckOut</NavLink></li>
    </ul>
</div>
}
}


function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

// tax calculation + shipping calculate
// auto complete address by google map API

export default connect(mapStateToProps)(Cartpage);