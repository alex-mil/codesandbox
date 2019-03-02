import React from "react";

export default function Cart({
  productsState = {},
  visible = false,
  removedFromCart = fn,
  handleModal = fn,
}) {
  const products = Object.entries(productsState);
  let modalClasses = ["modal", "fade"];
  let inlineStyle = { display: "block", paddingRight: "17px" };
  let totalPrice = 0;

  if (visible) {
    modalClasses.push("show");
    totalPrice = products.reduce((sum, arr) => sum + arr[1].price, 0);
  } else {
    modalClasses.pop();
    inlineStyle = {};
  }

  return (
    <div>
      <div class={modalClasses.join(" ")} style={inlineStyle}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Products List</h5>
            </div>
            <div class="modal-body">
              <ul class="list-unstyled">
                {products.map(arr => {
                  let id = arr[0],
                    count = arr[1].count,
                    price = arr[1].price;

                  return (
                    <li key={id} class="media">
                      <div class="media-body">
                        <h6 class="mt-0 mb-1">
                          Product {id.substring(0, 8)}
                          &nbsp;
                          <a href="#" onClick={e => removedFromCart(id)}>
                            Remove
                          </a>
                        </h6>
                        Quantity: {count}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="modal-footer">
              Total Price: {totalPrice}
              &nbsp;&nbsp;
              <button type="button" class="btn btn-primary" onClick={handleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
