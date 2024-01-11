import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  if (cart.lenght === 0) {
    return (
      <>
        <p>no hay elementos en el carrito</p>
        <Link to="/">hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p> total : ${totalPrice}</p>
      <Link to="/Checkuot">
        {" "}
        <button className="registro">Finalizar compra </button>
      </Link>
    </>
  );
};

export default Cart;
