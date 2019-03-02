import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>Computer e-Shop Checkout</h1>
      <nav className="navbar fixed-top navbar-light-no bg-light">
        <a className="navbar-brand" href="#">
          Products in the cart ({props.count})
        </a>
      </nav>
    </header>
  );
}
