import React, { useState } from "react";
import Cart from "./Cart";

const NavBar = ({ cart,increasement,decreasement,removeCart }) => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <nav className=" d-flex justify-content-between align-items-center border rounded border-dark p-3 mt-3">
        <h3 className=" mb-0 fw-bold">Shop</h3>
        <div className="">
          <button className=" btn btn-outline-dark me-2">
            <i className=" bi bi-search"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-dark position-relative"
            onClick={() => setOpenCart(true)}
          >
            <i className=" bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
      {openCart && <Cart setOpenCart={setOpenCart} cart={cart} increasement = {increasement} decreasement = {decreasement} removeCart = {removeCart}/>}
    </>
  );
};

export default NavBar;
