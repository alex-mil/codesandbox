import React, { Component } from "react";
import uuidv4 from "uuid";

import Header from "./Header";
import CartContainer from "./CartContainer";
import Cart from "./Cart";

class App extends Component {
  constructor() {
    super();
    let products = [];
    for (var i = 0; i < 6; i++) {
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
        visible: false,
      },
    };
  }

  onAddToCart = p => {
    let { products, size } = this.state.cart;
    if (products[p.id]) {
      products[p.id] = {
        count: ++products[p.id].count,
        price: products[p.id].price + p.price,
      };
    } else {
      products[p.id] = { count: 1, price: p.price };
    }
    ++size;

    this.setState({
      cart: Object.assign({}, this.state.cart, { products, size }),
    });
  };

  onRemoveFromCart = id => {
    let { products, size } = this.state.cart;
    let newCart = null;

    size -= products[id].count;
    delete products[id];
    if (size === 0) {
      newCart = Object.assign({}, this.state.cart, { products, size, visible: false });
    } else {
      newCart = Object.assign({}, this.state.cart, { products, size });
    }
    this.setState({
      cart: newCart,
    });
  };

  onShowCart = e => {
    const { visible } = this.state.cart;
    this.setState({
      cart: Object.assign({}, this.state.cart, { visible: !visible }),
    });
  };

  render() {
    const ids = Object.keys(this.state.cart.products);
    return (
      <div>
        <Header count={this.state.cart.size} cartShown={this.onShowCart} />
        <CartContainer
          products={this.state.warehouse}
          handleAddToCart={this.onAddToCart}
          productsInCart={ids}
        />
        <Cart
          productsState={this.state.cart.products}
          removedFromCart={this.onRemoveFromCart}
          visible={this.state.cart.visible}
          handleModal={this.onShowCart}
        />
        <div class={this.state.cart.visible ? "modal-backdrop fade show" : ""} />
        <pre style={{ color: "#e83e8c", fontWeight: "700" }}>
          {JSON.stringify(this.state.cart, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
