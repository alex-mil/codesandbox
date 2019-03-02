import React from "react";
import CartItem from "./CartItem";

export default function CartContainer({
  products = [],
  productsInCart = [],
  handleAddToCart = fn,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          {products.map(p => (
            <CartItem
              key={p.id}
              productId={p.id}
              price={p.price}
              inCart={productsInCart.includes(p.id)}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
