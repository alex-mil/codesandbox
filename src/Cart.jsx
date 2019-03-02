import React from "react";

export default function Cart(props) {
  const products = Object.entries(props.products);
  return (
    <ul>
      {products.map(arr => {
        let id = arr[0],
          count = arr[1].count,
          price = arr[1].price;

        return (
          <li key={arr[0]}>
            <span>
              Product {id.substring(0, 8)} ({count} items)
            </span>
            <button onClick={e => props.removedFromCart(id)}>Remove Product</button>
          </li>
        );
      })}
    </ul>
  );
}
