import React, { useState } from "react";
import productList from "../data";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProduct] = useState(productList);
  console.log(productList);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const currentProduct = products.find((product) => product.id === id);

    const newItemforCart = {
      id: Date.now(),
      product: currentProduct,
      quantity: 1,
    };

    setCart([...cart, newItemforCart]);
  };

  const increasement = (cartId) => {
    setCart(
      cart.map((itemInCart) => {
        if (itemInCart.id === cartId) {
          itemInCart.quantity += 1;
        }
        return itemInCart;
      })
    );
  };

  const decreasement = (cartId) => {
    setCart(
      cart.map((itemInCart) => {
        if (itemInCart.id === cartId && itemInCart.quantity > 1) {
          itemInCart.quantity -= 1;
        }
        return itemInCart;
      })
    );
  };

  const removeCart = (cartId) => {
    setCart(cart.filter((itemInCart) => itemInCart.id !== cartId));
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="">
        <div className="container">
          <div className="row g-3">
            <div className=" col-12">
              <NavBar
                cart={cart}
                increasement={increasement}
                decreasement={decreasement}
                removeCart={removeCart}
              />
            </div>

            {/* Product Card */}
            {products.map((product) => (
              <div key={product.id} className=" col-6 col-md-4 col-xl-3">
                <ProductCard
                  product={product}
                  cart={cart}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
