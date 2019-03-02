import React from "react";

export default function Header({ cartShown = false, count = 0 }) {
  return (
    <header>
      <nav className="navbar fixed-top navbar-light-no bg-light">
        <a className="navbar-brand" href="#" onClick={cartShown}>
          My Cart ({count})
        </a>
      </nav>
    </header>
  );
}
