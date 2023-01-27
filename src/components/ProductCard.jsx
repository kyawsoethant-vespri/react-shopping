import React from "react";

const ProductCard = ({ product, cart, addToCart }) => {
  const isExitInCart = cart.find(
    (itemInCart) => itemInCart.product.id === product.id
  );

  return (
    <>
      <div className=" card border-dark">
        <div className=" card-body">
          <img src={product.image} className=" mb-3" height={90} alt="" />
          <p className=" text-truncate">{product.title}</p>
          <div className=" d-flex justify-content-between align-items-end">
            <p className=" fw-bold small mb-0">$ {product.price} </p>

            {isExitInCart ? (
              <button className=" btn btn-sm btn-dark">
                <i className=" bi bi-cart-check me-2"></i>
                Added
              </button>
            ) : (
              <button
                onClick={addToCart.bind(null, product.id)}
                className=" btn btn-sm btn-outline-dark"
              >
                <i className=" bi bi-cart-plus me-2"></i>
                Add Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
