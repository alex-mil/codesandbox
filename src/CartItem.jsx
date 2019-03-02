import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
    };
  }

  addedToCart = e => {
    const currentProduct = {
      id: this.props.productId,
      price: this.props.price,
    };
    this.setState({
      inCart: true,
    });
    this.props.handleAddToCart(currentProduct);
  };

  render() {
    let img =
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_169248fdb13%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_169248fdb13%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

    const display = this.props.inCart && this.state.inCart ? "" : "none";

    return (
      <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5>Product {this.props.productId.substring(0, 8)}</h5>
          <p>Product description</p>
          <p style={{ color: "green", fontWeight: "700" }}>&#8362;{this.props.price}</p>
          <button className="btn btn-primary" onClick={this.addedToCart}>
            Add to cart
          </button>
          <span
            style={{
              float: "right",
              fontSize: "13px",
              color: "#007bff",
              display: display,
            }}>
            In your cart
          </span>
        </div>
      </div>
    );
  }
}
CartItem.propTypes = {
  productId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inCart: PropTypes.bool,
  handleAddToCart: PropTypes.func.isRequired,
};
export default CartItem;
