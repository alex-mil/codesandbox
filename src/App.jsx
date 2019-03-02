import React, { Component } from "react";
import uuidv4 from "uuid";

import Header from "./Header";
import CartContainer from "./CartContainer";
import Cart from "./Cart";

class App extends Component {
  constructor() {
    super();
    let products = [];
    for (var i = 0; i < 3; i++) {
      products.push({
        id: uuidv4(),
        price: Math.floor(Math.random() * Math.floor(1000)),
      });
    }
    this.state = {
      warehouse: products,
      cart: {
        products: {},
        size: 0,
      },
    };
  }

  onAddToCart = p => {
    let { products, size } = this.state.cart;
    if (products[p.id]) {
      products[p.id] = { count: ++products[p.id].count, price: products[p.id].price + p.price };
    } else {
      products[p.id] = { count: 1, price: p.price };
    }
    this.setState({
      cart: {
        products: Object.assign({}, products),
        size: ++size,
      },
    });
  };

  onRemoveFromCart = id => {
    let { products, size } = this.state.cart;
    size -= products[id].count;
    delete products[id];
    this.setState({
      carts: {
        products: Object.assign({}, products),
        size: size,
      },
    });
  };

  render() {
    return (
      <div>
        <Header count={this.state.cart.size} />
        <CartContainer products={this.state.warehouse} handleAddToCart={this.onAddToCart} />
        <Cart products={this.state.cart.products} removedFromCart={this.onRemoveFromCart} />
      </div>
    );
  }
}

export default App;
