import React from "react";
import CartItem from "./CartItem";

export default function CartContainer(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          {props.products.map(p => (
            <CartItem
              key={p.id}
              productId={p.id}
              price={p.price}
              handleAddToCart={props.handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
