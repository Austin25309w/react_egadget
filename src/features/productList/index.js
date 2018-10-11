import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductItem from "./productlist";
import { connect } from "react-redux";

function Productlisting(props) {

  return (
    <div className="product_list">
      {props.products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({
        type: "ADD",
        payload: item
      });
    },
    removeFromCart: item => {
      dispatch({
        type: "REMOVE",
        payload: item
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productlisting);
