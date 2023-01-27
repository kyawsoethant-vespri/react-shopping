import React from "react";
import CartItem from "./CartItem";

const Cart = ({ setOpenCart, cart, increasement, decreasement,removeCart }) => {
  const total = cart.reduce((pv,cv) => pv + cv.product.price * cv.quantity ,0).toFixed(2);

  return (
    <div className="w-100 fixed-top bg-black-05">
      <div className=" row min-vh-100 justify-content-end">
        <div className=" col-10 col-md-6 col-lg-4 p-3">
          <div className=" h-100 bg-white rounded-3 me-3 p-3 position-relative">
            <h4 className=" d-flex">
              <span> Cart Item </span>
              <span className=" badge bg-dark ms-2"> {cart.length} </span>
              <i
                className=" bi bi-x-lg ms-auto"
                onClick={() => setOpenCart(false)}
              />
            </h4>

            {cart.map((itemInCart) => (
              <CartItem
                itemInCart={itemInCart}
                key={itemInCart.id}
                increasement={increasement}
                decreasement={decreasement}
                removeCart={removeCart}
              />
            ))}

            <div className=" position-absolute bottom-0 start-0 p-3 d-flex justify-content-between w-100 border-top">
             <h4> Total </h4>
             <h4> $ {total} </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
